using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;
using FSW_TFS.DAL.Repositories;
using FSW_TFS.DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        IClientRepository _clients;
        IProjectRepository _projects;
        IReportRepository _reports;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public IClientRepository Clients
        {
            get
            {
                if (_clients == null)
                    _clients = new ClientRepository(_context);

                return _clients;
            }
        }

        public IProjectRepository Projects
        {
            get
            {
                if (_projects == null)
                    _projects = new ProjectRepository(_context);

                return _projects;
            }
        }

        public IReportRepository Reports
        {
            get
            {
                if (_reports == null)
                    _reports = new ReportRepository(_context);

                return _reports;
            }
        }
        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
