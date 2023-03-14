using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;

namespace Mansor.Business.Services
{
    public class NotesService : INotesService
    {
        private readonly INotesRepository _notesRepository;

        public NotesService(INotesRepository notesRepository)
        {
            _notesRepository = notesRepository;
        }

        public Task<Note?> GetNoteById(int id)
        {
            return _notesRepository.FindNote(id);
        }

        public async Task<IEnumerable<Note>> GetNotesByUserId(string id)
        {
            return await _notesRepository.GetNotesByUserId(id);
        }

        public async Task<Note> CreateNote(Note note)
        {
            var isExist = await _notesRepository.GetNoteByTitle(note.Title);
            if (isExist != null)
            {
                return null;
            }
            return await _notesRepository.AddAsync(note);
        }

        public async Task AddNoteAsync(Note note) => await _notesRepository.AddAsync(note);

        public async Task<Note?> GetNoteByTitleAsync(string title)
        {
            return await _notesRepository.GetNoteByTitle(title);
        }

        public async Task<IEnumerable<Note>> GetNotesAsync() => await _notesRepository.GetAllNotes();

        public async Task<Note?> GetNoteByIdAsync(int id) => await _notesRepository.FindAsync(id);

    }
}