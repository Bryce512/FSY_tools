using fsyTools.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fsyTools.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FSYController : ControllerBase
    {
        private FsyContext _context;
        private Random _random = new Random();

        public FSYController(FsyContext temp)
           {
               _context = temp;
           }


        [HttpGet("AllPerformers")]
        public ActionResult<IEnumerable<VarietyShow>> GetPerformers()
        {
            var performers = _context.VarietyShows.ToList(); // Materialize the query
            return Ok(new { performers }); // Wrap in an object to match frontend expectations
        }


        [HttpPost("assign")]
        public async Task<IActionResult> AssignRooms()
            {
                var rooms = await _context.Rooms.ToListAsync();
                var companies = await _context.Companies.Where(g => g.RoomId == null).ToListAsync();
                var maleACs = await _context.Users
                    .Where(c => c.PermissionGroupId == 1 && c.UserGender == "M")
                    .Select(c => c.UserFullname)
                    .ToListAsync();
                var femaleACs = await _context.Users
                    .Where(c => c.PermissionGroupId == 1 && c.UserGender == "F")
                    .Select(c => c.UserFullname)
                    .ToListAsync();

                // Sort companies by size (descending) for best fit
                companies = companies.OrderByDescending(g => g.Size).ToList();

                foreach (var room in rooms)
                {
                    var assignedCompanies = new List<Company>();
                    int? remainingCapacity = room.Capacity;

                    foreach (var company in companies.ToList()) // Iterate over a copy to remove items
                    {
                        if (company.Size + 1.2 <= remainingCapacity)
                        {
                            company.RoomId = room.RoomId; // Assign the room ID to the company
                            remainingCapacity -= (int?)(company.Size + 1.2);
                            assignedCompanies.Add(company);
                        }
                    }

                    // Remove assigned companies from the list
                    foreach (var company in assignedCompanies)
                    {
                        companies.Remove(company);
                    }

                    // Assign conducting counselors randomly
                    room.ConductingMale= maleACs.Any() ? maleACs[_random.Next(maleACs.Count)] : null;
                    room.ConductingFemal = femaleACs.Any() ? femaleACs[_random.Next(femaleACs.Count)] : null;
                }

                await _context.SaveChangesAsync();
                return Ok(new { message = "Room assignment completed." });
            }


        [HttpGet("assignments")]
        public async Task<IActionResult> GetRoomAssignments()
        {
            // Retrieve all rooms
            var rooms = await _context.Rooms.ToListAsync();

            // Retrieve all companies
            var companies = await _context.Companies.ToListAsync();

            // Group companies by RoomId and map to room names
            var roomAssignments = rooms.ToDictionary(
                room => room.RoomName,  // Use Room Name as key
                room => companies
                    .Where(c => c.RoomId == room.RoomId) // Filter companies assigned to this room
            .Select( c => new
                {
                    CompanyName = c.CompanyName,
                    MaleCounselor = c.MaleCounselor,
                    FemaleCounselor = c.FemaleCounselor
                })
            .ToList()
            );

            // Get unassigned groups (companies with no RoomId)
            var unassignedGroups = companies
                .Where(c => c.RoomId == null)
            .Select( c => new
                {
                    CompanyName = c.CompanyName,
                    MaleCounselor = c.MaleCounselor,
                    FemaleCounselor = c.FemaleCounselor
                })
            .ToList();

            return Ok(new { roomAssignments, unassignedGroups });
        }

    }
}