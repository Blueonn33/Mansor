namespace Mansor.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.WebUtilities;
    using System.Text;
    using System.Text.Encodings.Web;
    using Mansor.Business.Services;
    using Mansor.Business.Services.Interfaces;
    using Mansor.Data.Models;
    using Mansor.Data.Repositories.Interfaces;
    using static Duende.IdentityServer.Models.IdentityResources;

    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUsersService _usersService;
        private readonly IEmailService _emailService;
        private readonly UserManager<User> _userManager;

        public UserController(IUsersService userService, IEmailService emailService, UserManager<User> userManager)
        {
            _usersService = userService;
            _emailService = emailService;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("api/users")]
        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _usersService.GetUserAsync();
        }

        [HttpDelete]
        [Route("api/delete/{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] string id)
        {
            var targetUser = await _usersService.GetUserByIdAsync(id);
            if (targetUser == null)
            {
                return NotFound("User doesn't exists");
            }
            if (targetUser.IsDeleted)
            {
                return BadRequest("User is already deleted");
            }
            await _usersService.DeleteAsync(targetUser);

            return Ok(targetUser);
        }

        [HttpPost]
        [Route("api/create/user")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            var targetUser = _usersService.GetUserByEmail(user.Email);

            if (targetUser != null && targetUser.IsDeleted == true)
            {
                await _usersService.UnDeleteUser(targetUser);
                return Ok("User is added again!");
            }
            else if (targetUser != null && targetUser.IsDeleted == false)
            {
                return BadRequest("User already exist!");
            }
            else
            {
                await _usersService.AddUser(user);

                return Ok(user);
            }

        }
    }
}