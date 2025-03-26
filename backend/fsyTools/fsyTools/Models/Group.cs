using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using fsyTools.Models;

public class Group
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty; // Group identifier (counselors)

    [Required]
    public int Size { get; set; } // Total group size

    public string? MaleCounselor { get; set; }
    public string? FemaleCounselor { get; set; }

    // Foreign key to the assigned room (nullable if unassigned)
    public int? RoomId { get; set; }
    
    [ForeignKey("RoomId")]
    public Room? Room { get; set; } // Navigation property
}