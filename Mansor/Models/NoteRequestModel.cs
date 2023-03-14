namespace Mansor.Models
{
    using Mansor.Data.Models;

    public class NoteRequestModel
    {
        public string Title { get; set; }
        public string Content { get; set; }

        public Note ToCreateNote(User user)
        {
            return new Note()
            {
                Title = Title,
                Content = Content,
                User = user,
            };
        }
    }
}