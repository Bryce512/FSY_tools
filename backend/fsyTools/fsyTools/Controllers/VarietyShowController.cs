using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fsyTools.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VarietyShowController : ControllerBase
    {
        private VarietyShowInterface _repo;

        public VarietyShowController(VarietyShowInterface temp)
        {
            _repo = temp;
        }

       


    }
}
