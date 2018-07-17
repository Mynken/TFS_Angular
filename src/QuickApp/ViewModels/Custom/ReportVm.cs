using FSW_TFS.Web.ViewModels.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FSW_TFS.Web.ViewModels.Custom
{
    public class ReportVm
    {
        public int Id { get; set; }
        public string ShortDescription { get; set; }
        public SelectItem Priority { get; set; }
        public string FullDescription { get; set; }
        public string ClientId { get; set; }
        public int Status { get; set; }
    }
}
