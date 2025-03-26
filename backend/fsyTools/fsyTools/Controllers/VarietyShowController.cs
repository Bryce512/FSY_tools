using fsyTools.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fsyTools.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VarietyShowController : ControllerBase
    {
        private FsyDbContext _context;

        public VarietyShowController(FsyDbContext temp)
        {
            _context = temp;
        }
        
        [HttpGet("AllPerformers")]
        public ActionResult<IEnumerable<Performer>> GetPerformers()
        {
            var performers = _context.Performers.ToList(); // Materialize the query
            return Ok(new { performers }); // Wrap in an object to match frontend expectations
        }

    }
}
    
