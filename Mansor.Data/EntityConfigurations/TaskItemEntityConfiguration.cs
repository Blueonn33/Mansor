using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mansor.Data.Models;

namespace Mansor.Data.EntityConfigurations
{
    internal class TaskItemEntityConfiguration : IEntityTypeConfiguration<TaskItem>
    {
        public void Configure(EntityTypeBuilder<TaskItem> builder)
        {
            builder.ToTable("TaskItems");

            builder.HasKey(t => t.Id);
            builder.Property(t => t.Value).HasMaxLength(255);
            builder.Property(t => t.IsCompleted);

            builder.HasOne(r => r.TaskGroup)
                .WithMany(ti => ti.TaskItems)
                .HasForeignKey(r => r.TaskGroupId);
        }
    }
}
