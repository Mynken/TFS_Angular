using DAL;
using DAL.Repositories;
using FSW_TFS.DAL.Repositories.Interfaces;
using FSW_TFS.DAL.Models.TFS;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FSW_TFS.DAL.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(DbContext context) : base(context)
        { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}