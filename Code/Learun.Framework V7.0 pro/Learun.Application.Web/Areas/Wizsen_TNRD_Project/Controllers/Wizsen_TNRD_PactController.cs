using Learun.Util;
using System.Data;
using Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project;
using System.Web.Mvc;
using System.Collections.Generic;
using Learun.Application.Web.App_Start._01_Handler;

namespace Learun.Application.Web.Areas.Wizsen_TNRD_Project.Controllers
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-25 14:30
    /// 描 述：Wizsen_TNRD_Pact
    /// </summary>
    public class Wizsen_TNRD_PactController : MvcControllerBase
    {
        private Wizsen_TNRD_PactIBLL wizsen_TNRD_PactIBLL = new Wizsen_TNRD_PactBLL();

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
        public ActionResult Browse()
        {
            return View();
        }
        public ActionResult PayDetails()
        {
            return View();
        }
        public ActionResult PactAdjunctIndex()
        {
            return View();
        }
        public ActionResult PactAdjunctForm()
        {
            return View();
        }
        #endregion

        #region 获取数据

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
            var data = wizsen_TNRD_PactIBLL.GetPageList(paginationobj, queryJson);
            var jsonData = new
            {
                rows = data,
                total = paginationobj.total,
                page = paginationobj.page,
                records = paginationobj.records
            };
            return Success(jsonData);
        }

        [HttpGet]
        [AjaxOnly]
        public ActionResult GetList(string pagination, string queryJson)
        {
            var data = wizsen_TNRD_PactIBLL.GetList(queryJson);
            return Success(data);
        }
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetTNRD_Facility_BaseList(string queryJson)
        {
            var queryParam = queryJson.ToJObject();
            var keyValue = (queryParam["keyValue"] ?? string.Empty).ToString();
            var data = wizsen_TNRD_PactIBLL.GetTNRD_Facility_BaseList(keyValue);
            return Success(data);
        }
        /// <summary>
        /// 获取项目相关信息列表(树结构)
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetProjectTree()
        {
            var data = wizsen_TNRD_PactIBLL.GetProjectTree();
            return this.Success(data);
        }

        /// <summary>
        /// 获取表单数据
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetFormData(string keyValue)
        {
            var TNRD_Pact_DatailsData = wizsen_TNRD_PactIBLL.GetTNRD_Pact_DatailsEntity(keyValue);
            var TNRD_Facility_BaseData = wizsen_TNRD_PactIBLL.GetTNRD_Facility_BaseList(TNRD_Pact_DatailsData.Id);
            var jsonData = new
            {
                TNRD_Pact_Datails = TNRD_Pact_DatailsData,
                TNRD_Facility_Base = TNRD_Facility_BaseData,
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
            wizsen_TNRD_PactIBLL.DeleteEntity(keyValue);
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
        public ActionResult SaveForm(string keyValue, string strEntity)
        {
            TNRD_Pact_DatailsEntity entity = strEntity.ToObject<TNRD_Pact_DatailsEntity>();
            //List<TNRD_Facility_BaseEntity> tNRD_Facility_BaseList = strtNRD_Facility_BaseList.ToObject<List<TNRD_Facility_BaseEntity>>();
            wizsen_TNRD_PactIBLL.SaveEntity(keyValue, entity);
            return Success("保存成功！");
        }
        #endregion

    }
}
