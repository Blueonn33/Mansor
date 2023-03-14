using System.ComponentModel.DataAnnotations;

namespace Mansor.Data.Models
{
    public class TimeTableItem
    {
        public TimeTableItem()
        {
            Value = Guid.NewGuid().ToString();
        }

        public TimeTableItem(TimeTableDay timeTableDay, string value, bool deleted = false) : this()
        {
            _timeTableDay = timeTableDay;
            Value = value ?? throw new ArgumentNullException(nameof(value));
            IsDeleted = deleted;
        }
        public int Id { get; set; }
        public int TimeTableDayId { get; set; }
        private TimeTableDay? _timeTableDay;
        public TimeTableDay TimeTableDay
        {
            get => _timeTableDay ?? throw new InvalidOperationException("Uninitialized property: " + nameof(TimeTableDay));
            set => _timeTableDay = value;
        }
        public string Value { get; set; }
        public bool IsDeleted { get; set; }
    }
}
