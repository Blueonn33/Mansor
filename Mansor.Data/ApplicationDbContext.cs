using Microsoft.EntityFrameworkCore;
using Mansor.Data.Models;
using Microsoft.Extensions.Options;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;

namespace Mansor.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users => Set<User>();
        public DbSet<TaskGroup> TaskGroups => Set<TaskGroup>();
        public DbSet<TaskItem> TaskItems => Set<TaskItem>();

        public ApplicationDbContext(DbContextOptions options)
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
            var adminUserId = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = 1,
                Name = "Martin Marinov",
                Email = email,
                Password = password
            };
            builder.Entity<User>().HasData(user);

            builder.Entity<TaskGroup>().HasData(
                new TaskGroup { Id = 1, Name = "MentorMate", UserId = 1 },
                new TaskGroup { Id = 2, Name = "Homework", UserId = 1 }
                );
        }
    }
}
