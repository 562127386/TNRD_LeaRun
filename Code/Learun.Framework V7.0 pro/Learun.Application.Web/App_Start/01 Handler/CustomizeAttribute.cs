using Learun.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Learun.Application.Web.App_Start._01_Handler
{
    public class CustomizeAttribute: ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            DbWhere dbWhere = new DbWhere();
            dbWhere.sql = " 1=1";
            WebHelper.AddHttpItems("DataAhthorCondition", dbWhere);
        }

    }
}