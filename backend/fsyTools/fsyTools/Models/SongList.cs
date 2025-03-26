using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class SongList
{
    public int SongId { get; set; }

    public string Title { get; set; } = null!;

    public string Artist { get; set; } = null!;

    public DateTime? CreationDate { get; set; }
}
