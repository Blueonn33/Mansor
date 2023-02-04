using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Mansor.Data.Repositories
{
    public class TaskItemsRepository : Repository<TaskItem>, ITaskItemsRepository
    {
        public TaskItemsRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<int> GetCountAsync() => await Entities.CountAsync();

        public async Task<IEnumerable<TaskItem>> GetAllTaskItems() => await Entities.ToListAsync();

        public async Task<TaskItem?> GetTaskItemByValue(string value)
        {
            return await Entities.FirstOrDefaultAsync(t => t.Value == value);
        }

        public async Task<IEnumerable<TaskItem>> GetTaskItemsByTaskGroupId(int taskGroupId)
        {
            return await Entities.Include(t => t.TaskGroup).Where(t => t.TaskGroupId == taskGroupId).ToListAsync();
        }
    }
}
