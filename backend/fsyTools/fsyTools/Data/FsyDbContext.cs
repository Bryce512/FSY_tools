using Microsoft.EntityFrameworkCore;

namespace fsyTools.Data;

public class FsyDbContext : DbContext
{
    public FsyDbContext(DbContextOptions<FsyDbContext> options) : base(options)
    {
        
    }
    public DbSet<Performer> Performers { get; set; }
    public object Rooms { get; internal set; }
}