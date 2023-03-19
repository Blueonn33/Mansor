using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Business.Services
{
    public class TaskItemsService : ITaskItemsService
    {
        private readonly ITaskItemsRepository _taskItemsRepository;
        public TaskItemsService(ITaskItemsRepository taskItemsRepository)
        {
            _taskItemsRepository = taskItemsRepository;
        }

        public async Task<TaskItem> CreateTaskItem(TaskItem taskItem)
        {
            return await _taskItemsRepository.AddAsync(taskItem);
        }

        public async Task<IEnumerable<TaskItem>> GetAllItems(int taskGroupId)
        {
            return await _taskItemsRepository.GetAllTasksAsync(taskGroupId);
        }

        public async Task<IEnumerable<TaskItem>> GetTaskItemsAsync() => await _taskItemsRepository.GetAllTasks();
        public Task<TaskItem?> GetTaskItemById(int id)
        {
            return _taskItemsRepository.FindTaskItem(id);
        }
        public Task DeleteAsync(TaskItem taskItem)
        {
            return _taskItemsRepository.DeleteAsync(taskItem);
        }
    }
}
