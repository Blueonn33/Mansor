using System.ComponentModel.DataAnnotations;

namespace Mansor.Data.Models
{
    public class TaskItem
    {
        public TaskItem()
        {
            Value = Guid.NewGuid().ToString();
        }

        public TaskItem(TaskGroup? taskGroup, string value, bool completed = false) :this()
        {
            _taskGroup = taskGroup;
            Value = value ?? throw new ArgumentNullException(nameof(value));
            IsCompleted = completed;
        }
        public int Id { get; set; }
        public int TaskGroupId { get; set; }
        public TaskGroup? _taskGroup;
        public TaskGroup TaskGroup;
        public string Value { get; set; }
        public bool IsCompleted { get; set; }
    }
}
