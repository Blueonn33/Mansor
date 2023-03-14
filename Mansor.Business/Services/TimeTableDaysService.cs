using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;

namespace Mansor.Business.Services;

public class TimeTableDaysService : ITimeTableDaysService
{
    private readonly ITimeTableDaysRepository _timeTableDaysRepository;

    public TimeTableDaysService(ITimeTableDaysRepository timeTableDaysRepository)
    {
        _timeTableDaysRepository = timeTableDaysRepository;
    }

    public async Task<IEnumerable<TimeTableDay>> GetTimeTableDaysAsync() => await _timeTableDaysRepository.GetAllTimeTableDays();

    public async Task<TimeTableDay?> GetTimeTableDayByIdAsync(int id) => await _timeTableDaysRepository.FindAsync(id);

    public async Task AddTimeTableDayAsync(TimeTableDay timeTableDay) => await _timeTableDaysRepository.AddAsync(timeTableDay);

    public async Task<TimeTableDay?> GetTimeTableDayByNameAsync(string name)
    {
        return await _timeTableDaysRepository.GetTimeTableDayByName(name);
    }

    public async Task<TimeTableDay?> GetTimeTableDayByTaskIdAsync(Task<int?> id) => await _timeTableDaysRepository.FindAsync(id);

}