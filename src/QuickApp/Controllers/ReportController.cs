using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DAL;
using Microsoft.Extensions.Logging;
using FSW_TFS.DAL.Models.TFS;
using System.Net;
using FSW_TFS.Web.ViewModels.Custom;
using AutoMapper;

namespace FSW_TFS.Web.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Reports")]
    public class ReportController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;

        public ReportController(IUnitOfWork unitOfWork, ILogger<ReportController> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var reports = _unitOfWork.Reports.GetAll();
            return Ok(reports);
        }

        [HttpGet("{id}")]
        public IActionResult GetReport(int id)
        {
            var report = _unitOfWork.Reports.Get(id);
            return new ObjectResult(report);
        }

        [HttpPut]
        public IActionResult Update([FromBody]Report report)
        {
            try
            {
                _unitOfWork.Reports.Update(report);
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
        public IActionResult Add([FromBody]ReportVm report)
        {
            try
            {
                var test = Mapper.Map<Report>(report);
                var test1 = Mapper.Map<ReportVm>(report);
                var test2 = Mapper.Map<Report>(report);
                _unitOfWork.Reports.Add(test);
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
                var report = _unitOfWork.Reports.Get(id);
                _unitOfWork.Reports.Remove(report);
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