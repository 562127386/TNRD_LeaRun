using Learun.Util;
using Learun.Util.Operat;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-27 17:00
    /// 描 述：资金下达
    /// </summary>
    public class TNRD_Project_CapitalEntity 
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
        /// 项目编码
        /// </summary>
        /// <returns></returns>
        [Column("CODE")]
        public string Code { get; set; }
        /// <summary>
        /// 项目名称
        /// </summary>
        /// <returns></returns>
        [Column("NAME")]
        public string Name { get; set; }
        /// <summary>
        /// 下达年份
        /// </summary>
        /// <returns></returns>
        [Column("ISSUEDYEAR")]
        public decimal? IssuedYear { get; set; }
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
        /// 是否完工
        /// </summary>
        /// <returns></returns>
        [Column("ISCOMPLETE")]
        public string IsComplete { get; set; }
        /// <summary>
        /// 创建日期
        /// </summary>
        [Column("CREATEDATE")]
        public DateTime? CreateDate { get; set; }
        /// <summary>
        /// 创建人Id
        /// </summary>
        [Column("CREATEUSERID")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 创建人名称
        /// </summary>
        [Column("CREATEUSERNAME")]
        public string CreateUserName { get; set; }
        /// <summary>
        /// 修改日期
        /// </summary>
        [Column("UPDATEDATE")]
        public DateTime? UpdateDate { get; set; }
        /// <summary>
        /// 修改人Id
        /// </summary>
        [Column("UPDATEUSERID")]
        public string UpdateUserId { get; set; }
        /// <summary>
        /// 修改人
        /// </summary>
        [Column("UPDATEUSERNAME")]
        public string UpdateUserName { get; set; }
        #endregion

        #region 扩展操作
        /// <summary>
        /// 新增调用
        /// </summary>
        public void Create()
        {
            var user = LoginUserInfo.Get();
            this.CreateDate = System.DateTime.Now;
            this.CreateUserId = user.account;
            this.CreateUserName = user.realName;
            this.Id = Guid.NewGuid().ToString();
        }
        /// <summary>
        /// 编辑调用
        /// </summary>
        /// <param name="keyValue"></param>
        public void Modify(string keyValue)
        {
            var user = LoginUserInfo.Get();
            this.UpdateDate = System.DateTime.Now;
            this.UpdateUserId = user.account;
            this.UpdateUserName = user.realName;
            this.Id = keyValue;
        }
        #endregion
    }
}

