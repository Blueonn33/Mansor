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
        [Route("api/taskGroup/create")]
        public async Task<IActionResult> CreateTaskGroup([FromBody] TaskGroup createTaskGroup)
        {
            //var user = await _usersService.GetUserByIdAsync(userId);

            //var taskGroup = taskGroupRequestModel.ToCreateTaskGroup(user);
            //var result = await _taskGroupsService.CreateTaskGroup(taskGroup);

            //if (result == null)
            //{
            //    return BadRequest("The group already exists");
            //}
            //else
            //{
            //    return Ok(result);
            //}

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