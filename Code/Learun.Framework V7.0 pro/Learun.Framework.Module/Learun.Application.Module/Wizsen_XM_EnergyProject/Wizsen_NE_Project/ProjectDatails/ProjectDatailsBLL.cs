using Learun.Util;
using System;
using System.Data;
using System.Collections.Generic;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:01
    /// 描 述：项目管理
    /// </summary>
    public class ProjectDatailsBLL : ProjectDatailsIBLL
    {
        private ProjectDatailsService projectDatailsService = new ProjectDatailsService();

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public DataTable GetList( string queryJson )
        {
            try
            {
                return projectDatailsService.GetList(queryJson);
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
        public IEnumerable<XM_Project_DatailsEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                //List<XM_Project_DatailsEntity> list = (List<XM_Project_DatailsEntity>)projectDatailsService.GetPageList(pagination, queryJson);
                //var queryParam = queryJson.ToJObject();
                //if (!string.IsNullOrEmpty(queryJson))
                //{
                //    list = list.FindAll(t => t.BaseCode.Contains(queryJson) || t.BaseSubName.Contains(queryJson) || t.BaseCode.Contains(queryJson) || t.BaseSubCode.Contains(queryJson) || t.Name.Contains(queryJson));
                //}
                //return list;
                return projectDatailsService.GetPageList(pagination, queryJson);
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
        public XM_Project_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return projectDatailsService.GetEntity(keyValue);
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
        /// 获取项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectAmount(string queryJson)
        {
            try
            {
                return projectDatailsService.GetProjectAmount(queryJson);
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
        /// 获取附件报表
        /// </summary>
        /// <param name="queryJson"></param>
        /// <returns></returns>
        public DataTable GetAdjunctReport(string queryJson)
        {
            try
            {
                return projectDatailsService.GetAdjunctReport(queryJson);
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
        /// 获取主项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectBaseAmount(string queryJson)
        {
            try
            {
                return projectDatailsService.GetProjectBaseAmount(queryJson);
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
        /// 项目国内配套合同付款金额汇总
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetAssSum(string keyValue)
        {
            try
            {
                return projectDatailsService.GetAssSum(keyValue);
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
        /// 获取XM_Project_Details_Estimate表数据 
        /// <summary> 
        /// <returns></returns> 
        public IEnumerable<XM_Project_Details_EstimateEntity> GetXM_Project_Details_EstimateList(string keyValue)
        {
            try
            {
                return projectDatailsService.GetXM_Project_Details_EstimateList(keyValue);
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
        /// 获取XM_Project_Datails表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Project_DatailsEntity GetXM_Project_DatailsEntity(string keyValue)
        {
            try
            {
                return projectDatailsService.GetXM_Project_DatailsEntity(keyValue);
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
        /// 获取XM_Project_Details_Estimate表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Project_Details_EstimateEntity GetXM_Project_Details_EstimateEntity(string keyValue)
        {
            try
            {
                return projectDatailsService.GetXM_Project_Details_EstimateEntity(keyValue);
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
                projectDatailsService.DeleteEntity(keyValue);
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
        public void SaveEntity(string keyValue, XM_Project_DatailsEntity entity)
        {
            try
            {
                projectDatailsService.SaveEntity(keyValue, entity);
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
        public void SaveEntity2(string keyValue, XM_Project_DatailsEntity entity, List<XM_Project_Details_EstimateEntity> xM_Project_Details_EstimateList)
        {
            try
            {
                projectDatailsService.SaveEntity2(keyValue, entity, xM_Project_Details_EstimateList);
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
