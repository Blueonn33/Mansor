using Mansor.Data.Models;

namespace Mansor.Models
{
    public class TimeTableItemRequestModel
    {
        public string Value { get; set; }
        public int TimeTableDayId { get; set; }
        public bool IsDeleted { get; set; }

        public TimeTableItem ToCreateTimeTableItem(TimeTableDay timeTableDay)
        {
            return new TimeTableItem()
            {
                Value = Value,
                IsDeleted = IsDeleted,
                TimeTableDayId = timeTableDay.Id,
                TimeTableDay = timeTableDay
            };
        }
    }
}
