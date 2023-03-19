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
        [Route("api/subjects/{timeTableDayId}")]
        public async Task<IActionResult> GetAllTimeTableItems([FromRoute] int timeTableDayId)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            var records = await _timeTableItemsService.GetAllTimeTableItems(timeTableDayId);

            if (!records.Any())
            {
                return BadRequest("No existing items");
            }
            return Ok(records);
        }

        //[HttpPost]
        //[Route("api/create/timeTableDaysRecords/{timeTableDayId}")]
        //public async Task<IActionResult> CreateTimeTableItems([FromRoute] int timeTableDayId, [FromBody] TimeTableItemRequestModel timeTableItemsRequestModel)
        //{
        //    var timeTableDay = await _timeTableDaysService.GetTimeTableDayById(timeTableDayId);
        //    var timeTableItem = timeTableItemsRequestModel.TimeTableItems(timeTableDay);

        //    var result = await _timeTableItemsService.CreateTimeTableItem(timeTableItem);

        //    return Ok(result);
        //}
    }
}
