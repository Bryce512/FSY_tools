using fsyTools.Data;
using Microsoft.AspNetCore.Mvc;
using fsyTools.Models; // Replace 'fsyTools.Models' with the actual namespace containing fsyDbContext

namespace fsyTools.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FSYController : ControllerBase
    {
        private fsyDbContext _context;

        public FSYController(fsyDbContext temp)
        {
            _context = temp;
        }
        
        [HttpGet("AllPerformers")]
        public ActionResult<IEnumerable<Performer>> GetPerformers()
        {
            var performers = _context.Performers.ToList(); // Materialize the query
            return Ok(new { performers }); // Wrap in an object to match frontend expectations
        }

    [HttpPost("assign")]
        public async Task<IActionResult> AssignRooms()
        {
            var rooms = await _context.Rooms.Include(r => r.Groups).ToListAsync();
            var groups = await _context.Groups.Where(g => g.RoomId == null).ToListAsync();
            var maleACs = await _context.Counselors.Where(c => c.IsAC && c.Gender == "M").Select(c => c.Name).ToListAsync();
            var femaleACs = await _context.Counselors.Where(c => c.IsAC && c.Gender == "F").Select(c => c.Name).ToListAsync();

            // Sort groups by size (descending) for best fit
            groups = groups.OrderByDescending(g => g.Size).ToList();

            foreach (var room in rooms)
            {
                var assignedGroups = new List<Group>();
                double remainingCapacity = room.Capacity;

                foreach (var group in groups.ToList()) // Iterate over a copy to remove items
                {
                    if (group.Size + 1.2 <= remainingCapacity)
                    {
                        room.Groups.Add(group);
                        group.RoomId = room.Id;
                        remainingCapacity -= (group.Size + 1.2);
                        assignedGroups.Add(group);
                    }
                }

                // Remove assigned groups from list
                foreach (var group in assignedGroups)
                {
                    groups.Remove(group);
                }

                // Assign conducting counselors
                room.ConductingMaleAC = maleACs.Any() ? maleACs[_random.Next(maleACs.Count)] : null;
                room.ConductingFemaleAC = femaleACs.Any() ? femaleACs[_random.Next(femaleACs.Count)] : null;
            }

            await _context.SaveChangesAsync();
            return Ok(new { message = "Room assignment completed." });
        }

        [HttpGet]
        public async Task<IActionResult> GetRoomAssignments()
        {
            var rooms = await _context.Rooms.Include(r => r.Groups).ToListAsync();
            var unassignedGroups = await _context.Groups.Where(g => g.RoomId == null).ToListAsync();

            return Ok(new { rooms, unassignedGroups });
        }
    }
};
    
