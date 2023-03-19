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
        [Route("api/days")]
        public async Task<IEnumerable<TimeTableDay>> GetAllDays()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            return await _timeTableDaysService.GetDaysAsync();
        }

        [HttpGet]
        [Route("api/timeTableDay/{id}")]
        public async Task<IActionResult> GetDayById([FromRoute] int id)
        {
            var targetTimeTableDay = await _timeTableDaysService.GetDayByIdAsync(id);
            if (targetTimeTableDay == null)
            {
                return NotFound();
            }
            return Ok(targetTimeTableDay);
        }

        //[HttpGet]
        //[Route("api/timeTableDays/{userId}")]
        //public async Task<IActionResult> GetAllDays([FromRoute] int userId)
        //{
        //    Response.Headers.Add("Access-Control-Allow-Origin", "*");
        //    var days = await _timeTableDaysService.GetAllDaysByUserId(userId);

        //    if (!days.Any())
        //    {
        //        return BadRequest("No existing days!");
        //    }
        //    return Ok(days);
        //}

        [HttpPost]
        [Route("api/create/timeTableDay")]
        public async Task<IActionResult> CreateDay([FromBody] TimeTableDay createDay)
        {
            var timeTableDay = await _timeTableDaysService.GetDayByNameAsync(createDay.Name);

            if (timeTableDay != null)
            {
                return BadRequest("The day already exists");
            }

            await _timeTableDaysService.AddDayAsync(createDay);
            return Ok(createDay);
        }
    }
}