using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Mansor.Data.Models
{
    public class Note
    {
        public Note()
        {
            Title = Guid.NewGuid().ToString();
            Content = string.Empty;
            Users = new List<User>();
        }

        public Note(int userId, string title, string content) : this()
        {
            UserId = userId;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Content = content;
        }
        public int Id { get; set; }
        public int UserId { get; set; }
        private User? _user;
        public User User
        {
            get => _user ?? throw new InvalidOperationException("Uninitialized property: " + nameof(User));
            set => _user = value;
        }
        public string Title { get; set; }
        public string Content { get; set; }

        public ICollection<User> Users { get; set; }
    }
}