using DAL.Repositories.Interfaces;
using FSW_TFS.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
        IClientRepository Clients { get; }

        int SaveChanges();
    }
}
