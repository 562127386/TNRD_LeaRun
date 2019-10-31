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
    /// 日 期：2019-01-14 17:15
    /// 描 述：设备管理
    /// </summary>
    public class FacilityBaseService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public FacilityBaseService()
        {
            fieldSql=@"
                t.Id,
                t.BindId,
                t.ProjectNo,
                t.ProjectName,
                t.PurchaseNo,
                t.PurchaseName,
                t.Package,
                t.Classify,
                t.Code,
                t.Name,
                t.Model,
                t.Quantity,
                t.Unit,
                t.Rate,
                t.Price,
                t.TotalPrice,
                t.Tax,
                t.TotalTax,
                t.TaxPrice,
                t.TotalTaxPrice,
                t.EquipmentState,
                t.ReceivingUnit,
                t.ShippingAddress,
                t.Description,
                t.Financial,
                t.Customer,
                t.Remark,
                t.PayQuantity,
                t.StorageTime,
                t.OutboundTime,
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
        public IEnumerable<XM_Facility_BaseEntity> GetList( string queryJson )
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
                strSql.Append(" FROM XM_Facility_Base t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ProjectNo like '%" + keyord + "%' " +
                                    "or  ProjectName like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  PurchaseName like '%" + keyord + "%'" +
                                    "or  Package like '%" + keyord + "%') ");
                }
                return this.BaseRepository().FindList<XM_Facility_BaseEntity>(strSql.ToString());
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
        public IEnumerable<XM_Facility_BaseEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Facility_Base t where 1=1 ");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ProjectNo like '%" + keyord + "%' " +
                                    "or  ProjectName like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%'" +
                                    "or  PurchaseName like '%" + keyord + "%'" +
                                    "or  Package like '%" + keyord + "%') ");
                }
                var dp = new DynamicParameters(new { });
                if (!queryParam["ProjectName"].IsEmpty())
                {
                    dp.Add("ProjectName", "%" + queryParam["ProjectName"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.ProjectName Like @ProjectName ) ");
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
                if (!queryParam["Classify"].IsEmpty() )
                {
                    dp.Add("Classify", "%" + queryParam["Classify"].ToString().Trim() + "%", DbType.String);
                    strSql.Append(" AND ( t.Classify Like @Classify ) ");
                }
                return this.BaseRepository().FindList<XM_Facility_BaseEntity>(strSql.ToString(), dp,pagination);
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
        public XM_Facility_BaseEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Facility_BaseEntity>(keyValue);
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
                this.BaseRepository().Delete<XM_Facility_BaseEntity>(t=>t.Id == keyValue);
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
        public void SaveEntity(string keyValue, XM_Facility_BaseEntity entity)
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
