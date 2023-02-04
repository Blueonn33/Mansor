using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;


namespace Mansor.Business.Services
{
    public class TaskItemsService : ITaskItemsService
    {
        private readonly ITaskItemsRepository _taskItemsRepository;

        public TaskItemsService(ITaskItemsRepository taskItemsRepository)
        {
            _taskItemsRepository = taskItemsRepository;
        }

        public async Task<IEnumerable<TaskItem>> GetTaskItemsAsync() => await _taskItemsRepository.GetAllTaskItems();

        public async Task<TaskItem> AddTaskItem(TaskItem taskItem)
        {
            return await _taskItemsRepository.AddAsync(taskItem);
        }

        public async Task<TaskItem?> GetTaskItemByValueAsync(string value)
        {
            return await _taskItemsRepository.GetTaskItemByValue(value);
        }

        public async Task<IEnumerable<TaskItem>> GetTaskItemsByTaskGroupId(int id)
        {
            return await _taskItemsRepository.GetTaskItemsByTaskGroupId(id);
        }
    }
}
