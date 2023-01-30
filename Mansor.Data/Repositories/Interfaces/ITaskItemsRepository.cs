using Mansor.Data.Models;

namespace Mansor.Data.Repositories.Interfaces
{
    public interface ITaskItemsRepository : IRepository<TaskItem>
    {
        Task<int> GetCountAsync();
        Task<IEnumerable<TaskItem>> GetAllTaskItems();
        Task<TaskItem?> GetTaskItemByValue(string value);
    }
}
