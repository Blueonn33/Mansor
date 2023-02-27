using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; }

        public string Content { get; set; } = null!;

        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
    }
}