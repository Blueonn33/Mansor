using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mansor.Data.Models;

namespace Mansor.Business.Services.Interfaces
{
    public interface ITimeTableDaysService
    {
        Task<IEnumerable<TimeTableDay>> GetTimeTableDaysAsync();
        Task<TimeTableDay?> GetTimeTableDayByIdAsync(int id);
        Task<TimeTableDay?> GetTimeTableDayByTaskIdAsync(Task<int?> id);

        Task AddTimeTableDayAsync(TimeTableDay TimeTableDay);
        Task<TimeTableDay?> GetTimeTableDayByNameAsync(string name);
    }
}
