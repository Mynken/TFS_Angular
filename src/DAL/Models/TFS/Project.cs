using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FSW_TFS.DAL.Models.TFS
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ServerInfo { get; set; }
        public int Status { get; set; }
        public int ClientId { get; set; }
    }
}
