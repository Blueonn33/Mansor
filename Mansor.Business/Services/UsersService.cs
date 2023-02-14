namespace Mansor.Business.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Mansor.Business.Services.Interfaces;
    using Mansor.Data.Models;
    using Mansor.Data.Repositories.Interfaces;
    using System.Security.Claims;
    using Microsoft.AspNetCore.Http;

    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _userRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UsersService(IUsersRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<IEnumerable<User>> GetUserAsync()
        {
            return await _userRepository.GetAllUsers();
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _userRepository.FindAsync(id);
        }

        public async Task<User> AddUser(User user)
        {
            user = new User
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Password = user.Password
            };
            return await _userRepository.AddAsync(user);
        }

        public async Task<string> GetCurrentUserId()
        {
            if (_httpContextAccessor.HttpContext.User.Identity != null)
            {
                var claimsIdentity = (ClaimsIdentity)_httpContextAccessor.HttpContext.User.Identity;
                var nameIdentifierClaim = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);
                var userId = nameIdentifierClaim != null ? nameIdentifierClaim.Value : "";
                return userId;
            }
            return null;
            // return await _userRepository.GetAllUsers();
        }
    }
}
