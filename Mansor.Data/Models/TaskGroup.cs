using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Mansor.Data.Models
{
    public class TaskGroup
    {
        public TaskGroup()
        {
            Name = Guid.NewGuid().ToString();
            TaskItems = new List<TaskItem>();
        }
        public TaskGroup(User? user, string name) : this()
        {
            _user = user;
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }
        public int Id { get; set; }

        public string Name { get; set; }
        public User? _user;
        public string? UserId { get; set; }
        public User User;
        public ICollection<TaskItem> TaskItems { get; set; }
    }
}