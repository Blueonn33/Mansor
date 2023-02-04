using Mansor.Data.Models;

namespace Mansor.Business.Services.Interfaces
{
    public interface ITaskItemsService
    {
        Task<IEnumerable<TaskItem>> GetTaskItemsByTaskGroupId(int id);
        Task<IEnumerable<TaskItem>> GetTaskItemsAsync();
        Task<TaskItem> AddTaskItem(TaskItem taskItem);
        Task<TaskItem?> GetTaskItemByValueAsync(string name);
    }
}
