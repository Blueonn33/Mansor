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
        Task<User?> GetUserByIdAsync(int id);
        Task<User> AddUser(User user);
        Task<string> GetCurrentUserId();
        User GetUserByEmail(string email);
        Task UnDeleteUser(User user);
        Task<int?> GetTaskGroupIdByUserId(string userId);
    }
}
