using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class TestimonyRoom
{
    public int TestimonyRoomId { get; set; }

    public string RoomName { get; set; } = null!;

    public string Building { get; set; } = null!;

    public string RoomNumber { get; set; } = null!;

    public int? Capacity { get; set; }

    public DateTime? CreationDate { get; set; }
}
