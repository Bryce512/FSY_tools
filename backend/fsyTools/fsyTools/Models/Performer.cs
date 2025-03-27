using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class Performer
{
    public int ShowId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string ActDescription { get; set; } = null!;

    public int? OrderOfPerformance { get; set; }

    public bool? IsPerforming { get; set; }
}
