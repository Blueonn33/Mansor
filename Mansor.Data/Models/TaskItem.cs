using System.ComponentModel.DataAnnotations;

namespace Mansor.Data.Models
{
    public class TaskItem
    {
        public TaskItem()
        {
            Value = Guid.NewGuid().ToString();
            TaskGroups = new List<TaskGroup>();
        }

        public TaskItem(int taskGroupId, string value, bool isCompleted = false) : this()
        {
            TaskGroupId = taskGroupId;
            Value = value ?? throw new ArgumentNullException(nameof(value));
            IsCompleted = isCompleted;
        }
        public int Id { get; set; }
        public int TaskGroupId { get; set; }
        private TaskGroup? _taskGroup;
        public TaskGroup TaskGroup
        {
            get => _taskGroup ?? throw new InvalidOperationException("Uninitialized property: " + nameof(TaskGroup));
            set => _taskGroup = value;
        }
        public string Value { get; set; }
        public bool IsCompleted { get; set; }

        public ICollection<TaskGroup> TaskGroups { get; set; }
    }
}
