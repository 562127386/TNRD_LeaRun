using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project;

namespace Learun.Application.Web.Areas.Wizsen_TNRD_Project.Controllers
{
    public class ReportController : MvcControllerBase
    {


        #region 视图功能

        /// <summary>
        /// 设备报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityReport()
        {
            return View();
        }

        /// <summary>
        /// 项目报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ProjectReport()
        {
            return View();
        }

        /// <summary>
        /// 合同报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PactReport()
        {
            return View();
        }

        /// <summary>
        /// 合同付款报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PayReport()
        {
            return View();
        }

        /// <summary>
        /// 资金报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult CapitalReport()
        {
            return View();
        }

        #endregion
    }
}