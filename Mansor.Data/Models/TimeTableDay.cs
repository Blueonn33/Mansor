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

        public User? _user;
        public string? UserId { get; set; }
        public User User;
        public ICollection<TimeTableItem> TimeTableItems { get; set; }
    }
}
