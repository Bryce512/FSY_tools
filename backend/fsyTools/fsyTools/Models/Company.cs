using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class Company
{
    public int CompanyId { get; set; }

    public string? CompanyName { get; set; }

    public int Size { get; set; }

    public string MaleCounselor { get; set; } = null!;

    public string FemaleCounselor { get; set; } = null!;

    public int? RoomId { get; set; }
}
