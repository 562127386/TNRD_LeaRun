using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Wizsen_XM_EnergyProject.Wizsen_NE_Project;

namespace Learun.Application.Web.Areas.Wizsen_NE_Project.Controllers
{
    public class ReportController : MvcControllerBase
    {

        private ProjectBaseIBLL projectBaseIBLL = new ProjectBaseBLL();
        private ProjectDatailsIBLL projectDatailsIBLL = new ProjectDatailsBLL();
        private PactPurchaseIBLL pactPurchaseIBLL = new PactPurchaseBLL();
        private FacilityBaseIBLL facilityBaseIBLL = new FacilityBaseBLL();
        private PactAssortIBLL pactAssortIBLL = new PactAssortBLL();
        private ProjectDetailsEstimateIBLL projectDetailsEstimateIBLL = new ProjectDetailsEstimateBLL();

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
        /// 采购合同报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurchaseReport()
        {
            return View();
        }

        /// <summary>
        /// 配套合同报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AssortReport()
        {
            return View();
        }


        /// <summary>
        /// 项目概算报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ProjectEstimate()
        {
            return View();
        }

        /// <summary>
        /// 设备卡
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityCard(string keyValue)
        {
            var facility = facilityBaseIBLL.GetEntity(keyValue);
            var purchase = pactPurchaseIBLL.GetXM_Pact_PurchaseEntity(facility.BindId);
            ViewBag.facility = facility;
            ViewBag.purchase = purchase;
            return View();
        }
        /// <summary>
        /// 亚行项目设备台帐
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityLedger(string keyword)
        {
            string queryJson = "{\"keyword\" :\""+keyword+"\"}";
            var data = facilityBaseIBLL.GetList(queryJson);
            ViewBag.data = data;
            return View();
        }

        /// <summary>
        /// 设备验收单
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityReceipt(string keyValue)
        {
            var facility = facilityBaseIBLL.GetEntity(keyValue);
            ViewBag.facility = facility;
            return View();
        }

        /// <summary>
        /// 亚行项目设备信息统计
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityStatistical()
        {
            return View();
        }

        /// <summary>
        /// 履约保函
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PerformanceBond(string keyValue)
        {
            var facility = facilityBaseIBLL.GetEntity(keyValue);
            ViewBag.facility = facility;
            return View();
        }

        /// <summary>
        /// 项目明细
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ProjectDatails(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var model = projectDatailsIBLL.GetProjectAmount(queryJson);
            ViewBag.model = model;
            string queryJson2 = "{\"keyword\":\"" + model.Rows[0]["Code"] + "\"}";
            var data2 = pactAssortIBLL.GetList(queryJson2);
            ViewBag.data2 = data2;
            //string queryJson = "{\"keyword\":\"" + keyword + "\"}";
            var data3 = facilityBaseIBLL.GetList(queryJson2);
            ViewBag.data3 = data3;
            return View();
        }

        /// <summary>
        /// 亚行项目台账
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AssortLedger(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var data = pactAssortIBLL.GetList(queryJson);
            ViewBag.data = data;
            return View();
        }

        /// <summary>
        ///项目验收款支付证明
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FacilityPayment(string keyValue)
        {
            var facility = facilityBaseIBLL.GetEntity(keyValue);
            ViewBag.facility = facility;
            return View();
        }

        /// <summary>
        /// 主项目金额汇总
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ProjectTotalAmount(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var model = projectDatailsIBLL.GetProjectBaseAmount(queryJson);
            ViewBag.model = model;
            return View();
        }
        /// <summary>
        /// 附件报表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AdjunctReport(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            System.Data.DataTable model = projectDatailsIBLL.GetAdjunctReport(queryJson);
            System.Data.DataTable dt1 = model.Copy();
            dt1.Columns.Remove("Name");
            dt1.Columns.Remove("CompanyName");
            ViewBag.dynamicColumn = dt1;
            var s = dt1.Rows[0][0];
         
            ViewBag.model = model;
            
            return View();
        }

        /// <summary>
        /// 采购合同台账2
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurcahseLedger2()
        {
            return View();
        }

        /// <summary>
        /// 采购合同台账
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurchaseLedger()
        {
            return View();
        }

        /// <summary>
        /// 年度采购计划
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurchasePlan()
        {
            return View();
        }

        /// <summary>
        /// 公开招标评委及采购代表委派单
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurchaseTender()
        {
            return View();
        }


        /// <summary>
        /// 新增查询表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Report1(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var model = projectDetailsEstimateIBLL.GetList(queryJson);
            ViewBag.model = model;
            return View();
        }

        /// <summary>
        /// 新增查询表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Report2(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var model = projectDetailsEstimateIBLL.GetList(queryJson);
            ViewBag.model = model;
            return View();
        }

        /// <summary>
        /// 新增查询表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Report3(string keyword)
        {
            string queryJson = "{\"keyword\" :\"" + keyword + "\"}";
            var model = projectDetailsEstimateIBLL.GetList(queryJson);
            ViewBag.model = model;
            return View();
        }

        /// <summary>
        /// 新增查询表
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Report4()
        {
            return View();
        }

        #endregion
    }
}