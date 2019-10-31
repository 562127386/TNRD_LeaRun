using Dapper;
using Learun.DataBase.Repository;
using Learun.Util;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-23 16:25
    /// 描 述：附件信息
    /// </summary>
    public class AdjunctDatailsService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public AdjunctDatailsService()
        {
            fieldSql = @"
                t.Id,
                t.BindId,
                t.Process,
                t.Time,
                t.OrderNo,
                t.AdjunctName,
                t.AdjunctType,
                t.Url,
                t.UploadTime,
                t.FileType,
                t.CreateDate,
                t.CreateUserId,
                t.CreateUserName,
                t.UpdateDate,
                t.UpdateUserId,
                t.UpdateUserName,
                t.Remark1,
                t.Remark2,
                t.Remark3,
                t.Remark4,
                t.Remark5,
                t.Remark6,
                t.Remark7,
                t.Remark8,
                t.Remark9,
                t.Remark10
            ";
        }
        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<TNRD_Adjunct_DatailsEntity> GetList(string queryJson)
        {
            try
            {
                //参考写法
                //var queryParam = queryJson.ToJObject();
                // 虚拟参数
                //var dp = new DynamicParameters(new { });
                //dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM TNRD_Adjunct_Datails t ");

                strSql.Append("  WHERE 1=1 ");
                var queryParam = queryJson.ToJObject();
                // 虚拟参数 
                var dp = new DynamicParameters(new { });
                if (!queryParam["keyword"].IsEmpty())
                {
                    dp.Add("keyword", "%" + queryParam["keyword"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.BindId Like @keyword ");
                }
                if (!queryParam["BindId"].IsEmpty())
                {
                    dp.Add("BindId", "%" + queryParam["BindId"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.BindId Like @BindId ");
                }
                return this.BaseRepository().FindList<TNRD_Adjunct_DatailsEntity>(strSql.ToString(),dp);

                //return this.BaseRepository().FindList<TNRD_Adjunct_DatailsEntity>(strSql.ToString());

                //strSql.Append(" where 1=1 ");
                //if (!queryParam["BindId"].IsEmpty())
                //{
                //    dp.Add("BindId", "%" + queryParam["BindId"].ToString() + "%", DbType.String);
                //    strSql.Append(" AND t.BindId Like @BindId ");
                //}
                //return this.BaseRepository().FindList<TNRD_Adjunct_DatailsEntity>(strSql.ToString(),dp);

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
        public IEnumerable<TNRD_Adjunct_DatailsEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM TNRD_Adjunct_Datails t ");
                strSql.Append("  WHERE 1=1 ");
                var queryParam = queryJson.ToJObject();
                // 虚拟参数 
                var dp = new DynamicParameters(new { });
                if (!queryParam["keyword"].IsEmpty())
                {
                    dp.Add("keyword", "%" + queryParam["keyword"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.BindId Like @keyword ");
                }
                return this.BaseRepository().FindList<TNRD_Adjunct_DatailsEntity>(strSql.ToString(), pagination);
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
        /// 获取项目大事记
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT * ");
                //strSql.Append(fieldSql);
                strSql.Append(" FROM View_TNRD_Project_Adjunct t ");
                strSql.Append("  WHERE 1=1 ");
                var queryParam = queryJson.ToJObject();
                // 虚拟参数 
                var dp = new DynamicParameters(new { });
                if (!queryParam["keyword"].IsEmpty())
                {
                    dp.Add("keyword", "%" + queryParam["keyword"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.BindId Like @keyword ");
                }
                if (!queryParam["ProjectName"].IsEmpty())
                {
                    dp.Add("ProjectName", "%" + queryParam["ProjectName"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.Name Like @ProjectName ");
                }
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.Time >= @startTime AND t.Time <= @endTime ) ");
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
        public TNRD_Adjunct_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<TNRD_Adjunct_DatailsEntity>(keyValue);
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
                this.BaseRepository().Delete<TNRD_Adjunct_DatailsEntity>(t => t.Id == keyValue);
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
        public void SaveEntity(string keyValue, TNRD_Adjunct_DatailsEntity entity)
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
