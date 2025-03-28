﻿using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class Room
{
    public int RoomId { get; set; }

    public string RoomName { get; set; } = null!;

    public string Building { get; set; } = null!;

    public string RoomNumber { get; set; } = null!;

    public int? Capacity { get; set; }

    public int? RoomLoad { get; set; }

    public string ConductingMale { get; set; } = null!;

    public string ConductingFemal { get; set; } = null!;

    public DateTime? CreationDate { get; set; }
}
