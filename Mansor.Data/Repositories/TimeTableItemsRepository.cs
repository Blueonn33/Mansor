namespace Mansor.Data.Repositories
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Mansor.Data.Models;
    using Mansor.Data.Repositories.Interfaces;

    public class TimeTableItemsRepository : Repository<TimeTableItem>, ITimeTableItemsRepository
    {
        public  TimeTableItemsRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<TimeTableItem>> GetAllTimeTableItemsAsync(int timeTableDayId)
        {
            return await Entities.AsNoTracking().Include(t => t.TimeTableDay.User).Where(t => t.TimeTableDayId == timeTableDayId).ToListAsync();
        }

        public async Task<IEnumerable<string>> GetAllTimeTablesItems(string userId)
        {
            return await Entities.AsNoTracking().Where(t => t.TimeTableDay.UserId == userId).Select(p => p.Value).ToListAsync();
        }
    }
}
