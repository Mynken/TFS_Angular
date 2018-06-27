using DAL;
using DAL.Repositories;
using FSW_TFS.DAL.Models.TFS;
using FSW_TFS.DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FSW_TFS.DAL.Repositories
{
    public class ProjectRepository : Repository<Project>, IProjectRepository
    {
        public ProjectRepository(DbContext context) : base(context)
        { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
