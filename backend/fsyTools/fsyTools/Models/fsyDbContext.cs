using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace fsyTools.Models;

public partial class fsyDbContext : DbContext
{
    public fsyDbContext()
    {
    }

    public fsyDbContext(DbContextOptions<fsyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<PermissionGroup> PermissionGroups { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<SongList> SongLists { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<VarietyShow> VarietyShows { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=FSY.sqlite");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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
            entity.Property(e => e.CreationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("TIMESTAMP")
                .HasColumnName("creation_date");
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
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.SongLists).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.HasIndex(e => e.Username, "IX_users_username").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Password).HasColumnName("password");
            entity.Property(e => e.PermissionGroupId).HasColumnName("permission_group_id");
            entity.Property(e => e.Username).HasColumnName("username");

            entity.HasOne(d => d.PermissionGroup).WithMany(p => p.Users).HasForeignKey(d => d.PermissionGroupId);
        });

        modelBuilder.Entity<VarietyShow>(entity =>
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
