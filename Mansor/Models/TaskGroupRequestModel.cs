namespace Mansor.Models
{
    using Mansor.Data.Models;

    public class TaskGroupRequestModel
    {
        public string Name { get; set; }

        public TaskGroup ToCreateTaskGroup(User user)
        {
            return new TaskGroup()
            {
                Name = Name,
                User = user,
            };
        }
    }
}