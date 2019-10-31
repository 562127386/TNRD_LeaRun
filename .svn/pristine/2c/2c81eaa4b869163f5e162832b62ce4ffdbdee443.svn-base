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
    /// 日 期：2019-01-14 18:02
    /// 描 述：付款明细表
    /// </summary>
    public class PayDatailsService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        private PactPurchaseIBLL pactPurchaseIBLL = new PactPurchaseBLL();
        private PactAssortIBLL pactAssortIBLL = new PactAssortBLL();
        public PayDatailsService()
        {
            fieldSql= @"
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
                t.Type,
                t.VoucherNo,
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
        public IEnumerable<XM_Pay_DatailsEntity> GetList( string queryJson )
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
                strSql.Append(" FROM XM_Pay_Datails t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BindId= '" + keyord + "') ");
                }
                return this.BaseRepository().FindList<XM_Pay_DatailsEntity>(strSql.ToString());
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
        public IEnumerable<XM_Pay_DatailsEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Pay_Datails t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (BindId= '" + keyord + "') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["StartTime"].IsEmpty() && !queryParam["EndTime"].IsEmpty())
                {
                    dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                    dp.Add("endTime", queryParam["EndTime"].ToDate(), DbType.DateTime);
                    strSql.Append(" AND ( t.PayDate >= @startTime AND t.PayDate <= @endTime ) ");
                }
                if (!queryParam["PactName"].IsEmpty() )
                {
                    dp.Add("PactName", "%" + queryParam["PactName"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.PactName Like @PactName ) ");
                }
                if (!queryParam["PayCompany"].IsEmpty() )
                {
                    dp.Add("PayCompany", "%" + queryParam["PayCompany"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.PayCompany Like @PayCompany ) ");
                }
                if (!queryParam["PayType"].IsEmpty() )
                {
                    dp.Add("PayType", "%" + queryParam["PayType"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.PayType Like @PayType ) ");
                }
                return this.BaseRepository().FindList<XM_Pay_DatailsEntity>(strSql.ToString(),dp, pagination);
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
        public XM_Pay_DatailsEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Pay_DatailsEntity>(keyValue);
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
                this.BaseRepository().Delete<XM_Pay_DatailsEntity>(t=>t.Id == keyValue);
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
        public void SaveEntity(string keyValue, XM_Pay_DatailsEntity entity)
        {
            try
            {
                IRepository db = new RepositoryFactory().BaseRepository();
                if (!string.IsNullOrEmpty(keyValue))
                {
                    entity.Modify(keyValue);
                    db.Update(entity);
                }
                else
                {
                    entity.Create();
                    db.Insert(entity);
                }
                XM_Pact_AssortEntity PactEntity = pactAssortIBLL.GetEntity(entity.BindId);
                XM_Pact_AssortEntity AssEntity = new XM_Pact_AssortEntity();

                //已付金额
                decimal? pAmount = PactEntity.PaidAmount + entity.PayAmount;
                //未付金额
                decimal? unpAmount = PactEntity.Amount - pAmount;
                AssEntity.PaidAmount = pAmount;
                AssEntity.UnPaidAmount = unpAmount;
                AssEntity.Id = entity.BindId;
                db.Update(AssEntity);

                try
                {
                    db.Commit();
                }
                catch (Exception)
                {
                    db.Rollback();
                    throw;
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
        public void SaveEntityPurchase(string keyValue, XM_Pay_DatailsEntity entity,string items)
        {
            try
            {

                IRepository db = new RepositoryFactory().BaseRepository();
                if (!string.IsNullOrEmpty(keyValue))
                {
                    entity.Modify(keyValue);
                    db.Update(entity);
                }
                else
                {
                    entity.Create();
                    db.Insert(entity);
                }
                List<XM_Facility_BaseEntity> list = Extensions.ToList<XM_Facility_BaseEntity>(items);
                List<XM_Facility_BaseEntity> list_item = items.ToList<XM_Facility_BaseEntity>();
                foreach (var item in list_item)
                {
                    XM_Facility_PayEntity tN_CP_FKMXEntity = new XM_Facility_PayEntity();
                    tN_CP_FKMXEntity.BindId = entity.Id;
                    tN_CP_FKMXEntity.FacilityId = item.Id;
                    tN_CP_FKMXEntity.FacilityCode = item.Code;
                    tN_CP_FKMXEntity.FacilityName = item.Name;
                    tN_CP_FKMXEntity.FacilityType = item.Classify;
                    tN_CP_FKMXEntity.ProjectNo = item.ProjectNo;
                    tN_CP_FKMXEntity.ProjectName = item.ProjectName;
                    tN_CP_FKMXEntity.PactName = item.PurchaseName;
                    tN_CP_FKMXEntity.PactCode = item.PurchaseNo;
                    tN_CP_FKMXEntity.Price = item.Price;
                    tN_CP_FKMXEntity.Quantity = item.Quantity;
                    tN_CP_FKMXEntity.Unit = item.Unit;
                    tN_CP_FKMXEntity.PaymentCompanyId = item.Package;
                    tN_CP_FKMXEntity.PaymentAmount = item.TotalPrice;
                    tN_CP_FKMXEntity.PayDate = entity.PayDate;
                    tN_CP_FKMXEntity.PayNo = entity.PayNo;
                    tN_CP_FKMXEntity.VoucherNo = entity.VoucherNo;
                    tN_CP_FKMXEntity.Create();
                    db.Insert(tN_CP_FKMXEntity);
                    XM_Facility_BaseEntity facilityEntity = new XM_Facility_BaseEntity();
                    facilityEntity.Id = item.Id;
                    facilityEntity.PayQuantity = item.Quantity + item.PayQuantity;
                    db.Update(facilityEntity);

                }
                XM_Pact_PurchaseEntity PactEntity = pactPurchaseIBLL.GetXM_Pact_PurchaseEntity(entity.BindId);
                XM_Pact_PurchaseEntity PurEntity = new XM_Pact_PurchaseEntity();

                //已付金额
                decimal? pAmount = PactEntity.PaidAmount + entity.PayAmount;
                //未付金额
                decimal? unpAmount = PactEntity.Amount - pAmount;
                PurEntity.PaidAmount = pAmount;
                PurEntity.UnPaidAmount = unpAmount;
                PurEntity.Id = entity.BindId;
                db.Update(PurEntity);
                //pactPurchaseIBLL.SaveEntity(entity.BindId, PurEntity);

                try
                {
                    db.Commit();
                }
                catch (Exception)
                {
                    db.Rollback();
                    throw;
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
