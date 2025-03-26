using System;
using System.Collections.Generic;

namespace fsyTools.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string UserFullname { get; set; } = null!;

    public string UserGender { get; set; } = null!;

    public int? PermissionGroupId { get; set; }

    public virtual PermissionGroup? PermissionGroup { get; set; }
}
