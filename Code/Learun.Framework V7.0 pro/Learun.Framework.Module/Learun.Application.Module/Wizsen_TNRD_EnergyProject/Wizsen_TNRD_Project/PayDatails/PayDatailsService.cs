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
    /// 日 期：2019-02-23 15:12
    /// 描 述：付款明细
    /// </summary>
    public class PayDatailsService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public PayDatailsService()
        {
            fieldSql = @"
                t.Id,
                t.BindId,
                t.PactCode,
                t.PactName,
                t.PactType,
                t.PaymentCompanyId,
                t.PayCompany,
                t.PayAmount,
                t.PayDate,
                t.PayNo,
                t.PayType,
                t.VoucherNo,
                t.Type,
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
                t.Remark10,
                t.bookedAmount,
                t.hangAmount
            ";
        }
        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<TNRD_Pay_DatailsEntity> GetList(string queryJson)
        {
            try
            {
                //参考写法
                var queryParam = queryJson.ToJObject();
                // 虚拟参数
                var dp = new DynamicParameters(new { });
                //dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM TNRD_Pay_Datails t ");
                strSql.Append("  WHERE 1=1 ");
                if (!queryParam["BindId"].IsEmpty())
                {
                    dp.Add("BindId", "%" + queryParam["BindId"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.BindId Like @BindId ");
                }
                if (!queryParam["PactCode"].IsEmpty())
                {
                    dp.Add("PactCode", "%" + queryParam["PactCode"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.PactCode Like @PactCode ");
                }
                if (!queryParam["PactName"].IsEmpty())
                {
                    dp.Add("PactName", "%" + queryParam["PactName"].ToString() + "%", DbType.String);
                    strSql.Append(" AND t.PactName Like @PactName ");
                }
                return this.BaseRepository().FindList<TNRD_Pay_DatailsEntity>(strSql.ToString());
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
                //参考写法
                var queryParam = queryJson.ToJObject();
                // 虚拟参数
                var dp = new DynamicParameters(new { });
                //dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(" ProjectName,ProjectNo,a.* ");
                strSql.Append(" from TNRD_Pay_Datails a left join TNRD_Pact_Datails b on a.bindid = b.id ");
                strSql.Append("  WHERE 1=1 ");
                if (!queryParam["BindId"].IsEmpty())
                {
                    dp.Add("BindId", "%" + queryParam["BindId"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.BindId Like @BindId ");
                }
                if (!queryParam["ProjectName"].IsEmpty())
                {
                    dp.Add("ProjectName", "%" + queryParam["ProjectName"].ToString() + "%", DbType.String);
                    strSql.Append(" AND b.ProjectName Like @ProjectName ");
                }
                if (!queryParam["ProjectNo"].IsEmpty())
                {
                    dp.Add("ProjectNo", "%" + queryParam["ProjectNo"].ToString() + "%", DbType.String);
                    strSql.Append(" AND b.ProjectNo Like @ProjectNo ");
                }
                if (!queryParam["PactCode"].IsEmpty())
                {
                    dp.Add("PactCode", "%" + queryParam["PactCode"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.PactCode Like @PactCode ");
                }
                if (!queryParam["PactName"].IsEmpty())
                {
                    dp.Add("PactName", "%" + queryParam["PactName"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.PactName Like @PactName ");
                }
                if (!queryParam["PactCode"].IsEmpty())
                {
                    dp.Add("PactCode", "%" + queryParam["PactCode"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.PactCode Like @PactCode ");
                }
                if (!queryParam["PactName"].IsEmpty())
                {
                    dp.Add("PactName", "%" + queryParam["PactName"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.PactName Like @PactName ");
                }
                if (!queryParam["PayCompany"].IsEmpty())
                {
                    dp.Add("PayCompany", "%" + queryParam["PayCompany"].ToString() + "%", DbType.String);
                    strSql.Append(" AND a.PayCompany Like @PayCompany ");
                }
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( a.PayDate >= @startTime AND a.PayDate <= @endTime ) ");
                }
                return this.BaseRepository().FindTable(strSql.ToString(), dp, pagination);
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
        public TNRD_Pay_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<TNRD_Pay_DatailsEntity>(keyValue);
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
                this.BaseRepository().Delete<TNRD_Pay_DatailsEntity>(t => t.Id == keyValue);
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
        public void SaveEntity(string keyValue, TNRD_Pay_DatailsEntity entity)
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
                    //if (entity.bookedAmount == 0)
                    //{
                    //    var strSql = new StringBuilder();
                    //    strSql.Append(" select * from TNRD_Pay_Datails ");
                    //    strSql.Append(" where bindid = '" + entity.BindId + "' ");
                    //    strSql.Append(" and hangAmount >0   order by CreateDate");
                    //    var data = this.BaseRepository().FindTable(strSql.ToString());
                    //    TNRD_Pay_DatailsEntity payentity = new TNRD_Pay_DatailsEntity();
                    //    var hang = entity.PayAmount;
                    //    Decimal hangAmount = 0;
                    //    string id = "";
                    //    for (int i = 0; i < data.Rows.Count; i++)
                    //    {
                    //        hangAmount = data.Rows[i]["hangAmount"].ToDecimal();
                    //        id = data.Rows[i]["Id"].ToString();
                    //        if (hang <= hangAmount)
                    //        {
                    //            payentity.hangAmount = hangAmount - hang;
                    //            payentity.Modify(id);
                    //            this.BaseRepository().Update(payentity);
                    //            break;
                    //        }
                    //        else
                    //        {
                    //            payentity.hangAmount = 0;
                    //            payentity.Modify(id);
                    //            this.BaseRepository().Update(payentity);
                    //            hang = hang - hangAmount;
                    //        }
                    //    }
                    //}
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
