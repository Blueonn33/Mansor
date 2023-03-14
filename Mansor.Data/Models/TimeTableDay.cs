namespace Mansor.Data.Models
{
    public class TimeTableDay
    {
        public TimeTableDay()
        {
            Name = Guid.NewGuid().ToString();
            TimeTableItems = new List<TimeTableItem>();
        }
        public TimeTableDay(User? user, string name) : this()
        {
            _user = user;
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }
        public int Id { get; set; }
        public string Name { get; set; }

        private User? _user;
        public User User
        {
            get => _user ?? throw new InvalidOperationException("Uninitialized property: " + nameof(User));
            set => _user = value;
        }
        public string? UserId { get; set; }
        public ICollection<TimeTableItem> TimeTableItems { get; set; }
    }
}
