using Learun.Util;
using System;
using System.Data;
using System.Collections.Generic;

namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-23 16:25
    /// 描 述：附件信息
    /// </summary>
    public class AdjunctDatailsBLL : AdjunctDatailsIBLL
    {
        private AdjunctDatailsService adjunctDatailsService = new AdjunctDatailsService();

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<TNRD_Adjunct_DatailsEntity> GetList( string queryJson )
        {
            try
            {
                return adjunctDatailsService.GetList(queryJson);
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
        public IEnumerable<TNRD_Adjunct_DatailsEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                return adjunctDatailsService.GetPageList(pagination, queryJson);
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
        /// 获取项目附件信息项目大事记
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectList(Pagination pagination, string queryJson)
        {
            try
            {
                return adjunctDatailsService.GetProjectList(pagination, queryJson);
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
        public TNRD_Adjunct_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return adjunctDatailsService.GetEntity(keyValue);
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
                adjunctDatailsService.DeleteEntity(keyValue);
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
        public void SaveEntity(string keyValue, TNRD_Adjunct_DatailsEntity entity)
        {
            try
            {
                adjunctDatailsService.SaveEntity(keyValue, entity);
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
