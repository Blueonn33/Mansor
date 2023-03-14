using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Repositories.Interfaces
{
    public interface INotesRepository : IRepository<Note>
    {
        Task<IEnumerable<Note>> GetNotesByUserId(string userId);
        Task<int> GetCountAsync();
        Task<IEnumerable<Note>> GetAllNotes();
        Task<Note?> GetNoteByTitle(string title);
        Task<Note?> FindNote(int id);
    }
}