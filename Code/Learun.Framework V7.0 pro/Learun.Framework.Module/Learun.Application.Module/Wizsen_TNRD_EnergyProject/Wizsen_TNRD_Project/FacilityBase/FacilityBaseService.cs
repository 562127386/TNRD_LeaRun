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
    /// 日 期：2019-03-01 10:46
    /// 描 述：设备列表
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
                t.PactNo,
                t.PactName,
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
        public IEnumerable<TNRD_Facility_BaseEntity> GetList( string queryJson )
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
                strSql.Append(" FROM TNRD_Facility_Base t ");
                return this.BaseRepository().FindList<TNRD_Facility_BaseEntity>(strSql.ToString());
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
        public IEnumerable<TNRD_Facility_BaseEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM TNRD_Facility_Base t ");
                return this.BaseRepository().FindList<TNRD_Facility_BaseEntity>(strSql.ToString(), pagination);
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
        public TNRD_Facility_BaseEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<TNRD_Facility_BaseEntity>(keyValue);
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
                this.BaseRepository().Delete<TNRD_Facility_BaseEntity>(t=>t.Id == keyValue);
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
        public void SaveEntity(string keyValue, TNRD_Facility_BaseEntity entity)
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
