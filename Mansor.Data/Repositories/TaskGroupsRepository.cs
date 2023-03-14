using Mansor.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Repositories.Interfaces
{
    public class TaskGroupsRepository : Repository<TaskGroup>, ITaskGroupsRepository
    {
        public TaskGroupsRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task<IEnumerable<TaskGroup>> GetTaskGroupsByUserId(string userId)
        {
            return await Entities.Include(t => t.User).Where(t => t.UserId == userId).ToListAsync();
        }

        public async Task<TaskGroup?> FindTaskGroup(int id)
        {
            return await Entities.Include(t => t.User).FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<TaskGroup>> GetAllTaskGroups() => await Entities.ToListAsync();

        public async Task<int> GetCountAsync() => await Entities.CountAsync();

        public async Task<TaskGroup?> GetTaskGroupByName(string name)
        {
            return await Entities.FirstOrDefaultAsync(t => t.Name == name);
        }
    }
}
