using Mansor.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mansor.Business.Services.Interfaces
{
    public interface IUsersService
    {
        Task<IEnumerable<User>> GetUserAsync();
        Task<User?> GetUserByIdAsync(string id);
        Task<User> AddUser(User user);
        Task<string> GetCurrentUserId();
        User GetUserByEmail(string email);
        Task DeleteAsync(User user);
        Task UnDeleteUser(User user);
    }
}
