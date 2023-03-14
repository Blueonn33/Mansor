using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mansor.Data.Models;
using Mansor.Business.Services.Interfaces;

namespace Mansor.Controllers
{
    [ApiController]
    [Authorize]
    public class TimeTableDaysController : ControllerBase
    {
        private readonly ITimeTableDaysService _timeTableDaysService;
        public TimeTableDaysController(ITimeTableDaysService timeTableDaysService)
        {
            _timeTableDaysService = timeTableDaysService;
        }
        [HttpGet]
        [Route("api/timeTableDays")]
        public async Task<IEnumerable<TimeTableDay>> GetAllTimeTableDays()
        {
            return await _timeTableDaysService.GetTimeTableDaysAsync();
        }

        [HttpGet]
        [Route("api/timeTableDay/{id}")]
        public async Task<IActionResult> GetTimeTableDayById([FromRoute] int id)
        {
            var targetTimeTableDay = await _timeTableDaysService.GetTimeTableDayByIdAsync(id);
            if (targetTimeTableDay == null)
            {
                return NotFound();
            }
            return Ok(targetTimeTableDay);
        }
        [HttpPost]
        [Route("api/create/timeTableDay")]
        public async Task<IActionResult> CreateTimeTableDay([FromBody] TimeTableDay createTimeTableDay)
        {
            var timeTableDay = await _timeTableDaysService.GetTimeTableDayByNameAsync(createTimeTableDay.Name);

            if (timeTableDay != null)
            {
                return BadRequest("The day already exists");
            }

            await _timeTableDaysService.AddTimeTableDayAsync(createTimeTableDay);
            return Ok(createTimeTableDay);
        }
    }
}