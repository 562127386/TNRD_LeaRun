using Learun.Util;
using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;

namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-25 14:30
    /// 描 述：Wizsen_TNRD_Pact
    /// </summary>
    public class Wizsen_TNRD_PactBLL : Wizsen_TNRD_PactIBLL
    {
        private Wizsen_TNRD_PactService wizsen_TNRD_PactService = new Wizsen_TNRD_PactService();

        #region 获取数据

        /// <summary>
        /// 获取页面显示列表数据
        /// <summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns></returns>
        public DataTable GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                return wizsen_TNRD_PactService.GetPageList(pagination, queryJson);
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
        public DataTable GetList(string queryJson)
        {
            try
            {
                return wizsen_TNRD_PactService.GetList(queryJson);
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
                var ProjectList = wizsen_TNRD_PactService.GetProjectTree(null);
                List<TreeModel> treeList = new List<TreeModel>();
                foreach (TNRD_Pact_DatailsEntity item in ProjectList)
                {
                    TreeModel node = new TreeModel();
                    bool hasChildren = ProjectList.Count(t => item.Code.Equals(t.ProjectNo)) == 0 ? false : true;
                    node.id = item.Id;
                    node.text = item.Name;
                    node.value = item.Code;
                    node.showcheck = false;
                    node.checkstate = 0;
                    node.isexpand = false;
                    node.parentId = item.ProjectNo ?? "0";
                    //node.title = item.Date.ToDate().Year.ToString();//立项年份
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
        /// 获取TNRD_Facility_Base表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<TNRD_Facility_BaseEntity> GetTNRD_Facility_BaseList(string keyValue)
        {
            try
            {
                return wizsen_TNRD_PactService.GetTNRD_Facility_BaseList(keyValue);
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
        /// 获取TNRD_Pact_Datails表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public TNRD_Pact_DatailsEntity GetTNRD_Pact_DatailsEntity(string keyValue)
        {
            try
            {
                return wizsen_TNRD_PactService.GetTNRD_Pact_DatailsEntity(keyValue);
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
        /// 获取TNRD_Facility_Base表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public TNRD_Facility_BaseEntity GetTNRD_Facility_BaseEntity(string keyValue)
        {
            try
            {
                return wizsen_TNRD_PactService.GetTNRD_Facility_BaseEntity(keyValue);
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
                wizsen_TNRD_PactService.DeleteEntity(keyValue);
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
        public void SaveEntity(string keyValue, TNRD_Pact_DatailsEntity entity)
        {
            try
            {
                wizsen_TNRD_PactService.SaveEntity(keyValue, entity);
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
