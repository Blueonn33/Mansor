namespace Mansor.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Mansor.Business.Services.Interfaces;
    using Mansor.Data.Models;
    using Mansor.Models;

    [ApiController]
    [Authorize]
    public class TimeTableItemController : ControllerBase
    {
        private readonly ITimeTableItemsService _timeTableItemsService;
        private readonly ITimeTableDaysService _timeTableDaysService;
        public TimeTableItemController(ITimeTableItemsService timeTableItemsService, ITimeTableDaysService timeTableDaysService)
        {
            _timeTableItemsService = timeTableItemsService;
            _timeTableDaysService = timeTableDaysService;
        }

        [HttpGet]
        [Route("api/timeTableItems/{timeTableDayId}")]
        public async Task<IActionResult> GetAllTimeTableItems([FromRoute] int timeTableDayId)
        {
            var records = await _timeTableItemsService.GetAllTimeTableItems(timeTableDayId);

            if (!records.Any())
            {
                return BadRequest("No existing items");
            }
            return Ok(records);
        }

        [HttpGet]
        [Route("api/timeTableDaysItemsUnique/{timeTableDayId}")]
        public async Task<IEnumerable<string>> GetAllTimeTableDaysItems([FromRoute] int timeTableDayId)
        {
            var timeTableDay = await _timeTableDaysService.GetTimeTableDayByIdAsync(timeTableDayId);

            return await _timeTableItemsService.GetAllTimeTablesItemsAsync(timeTableDay.UserId);
        }
        //[HttpPost]
        //[Route("api/create/timeTableDaysRecords/{timeTableDayId}")]
        //public async Task<IActionResult> CreateTimeTableItems([FromBody] TimeTableItemRequestModel timeTableItemsRequestModel)
        //{
        //    var timeTableDay = await _timeTableDaysService.GetTimeTableDayById(timeTableDayId);
        //    var timeTableItem = timeTableItemsRequestModel.TimeTableItems(timeTableDay);

        //    var result = await _timeTableItemsService.CreateTimeTableItem(timeTableItem);

        //    return Ok(result);
        //}
    }
}
