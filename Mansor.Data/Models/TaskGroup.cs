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
            Users = new List<User>();
        }
        public TaskGroup(int userId, string name) : this()
        {
            UserId = userId;
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }
        public int Id { get; set; }

        public string Name { get; set; }
        private User? _user;
        public User User
        {
            get => _user ?? throw new InvalidOperationException("Uninitialized property: " + nameof(User));
            set => _user = value;
        }
        public int UserId { get; set; }

        public ICollection<TaskItem> TaskItems { get; set; }
        public ICollection<User> Users { get; set; }
    }
}