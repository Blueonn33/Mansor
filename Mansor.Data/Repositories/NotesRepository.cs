using Mansor.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Mansor.Data.Repositories.Interfaces
{
    public class NotesRepository : Repository<Note>, INotesRepository
    {
        public NotesRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task<IEnumerable<Note>> GetNotesByUserId(string userId)
        {
            return await Entities.Include(t => t.User).Where(t => t.UserId == userId).ToListAsync();
        }

        public async Task<Note?> FindNote(int id)
        {
            return await Entities.Include(t => t.User).FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<Note>> GetAllNotes() => await Entities.ToListAsync();

        public async Task<int> GetCountAsync() => await Entities.CountAsync();

        public async Task<Note?> GetNoteByTitle(string title)
        {
            return await Entities.FirstOrDefaultAsync(t => t.Title == title);
        }
    }
}
