using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Mansor.Data.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            Name = string.Empty;
            IsDeleted = false;
        }

        public User(string name) : this()
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public string Name { get; set; } = null!;

        public bool IsDeleted { get; set; }
        public int? TaskGroupId { get; set; }
        public int? NoteId { get; set; }
        public ICollection<TaskGroup> TaskGroups { get; set; } = null!;
        public ICollection<Note> Notes { get; set; } = null!;
    }
}