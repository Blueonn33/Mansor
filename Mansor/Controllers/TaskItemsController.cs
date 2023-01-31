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

        //[HttpPost]
        //[Route("api/create")]
        //public async Task<IActionResult> CreateTaskItem([FromBody] TaskItem createTaskItem)
        //{
        //    var taskItem = await _taskItemsService.GetTaskItemByValueAsync(createTaskItem.Value);

        //    if (taskItem == null)
        //    {
        //        return BadRequest("There is no text in the input");
        //    }

        //    await _taskItemsService.AddTaskItemAsync(createTaskItem);
        //    return Ok(createTaskItem);
        //}

        [HttpPost]
        [Route("api/taskItem/create")]
        public async Task<IActionResult> CreateTaskItem([FromRoute] int taskGroupId, [FromBody] TaskItemRequestModel taskItemRequestModel)
        {
            var taskGroup = await _tenantsService.GetTenantByIdAsync(tenandId);
            var taskGroup = trackingGroupRequestModel.ToCreateTrackingGroup(tenant);
            var result = await _trackingGroupsService.CreateTrackingGroup(tracker);

            if (result == null)
            {
                return BadRequest("The tracker already exists");
            }
            else
            {
                return Ok(result);
            }

        }
    }
}
