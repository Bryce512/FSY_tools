using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fsyTools.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;

        [ForeignKey("PermissionGroupId")]
        public int? PermissionGroupId { get; set; }

        public virtual PermissionGroup? PermissionGroup { get; set; }

        public virtual ICollection<SongList> SongLists { get; set; } = new List<SongList>();

    }
}
