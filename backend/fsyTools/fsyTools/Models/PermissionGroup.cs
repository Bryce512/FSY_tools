using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class PermissionGroup
{
    public int PermissionGroupId { get; set; }

    public string PermissionGroupName { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
