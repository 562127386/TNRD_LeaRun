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
    /// 日 期：2019-01-14 17:01
    /// 描 述：项目管理
    /// </summary>
    public class ProjectDatailsService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public ProjectDatailsService()
        {
            fieldSql = @"
                t.Id,
                t.BindId,
                t.Code,
                t.Name,
                t.BaseCode,
                t.BaseName,
                t.BaseSubCode,
                t.BaseSubName,
                t.BeginDate,
                t.EndDate,
                t.Type,
                t.CapitalSource,
                t.CompanyId,
                t.CompanyName,
                t.ProjectState,
                t.Package,
                t.DEC,
                t.Principal,
                t.Phone,
                t.ConstructionUnit,
                t.CPrincipal,
                t.CPhone,
                t.Remark,
                t.Node,
                t.CreateDate,
                t.CreateUserId,
                t.CreateUserName,
                t.UpdateDate,
                t.UpdateUserId,
                t.UpdateUserName,
                t.FiscalCapital,
                t.ArriveCapital,
                t.AuditYear
            ";
        }
        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public DataTable GetList(string queryJson)
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
                strSql.Append(" FROM View_Project_Total t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BaseCode like '%" + keyord + "%' " +
                                    "or  BaseName like '%" + keyord + "%' " +
                                    "or  BaseSubCode like '%" + keyord + "%'" +
                                    "or  BaseSubName like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  Package like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.BeginDate >= @startTime AND t.BeginDate <= @endTime ) ");
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
        public IEnumerable<XM_Project_DatailsEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Project_Datails t WHERE 1=1");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BaseCode like '%" + keyord + "%' " +
                                    "or  BaseName like '%" + keyord + "%' " +
                                    "or  BaseSubCode like '%" + keyord + "%'" +
                                    "or  BaseSubName like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  Package like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.BeginDate >= @startTime AND t.BeginDate <= @endTime ) ");
                }
                if (!queryParam["Name"].IsEmpty() )
                {
                    dp.Add("Name", "%" + queryParam["Name"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Name Like @Name ) ");
                }
                if (!queryParam["Package"].IsEmpty() )
                {
                    dp.Add("Package", "%" + queryParam["Package"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Package Like @Package ) ");
                }
                if (!queryParam["CompanyName"].IsEmpty() )
                {
                    dp.Add("CompanyName", "%" + queryParam["CompanyName"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.CompanyName Like @CompanyName ) ");
                }
                return this.BaseRepository().FindList<XM_Project_DatailsEntity>(strSql.ToString(),dp, pagination);
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
        public XM_Project_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Project_DatailsEntity>(keyValue);
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
        /// 获取项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectAmount(string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT * ");
                strSql.Append(" FROM View_Project_Amount t WHERE 1=1");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND Id = '" + keyord + "' ");
                }
                return this.BaseRepository().FindTable(strSql.ToString());
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
        /// 获取主项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetProjectBaseAmount(string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT * ");
                strSql.Append(" FROM View_ProjectBase_Amount t WHERE 1=1");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND BaseCode = '" + keyord + "' ");
                }
                return this.BaseRepository().FindTable(strSql.ToString());
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
        /// 获取附件报表
        /// </summary>
        /// <param name="queryJson"></param>
        /// <returns></returns>
        public DataTable GetAdjunctReport(string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                return this.BaseRepository().ExecuteProc("Proc_PivotAdjunctName");
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
        /// 项目国内配套合同付款金额汇总
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public DataTable GetAssSum(string keyValue)
        {
            try
            {
                var queryParam = keyValue.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT * ");
                strSql.Append(" FROM View_Assort_Sum t WHERE 1=1");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ProjectNo = '" + keyord + "') ");
                }
                return this.BaseRepository().FindTable(strSql.ToString());
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
        /// 获取XM_Project_Details_Estimate表数据 
        /// <summary> 
        /// <returns></returns> 
        public IEnumerable<XM_Project_Details_EstimateEntity> GetXM_Project_Details_EstimateList(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindList<XM_Project_Details_EstimateEntity>(t => t.BindId == keyValue);
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
        /// 获取XM_Project_Datails表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Project_DatailsEntity GetXM_Project_DatailsEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Project_DatailsEntity>(keyValue);
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
        /// 获取XM_Project_Details_Estimate表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Project_Details_EstimateEntity GetXM_Project_Details_EstimateEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Project_Details_EstimateEntity>(t => t.BindId == keyValue);
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
                this.BaseRepository().Delete<XM_Project_DatailsEntity>(t => t.Id == keyValue);
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
        public void SaveEntity(string keyValue, XM_Project_DatailsEntity entity)
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
        /// <summary> 
        /// 保存实体数据（新增、修改） 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public void SaveEntity2(string keyValue, XM_Project_DatailsEntity entity, List<XM_Project_Details_EstimateEntity> xM_Project_Details_EstimateList)
        {
            var db = this.BaseRepository().BeginTrans();
            try
            {
                if (!string.IsNullOrEmpty(keyValue))
                {
                    var xM_Project_DatailsEntityTmp = GetXM_Project_DatailsEntity(keyValue);
                    entity.Modify(keyValue);
                    db.Update(entity);
                    db.Delete<XM_Project_Details_EstimateEntity>(t => t.BindId == xM_Project_DatailsEntityTmp.Id);
                    foreach (XM_Project_Details_EstimateEntity item in xM_Project_Details_EstimateList)
                    {
                        item.Create();
                        item.BindId = xM_Project_DatailsEntityTmp.Id;
                        db.Insert(item);
                    }
                }
                else
                {
                    entity.Create();
                    db.Insert(entity);
                    foreach (XM_Project_Details_EstimateEntity item in xM_Project_Details_EstimateList)
                    {
                        item.Create();
                        item.BindId = entity.Id;
                        item.Code = entity.Code;
                        item.Name = entity.Name;
                        db.Insert(item);
                    }
                }
                db.Commit();
            }
            catch (Exception ex)
            {
                db.Rollback();
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
