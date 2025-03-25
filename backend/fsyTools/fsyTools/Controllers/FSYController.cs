using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fsyTools.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FSYController : ControllerBase
    {
        private readonly FSYDbContext _fsyContext;

        public FSYController(FSYController temp)
        {
            _fsyContext = temp;
        }
    
        [HttpGet("GetVarietyShow")]
        public IActionResult GetVarietyShow ()
        {
            
        }
    }
}
