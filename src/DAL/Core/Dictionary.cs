using DAL.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace FSW_TFS.DAL.Core
{
    public class Dictionary
    {
        //Dictionary<int, string> Priorities = new Dictionary<int, string>
        //{
        //    { (int)Priority.Critical, "Critical" },
        //    { (int)Priority.High, "High" },
        //    { (int)Priority.Medium, "Medium" },
        //    { (int)Priority.Low, "Low" }
        //};

        public Dictionary<int, string> GetPriority()
        {
            return new Dictionary<int, string>
                {
                    { (int)Priority.Critical, "Critical" },
                    { (int)Priority.High, "High" },
                    { (int)Priority.Medium, "Medium" },
                    { (int)Priority.Low, "Low" }
                };
        }
    }
}

