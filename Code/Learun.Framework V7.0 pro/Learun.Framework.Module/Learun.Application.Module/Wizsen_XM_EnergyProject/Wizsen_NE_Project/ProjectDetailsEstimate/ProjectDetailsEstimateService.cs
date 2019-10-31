using Dapper;
using Learun.DataBase.Repository;
using Learun.Util;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-18 10:47
    /// 描 述：项目概算数据
    /// </summary>
    public class ProjectDetailsEstimateService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public ProjectDetailsEstimateService()
        {
            fieldSql= @"
                t.Id,
                t.BindId,
                t.Code,
                t.Name,
                t.ProjectDate,
                t.DataSource,
                t.Number,
                t.GiveTime,
                t.heat,
                t.ANet,
                t.HotNet,
                t.TwoNet,
                t.DealFee,
                t.TenderFee,
                t.CostFee,
                t.WorkMapFee,
                t.AgoOtherFee,
                t.ProspectFee,
                t.DesignFee,
                t.ControlFee,
                t.EnvironmentFee,
                t.SafetyFee,
                t.DiggingFee,
                t.ServeFee,
                t.Managefee,
                t.OtherFee,
                t.AmountFee,
                t.CreateDate,
                t.CreateUserId,
                t.CreateUserName,
                t.UpdateDate,
                t.UpdateUserId,
                t.UpdateUserName
            ";
        }
        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_Details_EstimateEntity> GetList( string queryJson )
        {
            try
            {
                //参考写法
                //var queryParam = queryJson.ToJObject();
                // 虚拟参数
                //var dp = new DynamicParameters(new { });
                //dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Project_Details_Estimate t ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BindId = '" + keyord + "' " +
                                    "or  Name like '%" + keyord + "%' " +
                                    "or  Code like '%" + keyord + "%') ");
                }
                return this.BaseRepository().FindList<XM_Project_Details_EstimateEntity>(strSql.ToString());
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 获取列表分页数据
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_Details_EstimateEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Project_Details_Estimate t ");
                return this.BaseRepository().FindList<XM_Project_Details_EstimateEntity>(strSql.ToString(), pagination);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 获取实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public XM_Project_Details_EstimateEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Project_Details_EstimateEntity>(keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
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
                this.BaseRepository().Delete<XM_Project_Details_EstimateEntity>(t=>t.Id == keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void SaveEntity(string keyValue, XM_Project_Details_EstimateEntity entity)
        {
            try
            {
                if (!string.IsNullOrEmpty(keyValue))
                {
                    entity.Modify(keyValue);
                    this.BaseRepository().Update(entity);
                }
                else
                {
                    entity.Create();
                    this.BaseRepository().Insert(entity);
                }
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        #endregion

    }
}
