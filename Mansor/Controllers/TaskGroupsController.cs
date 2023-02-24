using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Linq;
using Mansor.Data;
using Mansor.Data.Repositories;
using Mansor.Business.Services.Interfaces;
using System.Drawing.Text;
using System.Net;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.AspNetCore.Cors;

namespace Mansor.Controllers
{
    [ApiController]
    public class TaskGroupsController : ControllerBase
    {
        private readonly ITaskGroupsService _taskGroupsService;

        public TaskGroupsController(ITaskGroupsService taskGroupsService)
        {
            _taskGroupsService = taskGroupsService;
        }
        [HttpGet]
        [Route("api/taskGroups")]
        public async Task<IEnumerable<TaskGroup>> GetAllTaskGroups()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            return await _taskGroupsService.GetTaskGroupsAsync();
        }

        [HttpGet]
        [Route("api/taskGroup/{id}")]
        public async Task<IActionResult> GetTaskGroupById([FromRoute] int id)
        {
            var targetTaskGroup = await _taskGroupsService.GetTaskGroupByIdAsync(id);
            if (targetTaskGroup == null)
            {
                return NotFound();
            }
            return Ok(targetTaskGroup);
        }

        [HttpPost]
        [Route("api/taskGroup/create")]
        public async Task<IActionResult> CreateTaskGroup([FromBody] TaskGroup createTaskGroup)
        {
            var taskGroup = await _taskGroupsService.GetTaskGroupByNameAsync(createTaskGroup.Name);

            if (taskGroup != null)
            {
                return BadRequest("The group already exists");
            }

            await _taskGroupsService.AddTaskGroupAsync(createTaskGroup);
            return Ok(createTaskGroup);

        }
    }
}