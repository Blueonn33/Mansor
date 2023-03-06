namespace Mansor.Data.Repositories.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using Mansor.Data.Models;

    public interface IUsersRepository : IRepository<User>
    {
        Task<IEnumerable<User>> GetAllUsers();
        User GetUserByEmail(string email);
    }
}
