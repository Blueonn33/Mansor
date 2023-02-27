using Microsoft.EntityFrameworkCore;
using Mansor.Data.Models;

namespace Mansor.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<TaskGroup> TaskGroups { get; set; } = null!;
        public DbSet<TaskItem> TaskItems { get; set; } = null!;
        public DbSet<Note> Notes { get; set; } = null!;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().ToTable("Users");

            SeedInitialData(builder);
        }

        private void SeedInitialData(ModelBuilder builder)
        {
            var email = "martin17@gmail.com";
            var password = "171717";
            var user = new User
            {
                Id = 1,
                Name = "Martin Marinov",
                Email = email,
                Password = password
            };
            var secondUser = new User
            {
                Id = 2,
                Name = "Yoana Ivanova",
                Email = "yoana14@gmail.com",
                Password = "141414"
            };
            builder.Entity<User>().HasData(user);
            builder.Entity<User>().HasData(secondUser);
        }
    }
}