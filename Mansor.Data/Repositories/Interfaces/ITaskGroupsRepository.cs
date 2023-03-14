using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Repositories.Interfaces
{
    public interface ITaskGroupsRepository : IRepository<TaskGroup>
    {
        Task<IEnumerable<TaskGroup>> GetTaskGroupsByUserId(string userId);
        Task<int> GetCountAsync();
        Task<IEnumerable<TaskGroup>> GetAllTaskGroups();
        Task<TaskGroup?> GetTaskGroupByName(string name);
        Task<TaskGroup?> FindTaskGroup(int id);
    }
}