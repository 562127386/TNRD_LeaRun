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
    /// 日 期：2019-01-14 17:13
    /// 描 述：采购设备合同
    /// </summary>
    public class PactPurchaseService : RepositoryFactory
    {
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
                strSql.Append(" FROM XM_Pact_Purchase t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BindId like '%" + keyord + "%' " +
                                    "or  Code like '%" + keyord + "%' " +
                                    "or  Package like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  Type like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.SigningDate >= @startTime AND t.SigningDate <= @endTime ) ");
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
        /// 获取页面显示列表数据 
        /// <summary> 
        /// <param name="queryJson">查询参数</param> 
        /// <returns></returns> 
        public IEnumerable<XM_Pact_PurchaseEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(@" 
                t.Id, 
                t.Type, 
                t.Code, 
                t.Name, 
                t.State, 
                t.Package, 
                t.Supplier, 
                t.Organiz, 
                t.Department, 
                t.Personnel, 
                t.Amount, 
                t.Currency, 
                t.AdvancePay, 
                t.Limit, 
                t.SigningDate, 
                t.EndTime, 
                t.Place 
                ");
                strSql.Append("  FROM XM_Pact_Purchase t ");
                strSql.Append("  WHERE 1=1 ");
                var queryParam = queryJson.ToJObject();
                // 虚拟参数 
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.SigningDate >= @startTime AND t.SigningDate <= @endTime ) ");
                }
                if (!queryParam["Name"].IsEmpty())
                {
                    dp.Add("Name", "%" + queryParam["Name"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Name Like @Name ) ");
                }
                if (!queryParam["Package"].IsEmpty() )
                {
                    dp.Add("Package", "%" + queryParam["Package"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Package Like @Package ) ");
                }
                if (!queryParam["Supplier"].IsEmpty())
                {
                    dp.Add("Supplier", "%" + queryParam["Supplier"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Supplier Like @Supplier ) ");
                }
                return this.BaseRepository().FindList<XM_Pact_PurchaseEntity>(strSql.ToString(), dp, pagination);
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
        /// 获取XM_Facility_Base表数据 
        /// <summary> 
        /// <returns></returns> 
        public IEnumerable<XM_Facility_BaseEntity> GetXM_Facility_BaseList(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindList<XM_Facility_BaseEntity>(t => t.BindId == keyValue);
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
        /// 获取XM_Pact_Purchase表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Pact_PurchaseEntity GetXM_Pact_PurchaseEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Pact_PurchaseEntity>(keyValue);
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
        /// 获取XM_Facility_Base表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public XM_Facility_BaseEntity GetXM_Facility_BaseEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Facility_BaseEntity>(t => t.BindId == keyValue);
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
            var db = this.BaseRepository().BeginTrans();
            try
            {
                var xM_Pact_PurchaseEntity = GetXM_Pact_PurchaseEntity(keyValue);
                db.Delete<XM_Pact_PurchaseEntity>(t => t.Id == keyValue);
                db.Delete<XM_Facility_BaseEntity>(t => t.BindId == xM_Pact_PurchaseEntity.Id);
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

        /// <summary> 
        /// 保存实体数据（新增、修改） 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        public void SaveEntity(string keyValue, XM_Pact_PurchaseEntity entity, List<XM_Facility_BaseEntity> xM_Facility_BaseList)
        {
            var db = this.BaseRepository().BeginTrans();
            try
            {
                if (!string.IsNullOrEmpty(keyValue))
                {
                    var xM_Pact_PurchaseEntityTmp = GetXM_Pact_PurchaseEntity(keyValue);
                    entity.Modify(keyValue);
                    db.Update(entity);
                    db.Delete<XM_Facility_BaseEntity>(t => t.BindId == xM_Pact_PurchaseEntityTmp.Id);
                    foreach (XM_Facility_BaseEntity item in xM_Facility_BaseList)
                    {
                        item.Create();
                        item.BindId = xM_Pact_PurchaseEntityTmp.Id;
                        db.Insert(item);
                    }
                }
                else
                {
                    entity.Create();
                    db.Insert(entity);
                    foreach (XM_Facility_BaseEntity item in xM_Facility_BaseList)
                    {
                        item.Create();
                        item.BindId = entity.Id;
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
