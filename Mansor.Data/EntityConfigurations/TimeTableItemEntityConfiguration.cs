using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mansor.Data.Models;

namespace Mansor.Data.EntityConfigurations
{
    internal class TimeTableItemEntityConfiguration : IEntityTypeConfiguration<TimeTableItem>
    {
        public void Configure(EntityTypeBuilder<TimeTableItem> builder)
        {
            builder.ToTable("TimeTableItems");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Value).HasMaxLength(255);
            builder.Property(p => p.IsDeleted);

            builder.HasOne(ti => ti.TimeTableDay)
                .WithMany(td => td.TimeTableItems)
                .HasForeignKey(ti => ti.TimeTableDayId);
        }
    }
}
