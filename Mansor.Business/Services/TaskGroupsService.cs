using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Business.Services
{
    public class TaskGroupsService : ITaskGroupsService
    {
        private readonly ITaskGroupsRepository _taskGroupsRepository;

        public TaskGroupsService(ITaskGroupsRepository taskGroupsRepository)
        {
            _taskGroupsRepository = taskGroupsRepository;
        }

        public Task<TaskGroup?> GetTaskGroupById(int id)
        {
            return _taskGroupsRepository.FindTaskGroup(id);
        }

        public async Task<IEnumerable<TaskGroup>> GetTaskGroupsByUserId(string id)
        {
            return await _taskGroupsRepository.GetTaskGroupsByUserId(id);
        }

        public async Task<TaskGroup> UpdateTaskGroupName(TaskGroup taskGroup)
        {
            var group = await _taskGroupsRepository.FindTaskGroup(taskGroup.Id);

            if (group != null)
            {
                if (group.Name == taskGroup.Name)
                {
                    return null;
                }
                group.Name = taskGroup.Name;
                await _taskGroupsRepository.UpdateAsync(group);
                return group;
            }
            return null; 
        }

        public async Task<TaskGroup> CreateTaskGroup(TaskGroup taskGroup)
        {
            var isExist = await _taskGroupsRepository.GetTaskGroupByName(taskGroup.Name);
            if (isExist != null)
            {
                return null;
            }
            return await _taskGroupsRepository.AddAsync(taskGroup);
        }


        public async Task AddTaskGroupAsync(TaskGroup taskGroup) => await _taskGroupsRepository.AddAsync(taskGroup);

        public async Task<TaskGroup?> GetTaskGroupByNameAsync(string name)
        {
            return await _taskGroupsRepository.GetTaskGroupByName(name);
        }

        public async Task<IEnumerable<TaskGroup>> GetTaskGroupsAsync() => await _taskGroupsRepository.GetAllTaskGroups();

        public async Task<TaskGroup?> GetTaskGroupByIdAsync(int id) => await _taskGroupsRepository.FindAsync(id);

        public async Task UpdateTaskGroupAsync(TaskGroup taskGroup) => await _taskGroupsRepository.UpdateAsync(taskGroup);
    }
}