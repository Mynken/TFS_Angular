using AutoMapper;
using DAL.Core;
using DAL.Models;
using FSW_TFS.DAL.Core;
using FSW_TFS.DAL.Models.TFS;
using FSW_TFS.Web.ViewModels.Custom;
using FSW_TFS.Web.ViewModels.Helpers;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarWashApp.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            var dictionary = new Dictionary();

            CreateMap<ApplicationUser, UserViewModel>()
                   .ForMember(d => d.Roles, map => map.Ignore());
            CreateMap<UserViewModel, ApplicationUser>()
                .ForMember(d => d.Roles, map => map.Ignore());

            CreateMap<ApplicationUser, UserEditViewModel>()
                .ForMember(d => d.Roles, map => map.Ignore());
            CreateMap<UserEditViewModel, ApplicationUser>()
                .ForMember(d => d.Roles, map => map.Ignore());

            CreateMap<ApplicationUser, UserPatchViewModel>()
                .ReverseMap();

            CreateMap<ApplicationRole, RoleViewModel>()
                .ForMember(d => d.Permissions, map => map.MapFrom(s => s.Claims))
                .ForMember(d => d.UsersCount, map => map.ResolveUsing(s => s.Users?.Count ?? 0))
                .ReverseMap();
            CreateMap<RoleViewModel, ApplicationRole>();

            CreateMap<IdentityRoleClaim<string>, ClaimViewModel>()
                .ForMember(d => d.Type, map => map.MapFrom(s => s.ClaimType))
                .ForMember(d => d.Value, map => map.MapFrom(s => s.ClaimValue))
                .ReverseMap();

            CreateMap<ApplicationPermission, PermissionViewModel>()
                .ReverseMap();

            CreateMap<IdentityRoleClaim<string>, PermissionViewModel>()
                .ConvertUsing(s => Mapper.Map<PermissionViewModel>(ApplicationPermissions.GetPermissionByValue(s.ClaimValue)));

            CreateMap<Report, ReportVm>()
                 .ForPath(d => d.Priority.Value, map => map.MapFrom(s => s.Priority))
                 .ForPath(d => d.Priority.Label, map => map.MapFrom(s => "test"));

            //.ForPath(d => d.Priority.Label, map => map.MapFrom(s => dictionary.GetPriority()
            //   .Where(x => x.Key == s.Priority)));
            CreateMap<ReportVm, Report>()
                .ForMember(d => d.Priority, map => map.MapFrom(x => x.Priority.Value));
        }
    }
}
