//using Mansor.Data.Models;
//using Mansor.Data.Repositories.Interfaces;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Mansor.Data.Repositories
//{
//    public class UsersRepository : Repository<User>, IUsersRepository
//    {
//        public UsersRepository(ApplicationDbContext context) : base(context)
//        {
//        }

//        public async Task<IEnumerable<User>> GetAllUsers()
//        {
//            var users = await Entities;
//            return users;
//        }
//        public override Task DeleteAsync(User entity)
//        {
//            entity.IsDeleted = true;
//            return Context.SaveChangesAsync();
//        }
//    }
//}
