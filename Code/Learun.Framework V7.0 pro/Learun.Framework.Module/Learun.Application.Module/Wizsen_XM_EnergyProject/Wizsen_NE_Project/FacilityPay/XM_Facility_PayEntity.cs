using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 18:06
    /// 描 述：设备付款明细
    /// </summary>
    public class XM_Facility_PayEntity 
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
        /// 设备Id
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYID")]
        public string FacilityId { get; set; }
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
        /// 合同名称
        /// </summary>
        /// <returns></returns>
        [Column("PACTNAME")]
        public string PactName { get; set; }
        /// <summary>
        /// 合同编码
        /// </summary>
        /// <returns></returns>
        [Column("PACTCODE")]
        public string PactCode { get; set; }
        /// <summary>
        /// 设备名称
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYNAME")]
        public string FacilityName { get; set; }
        /// <summary>
        /// 设备编码
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYCODE")]
        public string FacilityCode { get; set; }
        /// <summary>
        /// 设备类型
        /// </summary>
        /// <returns></returns>
        [Column("FACILITYTYPE")]
        public string FacilityType { get; set; }
        /// <summary>
        /// 出厂单价
        /// </summary>
        /// <returns></returns>
        [Column("PRICE")]
        public decimal? Price { get; set; }
        /// <summary>
        /// 付款数量
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
        /// 付款公司编码或设备包
        /// </summary>
        /// <returns></returns>
        [Column("PAYMENTCOMPANYID")]
        public string PaymentCompanyId { get; set; }
        /// <summary>
        /// 付款金额
        /// </summary>
        /// <returns></returns>
        [Column("PAYMENTAMOUNT")]
        public decimal? PaymentAmount { get; set; }
        /// <summary>
        /// 付款日期
        /// </summary>
        /// <returns></returns>
        [Column("PAYDATE")]
        public DateTime? PayDate { get; set; }
        /// <summary>
        /// 付款类型
        /// </summary>
        /// <returns></returns>
        [Column("PAYTYPE")]
        public string PayType { get; set; }
        /// <summary>
        /// 凭证号
        /// </summary>
        /// <returns></returns>
        [Column("VOUCHERNO")]
        public string VoucherNo { get; set; }
        /// <summary>
        /// 付款批次
        /// </summary>
        /// <returns></returns>
        [Column("PAYNO")]
        public string PayNo { get; set; }
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

