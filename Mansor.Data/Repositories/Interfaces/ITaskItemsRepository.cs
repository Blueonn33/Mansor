using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Repositories.Interfaces
{
    public interface ITaskItemsRepository : IRepository<TaskItem>
    {
        Task<IEnumerable<TaskItem>> GetAllTasksAsync(int taskGroupId);
        Task<IEnumerable<TaskItem>> GetAllTasks();
        Task<TaskItem?> FindTaskItem(int id);
    }
}
