﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Models
{
    public class TaskGroup
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual List<TaskItem> TaskItems { get; set; } = null!;
    }
}