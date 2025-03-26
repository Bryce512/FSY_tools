using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fsyTools.Data;

[Table("variety_show")]
public class Performer
{
    [Key]
    public int show_id { get; set; }
    [Required]
    public string first_name { get; set; }
    [Required]
    public string last_name { get; set; }
    [Required]
    public string act_description { get; set; }
    
    public int? team_id { get; set; }
    public int? order_of_performance { get; set; }
    public bool? is_performing { get; set; } = true;

}