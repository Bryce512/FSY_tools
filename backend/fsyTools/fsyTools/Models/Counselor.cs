using System.ComponentModel.DataAnnotations;

public class Counselor
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Gender { get; set; } = string.Empty; // "Male" or "Female"
}
