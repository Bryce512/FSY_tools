

public class RoomAssignmentService
{
    private readonly YourDbContext _context;
    private readonly Random _random = new();

    public RoomAssignmentService(YourDbContext context)
    {
        _context = context;
    }

    public void AssignGroupsToRooms()
    {
        var rooms = _context.Rooms.ToList();
        var groups = _context.Groups.Where(g => g.RoomId == null).ToList();
        var maleACs = _context.Counselors.Where(c => c.IsAC && c.Gender == "M").Select(c => c.Name).ToList();
        var femaleACs = _context.Counselors.Where(c => c.IsAC && c.Gender == "F").Select(c => c.Name).ToList();

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

        _context.SaveChanges();
    }
}
