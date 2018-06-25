using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FSW_TFS.DAL.Models.TFS
{
    public class Client
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Company { get; set; }
        public DateTime StartCooperationDate { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
