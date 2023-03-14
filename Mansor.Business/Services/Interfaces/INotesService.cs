using Mansor.Data.Models;

namespace Mansor.Business.Services.Interfaces
{
    public interface INotesService
    {
        Task<IEnumerable<Note>> GetNotesAsync();
        Task<IEnumerable<Note>> GetNotesByUserId(string id);
        Task<Note?> GetNoteById(int id);
        Task<Note> CreateNote(Note note);
        Task<Note?> GetNoteByTitleAsync(string title);
        Task AddNoteAsync(Note note);
        Task<Note?> GetNoteByIdAsync(int id);
    }
}