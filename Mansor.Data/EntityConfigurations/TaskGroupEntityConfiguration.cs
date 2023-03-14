using Mansor.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mansor.Data.EntityConfigurations
{
    public class TaskGroupEntityConfiguration : IEntityTypeConfiguration<TaskGroup>
    {
        public void Configure(EntityTypeBuilder<TaskGroup> builder)
        {
            builder.ToTable("TaskGroups");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).HasMaxLength(255);

            builder.HasOne(tg => tg.User)
                .WithMany(u => u.TaskGroups)
                .HasForeignKey(u => u.UserId);

            builder.HasMany(tg => tg.TaskItems)
                 .WithOne(ti => ti.TaskGroup)
                 .HasForeignKey(ti => ti.TaskGroupId);

        }
    }
}
