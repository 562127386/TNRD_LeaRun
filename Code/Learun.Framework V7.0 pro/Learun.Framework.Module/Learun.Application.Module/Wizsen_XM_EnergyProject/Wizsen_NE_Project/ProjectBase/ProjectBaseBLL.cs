using Learun.Util;
using System;
using System.Data;
using System.Linq;
using System.Collections.Generic;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 16:51
    /// 描 述：项目层级管理
    /// </summary>
    public class ProjectBaseBLL : ProjectBaseIBLL
    {
        private ProjectBaseService projectBaseService = new ProjectBaseService();

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_BaseEntity> GetList( string queryJson )
        {
            try
            {
                return projectBaseService.GetList(queryJson);
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
        /// 获取下拉选数据（主项目名称）
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_BaseEntity> SelList(string queryJson)
        {
            try
            {
                queryJson = " and ParentName = '0' ";
                return projectBaseService.GetList(queryJson);
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
        /// 获取项目树形数据
        /// </summary>
        /// <returns></returns>
        public List<TreeModel> GetProjectTree()
        {
            try
            {
                var ProjectList = projectBaseService.GetProjectTree() ;
                List<TreeModel> treeList = new List<TreeModel>();
                foreach (XM_Project_BaseEntity item in ProjectList)
                {
                    TreeModel node = new TreeModel();
                    bool hasChildren = ProjectList.Count(t => item.Code.Equals(t.ParentCode)) == 0 ? false : true;
                    node.id = item.Code;
                    node.text = item.Name;
                    node.value = item.Code;
                    node.showcheck = false;
                    node.checkstate = 0;
                    node.isexpand = false;
                    node.parentId = item.ParentCode ?? "0";
                    node.hasChildren = hasChildren; 
                    treeList.Add(node);
                }
                return treeList.ToTree();
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
        /// 获取项目树形数据
        /// </summary>
        /// <returns></returns>
        public List<TreeModel> GetProjectBaseTree()
        {
            try
            {
                var ProjectList = projectBaseService.GetList(null);
                List<TreeModel> treeList = new List<TreeModel>();
                foreach (XM_Project_BaseEntity item in ProjectList)
                {
                    TreeModel node = new TreeModel();
                    bool hasChildren = ProjectList.Count(t => item.Code.Equals(t.ParentCode)) == 0 ? false : true;
                    node.id = item.Code;
                    node.text = item.Name;
                    node.value = item.Code;
                    node.showcheck = false;
                    node.checkstate = 0;
                    node.isexpand = false;
                    node.parentId = item.ParentCode ?? "0";
                    node.hasChildren = hasChildren;
                    treeList.Add(node);
                }
                return treeList.ToTree();
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
        public IEnumerable<XM_Project_BaseEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                return projectBaseService.GetPageList(pagination, queryJson);
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
        /// 获取实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public XM_Project_BaseEntity GetEntity(string keyValue)
        {
            try
            {
                return projectBaseService.GetEntity(keyValue);
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

        #endregion

        #region 提交数据

        /// <summary>
        /// 删除实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void DeleteEntity(string keyValue)
        {
            try
            {
                projectBaseService.DeleteEntity(keyValue);
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
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void SaveEntity(string keyValue, XM_Project_BaseEntity entity)
        {
            try
            {
                projectBaseService.SaveEntity(keyValue, entity);
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

        #endregion

    }
}
