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

        public async Task<IEnumerable<TaskItem>> GetAllTasksAsync(int taskGroupId)
        {
            return await Entities.AsNoTracking().Include(t => t.TaskGroup.User).Where(t => t.TaskGroupId == taskGroupId).ToListAsync();
        }
    }
}
