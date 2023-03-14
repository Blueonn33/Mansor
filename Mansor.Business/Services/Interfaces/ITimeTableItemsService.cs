namespace Mansor.Business.Services.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Mansor.Data.Models;

    public interface ITimeTableItemsService
    {
        Task<IEnumerable<TimeTableItem>> GetAllTimeTableItems(int timeTableDayId);
        Task<IEnumerable<string>> GetAllTimeTablesItemsAsync(string userId);
        Task<TimeTableItem> CreateTimeTableItem(TimeTableItem timeTableItem);
    }
}
