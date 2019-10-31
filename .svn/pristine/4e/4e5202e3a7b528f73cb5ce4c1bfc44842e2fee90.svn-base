using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:13
    /// 描 述：采购设备合同
    /// </summary>
    public class XM_Pact_PurchaseEntity 
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
        /// 合同编码
        /// </summary>
        /// <returns></returns>
        [Column("CODE")]
        public string Code { get; set; }
        /// <summary>
        /// 合同名称
        /// </summary>
        /// <returns></returns>
        [Column("NAME")]
        public string Name { get; set; }
        /// <summary>
        /// 合同类型
        /// </summary>
        /// <returns></returns>
        [Column("TYPE")]
        public string Type { get; set; }
        /// <summary>
        /// 采购组织
        /// </summary>
        /// <returns></returns>
        [Column("ORGANIZ")]
        public string Organiz { get; set; }
        /// <summary>
        /// 设备包
        /// </summary>
        /// <returns></returns>
        [Column("PACKAGE")]
        public string Package { get; set; }
        /// <summary>
        /// 计划终止日期
        /// </summary>
        /// <returns></returns>
        [Column("ENDTIME")]
        public DateTime? EndTime { get; set; }
        /// <summary>
        /// 供应商
        /// </summary>
        /// <returns></returns>
        [Column("SUPPLIER")]
        public string Supplier { get; set; }
        /// <summary>
        /// 币种
        /// </summary>
        /// <returns></returns>
        [Column("CURRENCY")]
        public string Currency { get; set; }
        /// <summary>
        /// 合同金额
        /// </summary>
        /// <returns></returns>
        [Column("AMOUNT")]
        public decimal? Amount { get; set; }
        /// <summary>
        /// 已付金额
        /// </summary>
        /// <returns></returns>
        [Column("PAIDAMOUNT")]
        public decimal? PaidAmount { get; set; }
        /// <summary>
        /// 未付金额
        /// </summary>
        /// <returns></returns>
        [Column("UNPAIDAMOUNT")]
        public decimal? UnPaidAmount { get; set; }
        /// <summary>
        /// 付款类型
        /// </summary>
        /// <returns></returns>
        [Column("PAYTYPE")]
        public string PayType { get; set; }
        /// <summary>
        /// 资金来源
        /// </summary>
        /// <returns></returns>
        [Column("FUNDSOURCE")]
        public string FundSource { get; set; }
        /// <summary>
        /// 合同签订日期
        /// </summary>
        /// <returns></returns>
        [Column("SIGNINGDATE")]
        public DateTime? SigningDate { get; set; }
        /// <summary>
        /// 部门
        /// </summary>
        /// <returns></returns>
        [Column("DEPARTMENT")]
        public string Department { get; set; }
        /// <summary>
        /// 人员
        /// </summary>
        /// <returns></returns>
        [Column("PERSONNEL")]
        public string Personnel { get; set; }
        /// <summary>
        /// 交货地点
        /// </summary>
        /// <returns></returns>
        [Column("PLACE")]
        public string Place { get; set; }
        /// <summary>
        /// 预付款
        /// </summary>
        /// <returns></returns>
        [Column("ADVANCEPAY")]
        public decimal? AdvancePay { get; set; }
        /// <summary>
        /// 预付款限额 
        /// </summary>
        /// <returns></returns>
        [Column("LIMIT")]
        public string Limit { get; set; }
        /// <summary>
        /// 合同状态
        /// </summary>
        /// <returns></returns>
        [Column("STATE")]
        public string State { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        /// <returns></returns>
        [Column("CREATEDATE")]
        public DateTime? CreateDate { get; set; }
        /// <summary>
        /// 创建人ID
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERID")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 创建人姓名
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERNAME")]
        public string CreateUserName { get; set; }
        /// <summary>
        /// 更新时间
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEDATE")]
        public DateTime? UpdateDate { get; set; }
        /// <summary>
        /// 更新人ID
        /// </summary>
        /// <returns></returns>
        [Column("UPDATEUSERID")]
        public string UpdateUserId { get; set; }
        /// <summary>
        /// 更新人姓名
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

