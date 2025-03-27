using Microsoft.EntityFrameworkCore;

namespace fsyTools.Models;

public partial class FsyContext : DbContext
{
    public FsyContext()
    {
    }

    public FsyContext(DbContextOptions<FsyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<PermissionGroup> PermissionGroups { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<SongList> SongLists { get; set; }

    public virtual DbSet<TestimonyRoom> TestimonyRooms { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Performer> VarietyShows { get; set; }
    public DbSet<Company> Groups { get; set; }
    public DbSet<User> Counselors { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=FSY.sqlite");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Company>(entity =>
        {
            entity.ToTable("company");

            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.CompanyName).HasColumnName("company_name");
            entity.Property(e => e.FemaleCounselor).HasColumnName("female_counselor");
            entity.Property(e => e.MaleCounselor).HasColumnName("male_counselor");
            entity.Property(e => e.RoomId).HasColumnName("room_id");
            entity.Property(e => e.Size).HasColumnName("size");
        });

        modelBuilder.Entity<PermissionGroup>(entity =>
        {
            entity.ToTable("permission_groups");

            entity.HasIndex(e => e.PermissionGroupName, "IX_permission_groups_permission_group_name").IsUnique();

            entity.Property(e => e.PermissionGroupId).HasColumnName("permission_group_id");
            entity.Property(e => e.PermissionGroupName).HasColumnName("permission_group_name");
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.ToTable("rooms");

            entity.Property(e => e.RoomId).HasColumnName("room_id");
            entity.Property(e => e.Building).HasColumnName("building");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.ConductingFemal).HasColumnName("conducting_femal");
            entity.Property(e => e.ConductingMale).HasColumnName("conducting_male");
            entity.Property(e => e.CreationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("TIMESTAMP")
                .HasColumnName("creation_date");
            entity.Property(e => e.RoomLoad).HasColumnName("room_load");
            entity.Property(e => e.RoomName).HasColumnName("room_name");
            entity.Property(e => e.RoomNumber).HasColumnName("room_number");
        });

        modelBuilder.Entity<SongList>(entity =>
        {
            entity.HasKey(e => e.SongId);

            entity.ToTable("song_list");

            entity.Property(e => e.SongId).HasColumnName("song_id");
            entity.Property(e => e.Artist).HasColumnName("artist");
            entity.Property(e => e.CreationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("TIMESTAMP")
                .HasColumnName("creation_date");
            entity.Property(e => e.Title).HasColumnName("title");
        });

        modelBuilder.Entity<TestimonyRoom>(entity =>
        {
            entity.ToTable("testimony_rooms");

            entity.Property(e => e.TestimonyRoomId).HasColumnName("testimony_room_id");
            entity.Property(e => e.Building).HasColumnName("building");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.CreationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("TIMESTAMP")
                .HasColumnName("creation_date");
            entity.Property(e => e.RoomName).HasColumnName("room_name");
            entity.Property(e => e.RoomNumber).HasColumnName("room_number");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.HasIndex(e => e.Username, "IX_users_username").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Password).HasColumnName("password");
            entity.Property(e => e.PermissionGroupId).HasColumnName("permission_group_id");
            entity.Property(e => e.UserFullname).HasColumnName("user_fullname");
            entity.Property(e => e.UserGender)
                .HasColumnType("char(1)")
                .HasColumnName("user_gender");
            entity.Property(e => e.Username).HasColumnName("username");

            entity.HasOne(d => d.PermissionGroup).WithMany(p => p.Users).HasForeignKey(d => d.PermissionGroupId);
        });

        modelBuilder.Entity<Performer>(entity =>
        {
            entity.HasKey(e => e.ShowId);

            entity.ToTable("variety_show");

            entity.Property(e => e.ShowId).HasColumnName("show_id");
            entity.Property(e => e.ActDescription).HasColumnName("act_description");
            entity.Property(e => e.FirstName).HasColumnName("first_name");
            entity.Property(e => e.IsPerforming)
                .HasDefaultValue(true)
                .HasColumnType("BOOLEAN")
                .HasColumnName("is_performing");
            entity.Property(e => e.LastName).HasColumnName("last_name");
            entity.Property(e => e.OrderOfPerformance).HasColumnName("order_of_performance");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
