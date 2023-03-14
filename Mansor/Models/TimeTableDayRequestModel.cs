namespace Mansor.Models
{
    using Mansor.Data.Models;
    public class TimeTableDayRequestModel
    {
        public string Name { get; set; }

        public TimeTableDay ToCreateTimeTableDay(User user)
        {
            return new TimeTableDay()
            {
                Name = Name,
                User = user,
            };
        }
    }
}
