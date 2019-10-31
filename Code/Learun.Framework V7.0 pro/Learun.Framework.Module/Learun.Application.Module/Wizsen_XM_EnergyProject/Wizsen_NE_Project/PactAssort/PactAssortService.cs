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
    /// 日 期：2019-01-14 17:12
    /// 描 述：国内配套合同
    /// </summary>
    public class PactAssortService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public PactAssortService()
        {
            fieldSql= @"
                t.Id,
                t.BindId,
                t.ProjectNo,
                t.ProjectName,
                t.Code,
                t.Name,
                t.ACode,
                t.AName,
                t.BCode,
                t.BName,
                t.PaidAmount,
                t.UnPaidAmount,
                t.SignDate,
                t.SignPlace,
                t.Amount,
                t.Type,
                t.Settlement,
                t.PayType,
                t.FundSource,
                t.DEC,
                t.Remark,
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
        public DataTable GetList( string queryJson )
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
                strSql.Append("SELECT * ");
                //strSql.Append(fieldSql);
                strSql.Append(" FROM View_Pact_Assort t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ProjectNo like '%" + keyord + "%' " +
                                    "or  ProjectName like '%" + keyord + "%' " +
                                    "or  Code like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  Type like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.SignDate >= @startTime AND t.SignDate <= @endTime ) ");
                }
                return this.BaseRepository().FindTable(strSql.ToString(),dp);
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
        public DataTable GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT * ");
                //strSql.Append(fieldSql);
                strSql.Append(" FROM View_Pact_Assort t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ProjectNo like '%" + keyord + "%' " +
                                    "or  ProjectName like '%" + keyord + "%' " +
                                    "or  BaseSubCode like '%" + keyord + "%' " +
                                    "or  BaseCode like '%" + keyord + "%' " +
                                    "or  Code like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  Type like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.SignDate >= @startTime AND t.SignDate <= @endTime ) ");
                }
                if (!queryParam["ProjectName"].IsEmpty() )
                {
                    dp.Add("ProjectName", "%" + queryParam["ProjectName"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.ProjectName Like @ProjectName ) ");
                }
                if (!queryParam["Name"].IsEmpty() )
                {
                    dp.Add("Name", "%" + queryParam["Name"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Name Like @Name ) ");
                }
                if (!queryParam["AName"].IsEmpty() )
                {
                    dp.Add("AName", "%" + queryParam["AName"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.AName Like @AName ) ");
                }
                return this.BaseRepository().FindTable(strSql.ToString(),dp, pagination);
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
        public XM_Pact_AssortEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Pact_AssortEntity>(keyValue);
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
                this.BaseRepository().Delete<XM_Pact_AssortEntity>(t=>t.Id == keyValue);
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
        public void SaveEntity(string keyValue, XM_Pact_AssortEntity entity)
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
