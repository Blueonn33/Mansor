using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public bool IsCompleted { get; set; }

        public virtual TaskGroup TaskGroup { get; set; }
        public virtual List<TaskItem> TaskItems { get; set; }
    }
}
