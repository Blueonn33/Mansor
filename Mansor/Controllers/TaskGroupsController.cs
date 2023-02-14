using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Models;
using Microsoft.AspNetCore.Mvc;

namespace Mansor.Controllers
{
    [ApiController]
    public class TaskGroupsController : ControllerBase
    {
        private readonly ITaskGroupsService _taskGroupsService;
        private readonly IUsersService _usersService;

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
        [Route("api/taskGroup/create/{userId}")]
        public async Task<IActionResult> CreateTaskGroup([FromRoute] int userId, [FromBody] TaskGroupRequestModel taskGroupRequestModel)
        {
            var user = await _usersService.GetUserByIdAsync(userId);

            var taskGroup = taskGroupRequestModel.ToCreateTaskGroup(user);
            var result = await _taskGroupsService.CreateTaskGroup(taskGroup);

            if (result == null)
            {
                return BadRequest("The group already exists");
            }
            else
            {
                return Ok(result);
            }

        }
    }
}