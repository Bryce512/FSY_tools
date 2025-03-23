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
        public IEnumerable<Performer> GetPerformers()
        {


            var someItem = _context.Performers;


            return someItem;
        }
    }
}
    
