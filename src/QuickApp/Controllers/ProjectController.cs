using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using DAL;
using FSW_TFS.DAL.Models.TFS;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FSW_TFS.Web.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;

        public ProjectController(IUnitOfWork unitOfWork, ILogger<ProjectController> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var projects = _unitOfWork.Projects.GetAll();
            return Ok(projects);
        }

        [HttpGet("{id}")]
        public IActionResult GetProject(int id)
        {
            var project = _unitOfWork.Projects.Get(id);
            return new ObjectResult(project);
        }

        [HttpPut]
        public IActionResult Update([FromBody]Project project)
        {
            try
            {
                _unitOfWork.Projects.Update(project);
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
        public IActionResult Add([FromBody]Project project)
        {
            try
            {
                _unitOfWork.Projects.Add(project);
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
                var project = _unitOfWork.Projects.Get(id);
                _unitOfWork.Projects.Remove(project);
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