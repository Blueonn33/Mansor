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

            builder.HasKey(tg => tg.Id);
            builder.Property(tg => tg.Name).HasMaxLength(255);

            builder.HasOne(u => u.User)
                .WithMany(tg => tg.TaskGroups)
                .HasForeignKey(i => i.UserId);

            builder.HasMany(ti => ti.TaskItems)
                .WithMany(tg => tg.TaskGroups)
                .UsingEntity<Dictionary<string, object>>(
                "TaskGroupTaskItems",
                j => j
                    .HasOne<TaskItem>()
                    .WithMany()
                    .HasForeignKey("TaskItemId")
                    .HasConstraintName("FK_TaskGroupTaskItems_TaskItems_TaskItemId")
                    .OnDelete(DeleteBehavior.Cascade),
                j => j
                    .HasOne<TaskGroup>()
                    .WithMany()
                    .HasForeignKey("TaskGroupId")
                    .HasConstraintName("FK_TaskGroupTaskItems_TaskGroups_TaskGroupId")
                    .OnDelete(DeleteBehavior.ClientCascade));
        }
    }
}
