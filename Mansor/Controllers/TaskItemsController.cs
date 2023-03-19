using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Models;
using Microsoft.AspNetCore.Mvc;

namespace Mansor.Controllers
{
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly ITaskItemsService _taskItemsService;
        private readonly ITaskGroupsService _taskGroupsService;
        private readonly IUsersService _usersService;
        public TaskItemsController(ITaskItemsService taskItemsService, ITaskGroupsService taskGroupsService)
        {
            _taskItemsService = taskItemsService;
            _taskGroupsService = taskGroupsService;
        }

        [HttpGet]
        [Route("api/taskItems")]
        public async Task<IEnumerable<TaskItem>> GetAllTasks()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            return await _taskItemsService.GetTaskItemsAsync();
        }

        [HttpGet]
        [Route("api/taskItems/{taskGroupId}")]
        public async Task<IActionResult> GetAllItems([FromRoute] int taskGroupId)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            var items = await _taskItemsService.GetAllItems(taskGroupId);

            if (!items.Any())
            {
                return BadRequest("No existing items!");
            }
            return Ok(items);
        }

        [HttpPost]
        [Route("api/create/taskItem/{taskGroupId}")]
        public async Task<IActionResult> CreateTaskItems([FromRoute] int taskGroupId, [FromBody] TaskItemRequestModel taskItemsRequestModel)
        {
            var taskGroup = await _taskGroupsService.GetTaskGroupById(taskGroupId);
            var taskItem = taskItemsRequestModel.TaskItems(taskGroup);

            var result = await _taskItemsService.CreateTaskItem(taskItem);

            return Ok(result);
        }

        [HttpDelete]
        [Route("api/delete/taskItem/{taskItemId}")]
        public async Task<IActionResult> DeleteTaskItem([FromRoute] int id)
        {
            var targetItem = await _taskItemsService.GetTaskItemById(id);
            if (targetItem == null)
            {
                return NotFound("Task is completed");
            }
            if (targetItem.IsCompleted)
            {
                return BadRequest("Task is already completed");
            }
            await _taskItemsService.DeleteAsync(targetItem);

            return Ok(targetItem);
        }
    }
}
