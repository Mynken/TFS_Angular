using System;

namespace DAL.Core
{
    public enum Gender
    {
        None,
        Female,
        Male
    }

    public enum Payment
    {
        Cash = 1,
        Card = 2
    }

    public enum Priority
    {
        Critical = 4000,
        High = 4001,
        Medium = 4002,
        Low = 4003
    }
}

//export enum BugStatus
//{
//    Active = 3000,
//    Closed = 3001,
//    New = 3002,
//    Resolved = 3003
//}
