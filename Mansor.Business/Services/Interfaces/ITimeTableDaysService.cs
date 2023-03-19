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
        Task<IEnumerable<TimeTableDay>> GetDaysAsync();
        Task<TimeTableDay?> GetDayByIdAsync(int id);
        Task<TimeTableDay?> GetDayByTaskIdAsync(Task<int?> id);

        Task AddDayAsync(TimeTableDay TimeTableDay);
        Task<TimeTableDay?> GetDayByNameAsync(string name);
        //Task<TimeTableDay?> GetAllDaysByUserId(string userId);
    }
}
