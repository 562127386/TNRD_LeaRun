using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:19
    /// 描 述：设备税率变更日志
    /// </summary>
    public class XM_Facility_Rate_LogEntity 
    {
        #region 实体成员
        /// <summary>
        /// 主键
        /// </summary>
        /// <returns></returns>
        [Column("ID")]
        public string Id { get; set; }
        /// <summary>
        /// BindId
        /// </summary>
        /// <returns></returns>
        [Column("BINDID")]
        public string BindId { get; set; }
        /// <summary>
        /// 项目编码
        /// </summary>
        /// <returns></returns>
        [Column("PROJECTNO")]
        public string ProjectNo { get; set; }
        /// <summary>
        /// 项目名称
        /// </summary>
        /// <returns></returns>
        [Column("PROJECTNAME")]
        public string ProjectName { get; set; }
        /// <summary>
        /// 设备编码
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYCODE")]
        public string FacilityCode { get; set; }
        /// <summary>
        /// 设备名称
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYNAME")]
        public string FacilityName { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        /// <returns></returns>
        [Column("QUANTITY")]
        public decimal? Quantity { get; set; }
        /// <summary>
        /// 单位
        /// </summary>
        /// <returns></returns>
        [Column("UNIT")]
        public string Unit { get; set; }
        /// <summary>
        /// 变更前税率
        /// </summary>
        /// <returns></returns>
        [Column("OLDRATE")]
        public decimal? OldRate { get; set; }
        /// <summary>
        /// 变更后税率
        /// </summary>
        /// <returns></returns>
        [Column("RATE")]
        public decimal? Rate { get; set; }
        /// <summary>
        /// 出厂价格（元）
        /// </summary>
        /// <returns></returns>
        [Column("PRICE")]
        public decimal? Price { get; set; }
        /// <summary>
        /// 每一品目的出厂价（元）（及总价）
        /// </summary>
        /// <returns></returns>
        [Column("TOTALPRICE")]
        public decimal? TotalPrice { get; set; }
        /// <summary>
        /// 每一目应缴税费（元）（及总税费）
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAX")]
        public decimal? TotalTax { get; set; }
        /// <summary>
        /// 每一品目的含税价格（元）（及含税总价）
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAXPRICE")]
        public decimal? TotalTaxPrice { get; set; }
        /// <summary>
        /// 变更后每一品目出厂价格
        /// </summary>
        /// <returns></returns>
        [Column("TOTALPRICENEW")]
        public decimal? TotalPriceNew { get; set; }
        /// <summary>
        /// 变更后每一品目应交税费
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAXNEW")]
        public decimal? TotalTaxNew { get; set; }
        /// <summary>
        /// 变更后每一品目含税价格
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAXPRICENEW")]
        public decimal? TotalTaxPriceNew { get; set; }
        /// <summary>
        /// 创建日期
        /// </summary>
        /// <returns></returns>
        [Column("CREATEDATE")]
        public DateTime? CreateDate { get; set; }
        /// <summary>
        /// 创建用户账户
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERID")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 创建用户名称
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERNAME")]
        public string CreateUserName { get; set; }
        /// <summary>
        /// 最后修改时间
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEDATE")]
        public DateTime? UpdateDate { get; set; }
        /// <summary>
        /// 最后修改用户
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEUSERID")]
        public string UpdateUserId { get; set; }
        /// <summary>
        /// 最后修改用户名称
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEUSERNAME")]
        public string UpdateUserName { get; set; }
        #endregion

        #region 扩展操作
        /// <summary>
        /// 新增调用
        /// </summary>
        public void Create()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        /// <summary>
        /// 编辑调用
        /// </summary>
        /// <param name="keyValue"></param>
        public void Modify(string keyValue)
        {
            this.Id = keyValue;
        }
        #endregion
    }
}

