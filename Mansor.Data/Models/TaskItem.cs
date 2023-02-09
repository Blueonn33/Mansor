using System.ComponentModel.DataAnnotations;

namespace Mansor.Data.Models
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }

        public string Value { get; set; } = null!;

        public bool IsCompleted { get; set; }

        public virtual TaskGroup TaskGroup { get; set; } = null!;

        public int TaskGroupId { get; set; }

        public TaskItem()
        {
            IsCompleted = false;
        }
    }
}
