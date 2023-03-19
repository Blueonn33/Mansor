using Mansor.Data.Models;

namespace Mansor.Data.Repositories.Interfaces;

public interface ITimeTableDaysRepository : IRepository<TimeTableDay>
{
    Task<int> GetCountAsync();
    Task<IEnumerable<TimeTableDay>> GetAllDays();
    Task<TimeTableDay?> GetDayByName(string name);
}