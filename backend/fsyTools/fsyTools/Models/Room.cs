using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fsyTools.Models
{
    public partial class Room
    {
        [Key]
        public int RoomId { get; set; }

        [Required]
        public string RoomName { get; set; } = null!;

        [Required]
        public string Building { get; set; } = null!;

        [Required]
        public string RoomNumber { get; set; } = null!;
        public int? Capacity { get; set; }

        public DateTime? CreationDate { get; set; }
    }
}
