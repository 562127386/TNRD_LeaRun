using Learun.Application.TwoDevelopment.LR_Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Learun.Application.Web.Controllers
{
    public class CommonController : MvcControllerBase
    {
        
        CommonBLL bll = new CommonBLL();
        // 获取select下拉数据
        public ActionResult LoadSelectData(string sql)
        {
            string jsonData = bll.LoadSelectData(sql);
            return SuccessString(jsonData);
        }

        public ActionResult LoadFormDataBySpeciName(string sql)
        {
            string jsonData = bll.LoadFormDataBySpeciName(sql);
            return SuccessString(jsonData);
        }

    }
}