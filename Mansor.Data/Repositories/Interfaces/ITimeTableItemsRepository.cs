using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Data.Repositories.Interfaces
{
    public interface ITimeTableItemsRepository : IRepository<TimeTableItem>
    {
        Task<IEnumerable<TimeTableItem>> GetAllTimeTableItemsAsync(int timeTableDayId);
        Task<IEnumerable<string>> GetAllTimeTablesItems(string userId);
    }
}