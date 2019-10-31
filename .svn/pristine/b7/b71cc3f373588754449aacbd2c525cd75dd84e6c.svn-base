using Wizsen_XM_EnergyProject.Wizsen_NE_Project;
using Learun.Util;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;
using System;

namespace Learun.Application.Web.Areas.Wizsen_NE_Project.Controllers
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 16:51
    /// 描 述：项目层级管理
    /// </summary>
    public class ProjectBaseController : MvcControllerBase
    {
        private ProjectBaseIBLL projectBaseIBLL = new ProjectBaseBLL();

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
        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetList( string queryJson )
        {
            var data = projectBaseIBLL.GetList(queryJson);
            return Success(data);
        }

        /// <summary>
        /// 获取下拉选数据（主项目名称）
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult SelList(string queryJson)
        {
            var data = projectBaseIBLL.SelList(queryJson);
            return Success(data);
        }

        /// <summary>
        /// 获取项目层级列表(树结构前两级)
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetProjectBaseTree()
        {
            var data = projectBaseIBLL.GetProjectBaseTree();
            return this.Success(data);
        }

        /// <summary>
        /// 获取项目相关信息列表(树结构)
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetProjectTree()
        {
            var data = projectBaseIBLL.GetProjectTree();
            return this.Success(data);
        }

        /// <summary>
        /// 获取项目树形下拉选择列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetTreeSelect()
        {
            //var data = projectBaseIBLL.GetList("").ToList();
            //List<TreeModel> treeList = new List<TreeModel>();
            //foreach (XM_Project_BaseEntity item in data)
            //{
            //    TreeModel node = new TreeModel();
            //    bool hasChildren = string.IsNullOrEmpty(item.ParentCode);
            //    node.text = item.Name;
            //    node.id = item.Code;
            //    node.parentId = item.ParentCode ?? "0";
            //    treeList.Add(node);
            //}
            //return this.Success(treeList.ToTree());

            try
            {
                var data = projectBaseIBLL.GetList("").ToList();
                List<TreeModel> treeList = new List<TreeModel>();
                foreach (var item in data)
                {
                    TreeModel node = new TreeModel
                    {
                        id = item.Code,
                        text = item.Name,
                        value = item.Name,
                        showcheck = false,
                        checkstate = 0,
                        isexpand = true,
                        parentId =  item.ParentCode ?? "0"
                    };
                    treeList.Add(node);
                }
                return this.Success(treeList.ToTree());
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowBusinessException(ex);
                }
            }
        }

        /// <summary>
        /// 获取列表分页数据
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetPageList(string pagination, string queryJson)
        {
            Pagination paginationobj = pagination.ToObject<Pagination>();
            var data = projectBaseIBLL.GetPageList(paginationobj, queryJson);
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
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetFormData(string keyValue)
        {
            var data = projectBaseIBLL.GetEntity(keyValue);
            return Success(data);
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
            projectBaseIBLL.DeleteEntity(keyValue);
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
        public ActionResult SaveForm(string keyValue,XM_Project_BaseEntity entity)
        {
            projectBaseIBLL.SaveEntity(keyValue, entity);
            return Success("保存成功！");
        }
        #endregion

    }
}
