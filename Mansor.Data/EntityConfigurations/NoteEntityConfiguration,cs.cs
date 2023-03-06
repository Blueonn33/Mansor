using Mansor.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mansor.Data.EntityConfigurations
{
    public class NoteEntityConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.ToTable("Notes");

            builder.HasKey(tg => tg.Id);
            builder.Property(t => t.Title).HasMaxLength(255);
            builder.Property(c => c.Content).HasMaxLength(600);

            builder.HasOne(u => u.User)
                .WithMany(n => n.Notes)
                .HasForeignKey(i => i.UserId);
        }
    }
}
