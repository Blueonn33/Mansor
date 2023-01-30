using Mansor.Data.Models;

namespace Mansor.Business.Services.Interfaces
{
    public interface ITaskItemsService
    {
        Task<IEnumerable<TaskItem>> GetTaskItemsAsync();
        Task AddTaskItemAsync(TaskItem taskItem);
        Task<TaskItem?> GetTaskItemByValueAsync(string name);
    }
}
