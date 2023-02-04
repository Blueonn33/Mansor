namespace Mansor.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Mansor.Data.Models;
    using Mansor.Business.Services.Interfaces;
    using Mansor.Models;

    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly ITaskItemsService _taskItemsService;
        private readonly ITaskGroupsService _taskGroupsService;

        public TaskItemsController(ITaskItemsService taskItemsService, ITaskGroupsService taskGroupsService)
        {
            _taskItemsService = taskItemsService;
            _taskGroupsService = taskGroupsService;
        }

        [HttpGet]
        [Route("api/tasksList/{taskGroupId}")]
        public async Task<IActionResult> GetTaskItemsByTaskGroupId([FromRoute] int taskGroupId)
        {
            var taskItems = await _taskItemsService.GetTaskItemsByTaskGroupId(taskGroupId);

            if (!taskItems.Any())
            {
                return BadRequest("No existing task items!");
            }
            return Ok(taskItems);
        }

        [HttpPost]
        [Route("api/taskItem/create/{taskGroupId}")]
        public async Task<IActionResult> CreateTaskItem([FromRoute] int taskGroupId, [FromBody] TaskItemRequestModel taskItemRequestModel)
        {
            var taskGroup = await _taskGroupsService.GetTaskGroupByIdAsync(taskGroupId);
            var taskItem = taskItemRequestModel.ToCreateTaskItem(taskGroupId, taskGroup);
            var result = await _taskItemsService.AddTaskItem(taskItem);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Enter a text");
        }
    }
}
