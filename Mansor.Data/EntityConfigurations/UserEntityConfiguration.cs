using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mansor.Data.Models;

namespace Mansor.Data.EntityConfigurations
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).HasMaxLength(255);

            builder.HasMany(u => u.TaskGroups)
               .WithOne(tg => tg.User)
               .HasForeignKey(tg => tg.UserId);

            builder.HasMany(u => u.Notes)
                 .WithOne(n => n.User)
                 .HasForeignKey(n => n.UserId);

            builder.HasMany(u => u.TimeTableDays)
               .WithOne(td => td.User)
               .HasForeignKey(td => td.UserId);
        }
    }
}