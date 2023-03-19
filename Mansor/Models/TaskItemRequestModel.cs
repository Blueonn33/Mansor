using Mansor.Data.Models;

namespace Mansor.Models
{
    public class TaskItemRequestModel
    {
        public string Value { get; set; }
        public int TaskGroupId { get; set; }
        public bool IsCompleted { get; set; }

        public TaskItem TaskItems(TaskGroup taskGroup)
        {
            return new TaskItem()
            {
                Value = Value,
                IsCompleted = IsCompleted,
                TaskGroupId = taskGroup.Id,
                TaskGroup = taskGroup
            };
        }
    }
}
