using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:15
    /// 描 述：设备管理
    /// </summary>
    public class XM_Facility_BaseEntity 
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
        /// 采购合同编号
        /// </summary>
        /// <returns></returns>
        [Column("PURCHASENO")]
        public string PurchaseNo { get; set; }
        /// <summary>
        /// 采购合同
        /// </summary>
        /// <returns></returns>
        [Column("PURCHASENAME")]
        public string PurchaseName { get; set; }
        /// <summary>
        /// 设备包
        /// </summary>
        /// <returns></returns>
        [Column("PACKAGE")]
        public string Package { get; set; }
        /// <summary>
        /// 设备分类
        /// </summary>
        /// <returns></returns>
        [Column("CLASSIFY")]
        public string Classify { get; set; }
        /// <summary>
        /// 设备编码
        /// </summary>
        /// <returns></returns>
        [Column("CODE")]
        public string Code { get; set; }
        /// <summary>
        /// 设备名称
        /// </summary>
        /// <returns></returns>
        [Column("NAME")]
        public string Name { get; set; }
        /// <summary>
        /// 规格及型号
        /// </summary>
        /// <returns></returns>
        [Column("MODEL")]
        public string Model { get; set; }
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
        /// 税率（%）
        /// </summary>
        /// <returns></returns>
        [Column("RATE")]
        public decimal? Rate { get; set; }
        /// <summary>
        /// 出厂单格（元）
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
        /// 税额（元）
        /// </summary>
        /// <returns></returns>
        [Column("TAX")]
        public decimal? Tax { get; set; }
        /// <summary>
        /// 每一目应缴税费（元）（及总税费）
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAX")]
        public decimal? TotalTax { get; set; }
        /// <summary>
        /// 含税单价（元）
        /// </summary>
        /// <returns></returns>
        [Column("TAXPRICE")]
        public decimal? TaxPrice { get; set; }
        /// <summary>
        /// 每一品目的含税价格（元）（及含税总价）
        /// </summary>
        /// <returns></returns>
        [Column("TOTALTAXPRICE")]
        public decimal? TotalTaxPrice { get; set; }
        /// <summary>
        /// 设备状态
        /// </summary>
        /// <returns></returns>
        [Column("EQUIPMENTSTATE")]
        public string EquipmentState { get; set; }
        /// <summary>
        /// 收货单位
        /// </summary>
        /// <returns></returns>
        [Column("RECEIVINGUNIT")]
        public string ReceivingUnit { get; set; }
        /// <summary>
        /// 收货地址
        /// </summary>
        /// <returns></returns>
        [Column("SHIPPINGADDRESS")]
        public string ShippingAddress { get; set; }
        /// <summary>
        /// 货物描述
        /// </summary>
        /// <returns></returns>
        [Column("DESCRIPTION")]
        public string Description { get; set; }
        /// <summary>
        /// 财务组织
        /// </summary>
        /// <returns></returns>
        [Column("FINANCIAL")]
        public string Financial { get; set; }
        /// <summary>
        /// 厂家
        /// </summary>
        /// <returns></returns>
        [Column("CUSTOMER")]
        public string Customer { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        /// <returns></returns>
        [Column("REMARK")]
        public string Remark { get; set; }
        /// <summary>
        /// 支付数量
        /// </summary>
        /// <returns></returns>
        [Column("PAYQUANTITY")]
        public decimal? PayQuantity { get; set; }
        /// <summary>
        /// 入库时间
        /// </summary>
        /// <returns></returns>
        [Column("STORAGETIME")]
        public DateTime? StorageTime { get; set; }
        /// <summary>
        /// 出库时间
        /// </summary>
        /// <returns></returns>
        [Column("OUTBOUNDTIME")]
        public DateTime? OutboundTime { get; set; }
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

