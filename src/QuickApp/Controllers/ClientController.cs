﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using Microsoft.Extensions.Logging;
using FSW_TFS.DAL.Models.TFS;
using System.Net;
using Microsoft.AspNetCore.Authorization;

namespace CarWashApp.Controllers
{
    [Authorize]
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
            try
            {
                _unitOfWork.Clients.Update(client);
                return Ok();
            }
            catch (Exception ex)
            {
                Guid errorId = Guid.NewGuid();
                _logger.LogError("Error #{0}", errorId);
                _logger.LogError(ex.ToString());
                return StatusCode((int)HttpStatusCode.BadRequest, errorId);
            }
        }
        [HttpPost]
        public IActionResult Add([FromBody]Client client)
        {
            try
            {
                _unitOfWork.Clients.Add(client);
                return Ok();
            }
            catch (Exception ex)
            {
                Guid errorId = Guid.NewGuid();
                _logger.LogError("Error #{0}", errorId);
                _logger.LogError(ex.ToString());
                return StatusCode((int)HttpStatusCode.BadRequest, errorId);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var client = _unitOfWork.Clients.Get(id);
                _unitOfWork.Clients.Remove(client);
                return Ok();
            }
            catch (Exception ex)
            {
                Guid errorId = Guid.NewGuid();
                _logger.LogError("Error #{0}", errorId);
                _logger.LogError(ex.ToString());
                return StatusCode((int)HttpStatusCode.BadRequest, errorId);
            }
        }

    }
}