using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-10-25 18:02
    /// 描 述：项目收入
    /// </summary>
    public class TNRD_Project_IncomeEntity 
    {
        #region 实体成员
        /// <summary>
        /// ID
        /// </summary>
        /// <returns></returns>
        [Column("ID")]
        public string Id { get; set; }
        /// <summary>
        /// 关联id
        /// </summary>
        /// <returns></returns>
        [Column("BINDID")]
        public string BindId { get; set; }
        /// <summary>
        /// 项目编号
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
        /// 局下达日期
        /// </summary>
        /// <returns></returns>
        [Column("BUREAUDATE")]
        public DateTime? BureauDate { get; set; }
        /// <summary>
        /// 局下达文号
        /// </summary>
        /// <returns></returns>
        [Column("BUREAUTITANICT")]
        public string BureauTitanict { get; set; }
        /// <summary>
        /// 局已下达资金计划
        /// </summary>
        /// <returns></returns>
        [Column("BUREAUFUNDS")]
        public decimal? BureauFunds { get; set; }
        /// <summary>
        /// 财政下达日期
        /// </summary>
        /// <returns></returns>
        [Column("FISCALDATE")]
        public DateTime? FiscalDate { get; set; }
        /// <summary>
        /// 财政下达文号
        /// </summary>
        /// <returns></returns>
        [Column("FISCALTITANICT")]
        public string FiscalTitanict { get; set; }
        /// <summary>
        /// 财政已下达资金
        /// </summary>
        /// <returns></returns>
        [Column("FISCALFUNDS")]
        public decimal? FiscalFunds { get; set; }
        /// <summary>
        /// 收款日期
        /// </summary>
        /// <returns></returns>
        [Column("COLLECTIONDATE")]
        public DateTime? CollectionDate { get; set; }
        /// <summary>
        /// 收款金额
        /// </summary>
        /// <returns></returns>
        [Column("COLLECTION")]
        public decimal? Collection { get; set; }
        /// <summary>
        /// 凭证号
        /// </summary>
        /// <returns></returns>
        [Column("VOUCHERNO")]
        public string VoucherNo { get; set; }
        /// <summary>
        /// 附件类型发票或收据
        /// </summary>
        /// <returns></returns>
        [Column("TYPE")]
        public string Type { get; set; }
        /// <summary>
        /// 资金来源
        /// </summary>
        /// <returns></returns>
        [Column("CAPITALSOURCE")]
        public string capitalSource { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        /// <returns></returns>
        [Column("REMARK")]
        public string Remark { get; set; }
        /// <summary>
        /// 附件名称
        /// </summary>
        /// <returns></returns>
        [Column("ADJUNCTNAME")]
        public string AdjunctName { get; set; }
        /// <summary>
        /// 附件路径
        /// </summary>
        /// <returns></returns>
        [Column("URL")]
        public string Url { get; set; }
        /// <summary>
        /// 创建日期
        /// </summary>
        /// <returns></returns>
        [Column("CREATEDATE")]
        public DateTime? CreateDate { get; set; }
        /// <summary>
        /// 创建人Id
        /// </summary>
        /// <returns></returns>
        [Column("CREATEUSERID")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 创建人
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
        /// 修改人Id
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

