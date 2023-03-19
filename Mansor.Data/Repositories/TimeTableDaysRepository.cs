using Microsoft.EntityFrameworkCore;
using Mansor.Data.Models;
using Mansor.Data.Repositories.Interfaces;
using Mansor.Data.Repositories;
using Mansor.Data;

namespace Mansor.Data.Repositories
{
    public class TimeTableDaysRepository : Repository<TimeTableDay>, ITimeTableDaysRepository
    {
        public TimeTableDaysRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<int> GetCountAsync() => await Entities.CountAsync();

        public async Task<IEnumerable<TimeTableDay>> GetAllDays() => await Entities.ToListAsync();

        public async Task<TimeTableDay?> GetDayByName(string name)
        {
            return await Entities.FirstOrDefaultAsync(t => t.Name == name);
        }
    }
}
