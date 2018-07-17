using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FSW_TFS.DAL.Models.TFS
{
    public class Report
    {
        [Key]
        public int Id { get; set; }
        public string ShortDescription { get; set; }
        public int Priority { get; set; }
        public string FullDescription { get; set; }
        public string ClientId { get; set; }
        public int Status { get; set; }
    }
}