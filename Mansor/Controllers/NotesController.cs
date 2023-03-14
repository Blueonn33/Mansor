using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace Mansor.Controllers
{
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesService _notesService;

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet]
        [Route("api/notes")]
        public async Task<IEnumerable<Note>> GetAllNotes()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            return await _notesService.GetNotesAsync();
        }

        [HttpGet]
        [Route("api/note/{id}")]
        public async Task<IActionResult> GetNoteById([FromRoute] int id)
        {
            var targetNote = await _notesService.GetNoteByIdAsync(id);
            if (targetNote == null)
            {
                return NotFound();
            }
            return Ok(targetNote);
        }

        [HttpPost]
        [Route("api/create/note")]
        public async Task<IActionResult> CreateNote([FromBody] Note createNote)
        {
            var note = await _notesService.GetNoteByTitleAsync(createNote.Title);

            if (note != null)
            {
                return BadRequest("The note already exists");
            }

            await _notesService.AddNoteAsync(createNote);
            return Ok(createNote);

        }
    }
}