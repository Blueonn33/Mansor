using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mansor.Data.Models;

namespace Mansor.Data.EntityConfigurations
{
    internal class TimeTableDayEntityConfiguration : IEntityTypeConfiguration<TimeTableDay>
    {
        public void Configure(EntityTypeBuilder<TimeTableDay> builder)
        {
            builder.ToTable("TimeTableDays");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).HasMaxLength(255);

            builder.HasOne(td => td.User)
                .WithMany(u => u.TimeTableDays)
                .HasForeignKey(u => u.UserId);
        }
    }
}
