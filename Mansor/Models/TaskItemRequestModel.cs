using Mansor.Data.Models;

namespace Mansor.Models
{
    public class TaskItemRequestModel
    {
        public string Value { get; set; } = null!;
        public bool IsCompleted { get; set; }

        public TaskItem ToCreateTaskItem(int taskGroupId)
        {
            return new TaskItem()
            {
                Value = Value,
                Id = taskGroupId,
            };
        }

        public TaskItem GetTaskItem(int taskItemId)
        {
            return new TaskItem()
            {
                Id = taskItemId,
                Value = Value,
                IsCompleted = IsCompleted
            };
        }
    }
}
