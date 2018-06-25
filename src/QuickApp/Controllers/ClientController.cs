using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using Microsoft.Extensions.Logging;
using FSW_TFS.DAL.Models.TFS;

namespace CarWashApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Clients")]
    public class ClientController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;

        public ClientController(IUnitOfWork unitOfWork, ILogger<ClientController> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var clients = _unitOfWork.Clients.GetAll();
            return Ok(clients);
        }

        [HttpGet("{id}")]
        public IActionResult GetClient(int id)
        {
            var client = _unitOfWork.Clients.Get(id);
            return new ObjectResult(client);
        }

        [HttpPut]
        public IActionResult Update([FromBody]Client client)
        {
            _unitOfWork.Clients.Update(client);
            return Ok();
        }
        [HttpPost]
        public IActionResult Add([FromBody]Client client)
        {
            _unitOfWork.Clients.Add(client);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var client = _unitOfWork.Clients.Get(id);
            _unitOfWork.Clients.Remove(client);
            return Ok();
        }

    }
}