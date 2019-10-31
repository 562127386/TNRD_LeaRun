using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:12
    /// 描 述：国内配套合同
    /// </summary>
    public class XM_Pact_AssortEntity 
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
        /// 甲方编码
        /// </summary>
        /// <returns></returns>
        [Column("ACODE")]
        public string ACode { get; set; }
        /// <summary>
        /// 甲方名称
        /// </summary>
        /// <returns></returns>
        [Column("ANAME")]
        public string AName { get; set; }
        /// <summary>
        /// 乙方编码
        /// </summary>
        /// <returns></returns>
        [Column("BCODE")]
        public string BCode { get; set; }
        /// <summary>
        /// 乙方名称
        /// </summary>
        /// <returns></returns>
        [Column("BNAME")]
        public string BName { get; set; }

        /// <summary>
        /// 合同类别
        /// </summary>
        /// <returns></returns>
        [Column("TYPE")]
        public string Type { get; set; }

        /// <summary>
        /// 结算金额
        /// </summary>
        /// <returns></returns>
        [Column("SETTLEMENT")]
        public string Settlement { get; set; }

        /// <summary>
        /// 付款金额
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
        /// 签订日期
        /// </summary>
        /// <returns></returns>
        [Column("SIGNDATE")]
        public DateTime? SignDate { get; set; }
        /// <summary>
        /// 签订地点
        /// </summary>
        /// <returns></returns>
        [Column("SIGNPLACE")]
        public string SignPlace { get; set; }
        /// <summary>
        /// 合同金额
        /// </summary>
        /// <returns></returns>
        [Column("AMOUNT")]
        public decimal? Amount { get; set; }
        /// <summary>
        /// 支付方式
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
        /// 合同文本
        /// </summary>
        /// <returns></returns>
        [Column("DEC")]
        public string DEC { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        /// <returns></returns>
        [Column("REMARK")]
        public string Remark { get; set; }
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

