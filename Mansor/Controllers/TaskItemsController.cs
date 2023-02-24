using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Models;

namespace Mansor.Controllers
{
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
        [Route("api/taskItems/{taskGroupId}")]
        public async Task<IActionResult> GetAllItems([FromRoute] int taskGroupId)
        {
            var items = await _taskItemsService.GetAllItems(taskGroupId);

            if (!items.Any())
            {
                return BadRequest("No existing items!");
            }
            return Ok(items);
        }

        [HttpPost]
        [Route("api/create/taskItems/{taskGroupId}")]
        public async Task<IActionResult> CreateTaskItems([FromRoute] int taskGroupId, [FromBody] TaskItemsRequestModel taskItemsRequestModel)
        {
            var taskGroup = await _taskGroupsService.GetTaskGroupById(taskGroupId);
            var taskItem = taskItemsRequestModel.TaskItems(taskGroup);

            var result = await _taskItemsService.CreateTaskItem(taskItem);

            return Ok(result);
        }
    }
}
