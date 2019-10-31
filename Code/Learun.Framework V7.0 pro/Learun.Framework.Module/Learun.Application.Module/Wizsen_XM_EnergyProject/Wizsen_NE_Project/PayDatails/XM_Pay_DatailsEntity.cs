using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 18:02
    /// 描 述：付款明细表
    /// </summary>
    public class XM_Pay_DatailsEntity 
    {
        #region 实体成员
        /// <summary>
        /// Id
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
        /// 合同编码
        /// </summary>
        /// <returns></returns>
        [Column("PACTCODE")]
        public string PactCode { get; set; }
        /// <summary>
        /// 合同名称
        /// </summary>
        /// <returns></returns>
        [Column("PACTNAME")]
        public string PactName { get; set; }
        /// <summary>
        /// 合同类型
        /// </summary>
        /// <returns></returns>
        [Column("PACTTYPE")]
        public string PactType { get; set; }
        /// <summary>
        /// 付款公司编码或设备包
        /// </summary>
        /// <returns></returns>
        [Column("PAYMENTCOMPANYID")]
        public string PaymentCompanyId { get; set; }
        /// <summary>
        /// 付款公司
        /// </summary>
        /// <returns></returns>
        [Column("PAYCOMPANY")]
        public string PayCompany { get; set; }
        /// <summary>
        /// 付款金额
        /// </summary>
        /// <returns></returns>
        [Column("PAYAMOUNT")]
        public decimal? PayAmount { get; set; }
        /// <summary>
        /// 付款日期
        /// </summary>
        /// <returns></returns>
        [Column("PAYDATE")]
        public DateTime? PayDate { get; set; }
        /// <summary>
        /// 付款批次
        /// </summary>
        /// <returns></returns>
        [Column("PAYNO")]
        public string PayNo { get; set; }
        /// <summary>
        /// 付款类型
        /// </summary>
        /// <returns></returns>
        [Column("PAYTYPE")]
        public string PayType { get; set; }

        /// <summary>
        /// 金额付款类型
        /// </summary>
        /// <returns></returns>
        [Column("TYPE")]
        public string Type { get; set; }

        /// <summary>
        /// 凭证号
        /// </summary>
        /// <returns></returns>
        [Column("VOUCHERNO")]
        public string VoucherNo { get; set; }
        /// <summary>
        /// 创建日期
        /// </summary>
        /// <returns></returns>
        [Column("CREATEDATE")]
        public DateTime? CreateDate { get; set; }
        /// <summary>
        /// 创建人编码
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERID")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 创建人名称
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERNAME")]
        public string CreateUserName { get; set; }
        /// <summary>
        /// 修改日期
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEDATE")]
        public DateTime? UpdateDate { get; set; }
        /// <summary>
        /// 修改人编码
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEUSERID")]
        public string UpdateUserId { get; set; }
        /// <summary>
        /// 修改人
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

