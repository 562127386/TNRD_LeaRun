using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-18 10:47
    /// 描 述：项目概算数据
    /// </summary>
    public class XM_Project_Details_EstimateEntity 
    {
        #region 实体成员
        /// <summary>
        /// Id
        /// </summary>
        /// <returns></returns>
        [Column("ID")]
        public string Id { get; set; }
        /// <summary>
        /// 项目ID
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
        /// 立项时间
        /// </summary>
        /// <returns></returns>
        [Column("PROJECTDATE")]
        public DateTime? ProjectDate { get; set; }
        /// <summary>
        /// 数据来源
        /// </summary>
        /// <returns></returns>
        [Column("DATASOURCE")]
        public string DataSource { get; set; }
        /// <summary>
        /// 文号
        /// </summary>
        /// <returns></returns>
        [Column("NUMBER")]
        public string Number { get; set; }
        /// <summary>
        /// 下达时间
        /// </summary>
        /// <returns></returns>
        [Column("GIVETIME")]
        public DateTime? GiveTime { get; set; }
        /// <summary>
        /// 热源
        /// </summary>
        /// <returns></returns>
        [Column("HEAT")]
        public decimal? heat { get; set; }
        /// <summary>
        /// 一次网
        /// </summary>
        /// <returns></returns>
        [Column("ANET")]
        public decimal? ANet { get; set; }
        /// <summary>
        /// 换热站
        /// </summary>
        /// <returns></returns>
        [Column("HOTNET")]
        public decimal? HotNet { get; set; }
        /// <summary>
        /// 二次网
        /// </summary>
        /// <returns></returns>
        [Column("TWONET")]
        public decimal? TwoNet { get; set; }
        /// <summary>
        /// 交易服务费
        /// </summary>
        /// <returns></returns>
        [Column("DEALFEE")]
        public decimal? DealFee { get; set; }
        /// <summary>
        /// 招标代理费
        /// </summary>
        /// <returns></returns>
        [Column("TENDERFEE")]
        public decimal? TenderFee { get; set; }
        /// <summary>
        /// 造价咨询费
        /// </summary>
        /// <returns></returns>
        [Column("COSTFEE")]
        public decimal? CostFee { get; set; }
        /// <summary>
        /// 施工图审查费
        /// </summary>
        /// <returns></returns>
        [Column("WORKMAPFEE")]
        public decimal? WorkMapFee { get; set; }
        /// <summary>
        /// 其他费（前期费）
        /// </summary>
        /// <returns></returns>
        [Column("AGOOTHERFEE")]
        public decimal? AgoOtherFee { get; set; }
        /// <summary>
        /// 勘察费
        /// </summary>
        /// <returns></returns>
        [Column("PROSPECTFEE")]
        public decimal? ProspectFee { get; set; }
        /// <summary>
        /// 设计费
        /// </summary>
        /// <returns></returns>
        [Column("DESIGNFEE")]
        public decimal? DesignFee { get; set; }
        /// <summary>
        /// 监理费
        /// </summary>
        /// <returns></returns>
        [Column("CONTROLFEE")]
        public decimal? ControlFee { get; set; }
        /// <summary>
        /// 环评费
        /// </summary>
        /// <returns></returns>
        [Column("ENVIRONMENTFEE")]
        public decimal? EnvironmentFee { get; set; }
        /// <summary>
        /// 安评费
        /// </summary>
        /// <returns></returns>
        [Column("SAFETYFEE")]
        public decimal? SafetyFee { get; set; }
        /// <summary>
        /// 掘路费
        /// </summary>
        /// <returns></returns>
        [Column("DIGGINGFEE")]
        public decimal? DiggingFee { get; set; }
        /// <summary>
        /// 招待费
        /// </summary>
        /// <returns></returns>
        [Column("SERVEFEE")]
        public decimal? ServeFee { get; set; }
        /// <summary>
        /// 管理费
        /// </summary>
        /// <returns></returns>
        [Column("MANAGEFEE")]
        public decimal? Managefee { get; set; }
        /// <summary>
        /// 其他费用
        /// </summary>
        /// <returns></returns>
        [Column("OTHERFEE")]
        public decimal? OtherFee { get; set; }
        /// <summary>
        /// 总投资
        /// </summary>
        /// <returns></returns>
        [Column("AMOUNTFEE")]
        public decimal? AmountFee { get; set; }
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

