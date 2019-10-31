using Wizsen_XM_EnergyProject.Wizsen_NE_Project;
using Learun.Util;
using System.Data;
using System.Web.Mvc;
using System.Collections.Generic;

namespace Learun.Application.Web.Areas.Wizsen_NE_Project.Controllers
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:13
    /// 描 述：采购设备合同
    /// </summary>
    public class PactPurchaseController : MvcControllerBase
    {
        private PactPurchaseIBLL pactPurchaseIBLL = new PactPurchaseBLL();

        #region 视图功能 

        /// <summary> 
        /// 主页面 
        /// <summary> 
        /// <returns></returns> 
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        /// <summary> 
        /// 表单页 
        /// <summary> 
        /// <returns></returns> 
        [HttpGet]
        public ActionResult Form()
        {
            return View();
        }
        /// <summary>
        /// 查看
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Detail()
        {
            return View();
        }
        /// <summary>
        /// 添加附件
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Adjunct()
        {
            return View();
        }

        /// <summary>
        /// 添加附件
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AdjunctIndex()
        {
            return View();
        }
        #endregion

        #region 获取数据 

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetList(string queryJson)
        {
            var data = pactPurchaseIBLL.GetList(queryJson);
            return Success(data);
        }

        /// <summary> 
        /// 获取页面显示列表数据 
        /// <summary> 
        /// <param name="queryJson">查询参数</param> 
        /// <returns></returns> 
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetPageList(string pagination, string queryJson)
        {
            Pagination paginationobj = pagination.ToObject<Pagination>();
            var data = pactPurchaseIBLL.GetPageList(paginationobj, queryJson);
            var jsonData = new
            {
                rows = data,
                total = paginationobj.total,
                page = paginationobj.page,
                records = paginationobj.records
            };
            return Success(jsonData);
        }
        /// <summary> 
        /// 获取表单数据 
        /// <summary> 
        /// <returns></returns> 
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetFormData(string keyValue)
        {
            var XM_Pact_PurchaseData = pactPurchaseIBLL.GetXM_Pact_PurchaseEntity(keyValue);
            var XM_Facility_BaseData = pactPurchaseIBLL.GetXM_Facility_BaseList(XM_Pact_PurchaseData.Id);
            var jsonData = new
            {
                XM_Pact_Purchase = XM_Pact_PurchaseData,
                XM_Facility_Base = XM_Facility_BaseData,
            };
            return Success(jsonData);
        }
        #endregion

        #region 提交数据 

        /// <summary> 
        /// 删除实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        [HttpPost]
        [AjaxOnly]
        public ActionResult DeleteForm(string keyValue)
        {
            pactPurchaseIBLL.DeleteEntity(keyValue);
            return Success("删除成功！");
        }
        /// <summary> 
        /// 保存实体数据（新增、修改） 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        [HttpPost]
        [ValidateAntiForgeryToken]
        [AjaxOnly]
        public ActionResult SaveForm(string keyValue, string strEntity, string strxM_Facility_BaseList)
        {
            XM_Pact_PurchaseEntity entity = strEntity.ToObject<XM_Pact_PurchaseEntity>();
            List<XM_Facility_BaseEntity> xM_Facility_BaseList = strxM_Facility_BaseList.ToObject<List<XM_Facility_BaseEntity>>();
            pactPurchaseIBLL.SaveEntity(keyValue, entity, xM_Facility_BaseList);
            return Success("保存成功！");
        }
        #endregion

    }
}
