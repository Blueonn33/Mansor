using Mansor.Business.Services.Interfaces;
using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Business.Services
{
    public class UsersService : IUsersService
    {
        public Task<User> AddUser(User user)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> GetUserAsync()
        {
            throw new NotImplementedException();
        }

        public Task<User?> GetUserByIdAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}
