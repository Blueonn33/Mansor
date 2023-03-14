namespace Mansor.Business.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Mansor.Business.Services.Interfaces;
    using Mansor.Data.Models;
    using Mansor.Data.Repositories.Interfaces;

    public class TimeTableItemsService : ITimeTableItemsService
    {
        private readonly ITimeTableItemsRepository _timeTableItemsRepository;
        public TimeTableItemsService(ITimeTableItemsRepository timeTableItemsRepository)
        {
            _timeTableItemsRepository = timeTableItemsRepository;
        }

        public async Task<TimeTableItem> CreateTimeTableItem(TimeTableItem timeTableItem)
        {
            return await _timeTableItemsRepository.AddAsync(timeTableItem);
        }

        public async Task<IEnumerable<TimeTableItem>> GetAllTimeTableItems(int timeTableDayId)
        {
            return await _timeTableItemsRepository.GetAllTimeTableItemsAsync(timeTableDayId);
        }

        public async Task<IEnumerable<string>> GetAllTimeTablesItemsAsync(string userId)
        {
            return await _timeTableItemsRepository.GetAllTimeTablesItems(userId);
        }
    }
}
