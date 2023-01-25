using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mansor.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Mansor.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TaskGroup> TaskGroups { get; set; }
        public DbSet<TaskItem> TaskItems { get; set; }
    }
}
