using Mansor.Data.Models;

namespace Mansor.Business.Services.Interfaces
{
    public interface ITaskItemsService
    {
        Task<IEnumerable<TaskItem>> GetAllItems(int taskGroupId);
        Task<TaskItem> CreateTaskItem(TaskItem taskItem);
        Task<IEnumerable<TaskItem>> GetTaskItemsAsync();
    }
}
