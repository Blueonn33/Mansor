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

        //[HttpPost]
        //[Route("api/create")]
        //public async Task<IActionResult> CreateUser([FromBody] User user)
        //{
        //    var targetUser = _usersService.GetUserByEmail(user.Email);

        //    if (targetUser != null && targetUser.IsDeleted == true)
        //    {
        //        await _usersService.UnDeleteUser(targetUser, tenantId);
        //        return Ok("User is added again!");
        //    }
        //    else if (targetUser != null && targetUser.IsDeleted == false)
        //    {
        //        return BadRequest("User already exist!");
        //    }
        //    else
        //    {
        //        await _usersService.AddUser(tenantId, user);

        //        return Ok(user);
        //    }

        //}

        //[HttpGet]
        //[Route("api/user/tenantId/{userId}")]
        //public async Task<int?> GetTenantIdByUserId([FromRoute] string userId)
        //{
        //    return await _usersService.GetTenantIdByUserId(userId);
        //}
    }
}