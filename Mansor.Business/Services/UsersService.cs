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

    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _userRepository;

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
    }
}
