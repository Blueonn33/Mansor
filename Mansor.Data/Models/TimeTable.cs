using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Mansor.Data.Models
{
    public class TimeTable
    {
        public TimeTable()
        {
            Day = Guid.NewGuid().ToString();
        }

        public TimeTable(User? user, string day) : this()
        {
            _user = user;
            Day = day ?? throw new ArgumentNullException(nameof(day));
        }
        public int Id { get; set; }
        public string Day { get; set; }

        public User? _user;
        public string? UserId { get; set; }
        public User User;

    }
}