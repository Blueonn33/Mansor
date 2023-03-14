using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Mansor.Business.Services.Interfaces
{
    public interface ITaskGroupsService
    {
        Task<IEnumerable<TaskGroup>> GetTaskGroupsAsync();
        Task<IEnumerable<TaskGroup>> GetTaskGroupsByUserId(string id);
        Task<TaskGroup?> GetTaskGroupById(int id);
        Task<TaskGroup> UpdateTaskGroupName(TaskGroup taskGroup);
        Task<TaskGroup> CreateTaskGroup(TaskGroup taskGroup);
        Task<TaskGroup?> GetTaskGroupByNameAsync(string name);
        Task AddTaskGroupAsync(TaskGroup taskGroup);
        Task<TaskGroup?> GetTaskGroupByIdAsync(int id);
        Task UpdateTaskGroupAsync(TaskGroup taskGroup);
    }
}