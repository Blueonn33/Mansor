using Microsoft.EntityFrameworkCore;
using Mansor.Data.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.Identity;
using Mansor.Data.EntityConfigurations;

namespace Mansor.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<User>
    {
        public DbSet<TaskGroup> TaskGroups => Set<TaskGroup>();
        public DbSet<TaskItem> TaskItems => Set<TaskItem>();
        public DbSet<Note> Note => Set<Note>();
        public DbSet<TimeTableDay> TimeTableDay => Set<TimeTableDay>();
        public DbSet<TimeTableItem> TimeTableItem => Set<TimeTableItem>();

        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().ToTable("Users");
            builder.Entity<IdentityRole>().ToTable(name: "Roles");
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");

            builder.ApplyConfiguration(new TaskGroupEntityConfiguration());
            builder.ApplyConfiguration(new TaskItemEntityConfiguration());
            builder.ApplyConfiguration(new NoteEntityConfiguration());
            builder.ApplyConfiguration(new UserEntityConfiguration());
            builder.ApplyConfiguration(new TimeTableDayEntityConfiguration());
            builder.ApplyConfiguration(new TimeTableItemEntityConfiguration());

            SeedInitialData(builder);
        }

        private void SeedInitialData(ModelBuilder builder)
        {
            //Add user and role
            var roleName = "Administrator";
            var adminRoleId = Guid.NewGuid().ToString();
            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Id = adminRoleId,
                Name = roleName,
                NormalizedName = roleName.ToUpper()
            });

            var email = "admin@mansor.net";
            var adminUserId = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = adminUserId,
                UserName = email,
                NormalizedUserName = email.ToUpper(),
                Email = email,
                NormalizedEmail = email.ToUpper(),
                EmailConfirmed = true,
                LockoutEnabled = false,
                PhoneNumber = "171717",
                Name = "Martin Marinov"
            };
            var passwordHasher = new PasswordHasher<User>();
            user.PasswordHash = passwordHasher.HashPassword(user, "MaNs0r");
            builder.Entity<User>().HasData(user);

            builder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>
                {
                    RoleId = adminRoleId,
                    UserId = adminUserId
                }
            );

            //Seed Days
            builder.Entity<TimeTableDay>().HasData(
                new TimeTableDay { Id = 1, Name = "Monday", UserId = adminUserId },
                new TimeTableDay { Id = 2, Name = "Tuesday", UserId = adminUserId },
                new TimeTableDay { Id = 3, Name = "Wednesday", UserId = adminUserId },
                new TimeTableDay { Id = 4, Name = "Thursday" , UserId = adminUserId },
                new TimeTableDay { Id = 5, Name = "Friday", UserId = adminUserId }
                );
        }
    }
}