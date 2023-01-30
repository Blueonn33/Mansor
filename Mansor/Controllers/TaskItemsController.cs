namespace Mansor.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Mansor.Data.Models;
    using Mansor.Business.Services.Interfaces;

    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly ITaskItemsService _taskItemsService;
        public TaskItemsController(ITaskItemsService taskItemsService)
        {
            _taskItemsService = taskItemsService;
        }

        [HttpGet]
        [Route("api/taskItems")]
        public async Task<IEnumerable<TaskItem>> GetAllTaskItems()
        {
            return await _taskItemsService.GetTaskItemsAsync();
        }

        [HttpPost]
        [Route("api/create")]
        public async Task<IActionResult> CreateTaskItem([FromBody] TaskItem createTaskItem)
        {
            var taskItem = await _taskItemsService.GetTaskItemByValueAsync(createTaskItem.Value);

            await _taskItemsService.AddTaskItemAsync(createTaskItem);
            return Ok(createTaskItem);
        }
    }
}
