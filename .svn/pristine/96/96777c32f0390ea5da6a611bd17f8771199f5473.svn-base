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
    /// 日 期：2019-02-23 17:26
    /// 描 述：项目管理
    /// </summary>
    public class TNRD_Project_EstimateEntity 
    {
        #region 实体成员
        /// <summary>
        /// Id
        /// </summary>
        [Column("ID")]
        public string Id { get; set; }
        /// <summary>
        /// BindId
        /// </summary>
        [Column("BINDID")]
        public string BindId { get; set; }
        /// <summary>
        /// 项目编码
        /// </summary>
        [Column("CODE")]
        public string Code { get; set; }
        /// <summary>
        /// 项目名称
        /// </summary>
        [Column("NAME")]
        public string Name { get; set; }
        /// <summary>
        /// 数据来源
        /// </summary>
        [Column("DATASOURCE")]
        public string DataSource { get; set; }
        /// <summary>
        /// 文号
        /// </summary>
        [Column("NUMBER")]
        public string Number { get; set; }
        /// <summary>
        /// 下达时间
        /// </summary>
        [Column("GIVETIME")]
        public DateTime? GiveTime { get; set; }
        /// <summary>
        /// 热源
        /// </summary>
        [Column("HEAT")]
        public decimal? heat { get; set; }
        /// <summary>
        /// 一次网
        /// </summary>
        [Column("ANET")]
        public decimal? ANet { get; set; }
        /// <summary>
        /// 换热站
        /// </summary>
        [Column("HOTNET")]
        public decimal? HotNet { get; set; }
        /// <summary>
        /// 二次网
        /// </summary>
        [Column("TWONET")]
        public decimal? TwoNet { get; set; }
        /// <summary>
        /// 交易服务费
        /// </summary>
        [Column("DEALFEE")]
        public decimal? DealFee { get; set; }
        /// <summary>
        /// 招标代理费
        /// </summary>
        [Column("TENDERFEE")]
        public decimal? TenderFee { get; set; }
        /// <summary>
        /// 造价咨询费
        /// </summary>
        [Column("COSTFEE")]
        public decimal? CostFee { get; set; }
        /// <summary>
        /// 施工图审查费
        /// </summary>
        [Column("WORKMAPFEE")]
        public decimal? WorkMapFee { get; set; }
        /// <summary>
        /// 其他费（前期费）
        /// </summary>
        [Column("AGOOTHERFEE")]
        public decimal? AgoOtherFee { get; set; }
        /// <summary>
        /// 勘察费
        /// </summary>
        [Column("PROSPECTFEE")]
        public decimal? ProspectFee { get; set; }
        /// <summary>
        /// 设计费
        /// </summary>
        [Column("DESIGNFEE")]
        public decimal? DesignFee { get; set; }
        /// <summary>
        /// 监理费
        /// </summary>
        [Column("CONTROLFEE")]
        public decimal? ControlFee { get; set; }
        /// <summary>
        /// 环评费
        /// </summary>
        [Column("ENVIRONMENTFEE")]
        public decimal? EnvironmentFee { get; set; }
        /// <summary>
        /// 安评费
        /// </summary>
        [Column("SAFETYFEE")]
        public decimal? SafetyFee { get; set; }
        /// <summary>
        /// 掘路费
        /// </summary>
        [Column("DIGGINGFEE")]
        public decimal? DiggingFee { get; set; }
        /// <summary>
        /// 招待费
        /// </summary>
        [Column("SERVEFEE")]
        public decimal? ServeFee { get; set; }
        /// <summary>
        /// 管理费
        /// </summary>
        [Column("MANAGEFEE")]
        public decimal? ManageFee { get; set; }
        /// <summary>
        /// 其他费用
        /// </summary>
        [Column("OTHERFEE")]
        public decimal? OtherFee { get; set; }
        /// <summary>
        /// 总投资
        /// </summary>
        [Column("AMOUNTFEE")]
        public decimal? AmountFee { get; set; }
        /// <summary>
        /// 立项时间
        /// </summary>
        [Column("PROJECTDATE")]
        public DateTime? ProjectDate { get; set; }
        /// <summary>
        /// 前期费
        /// </summary>
        [Column("AGOFEE")]
        public decimal? AgoFee { get; set; }
        /// <summary>
        /// 工程费
        /// </summary>
        [Column("PROJECTFEE")]
        public decimal? ProjectFee { get; set; }
        /// <summary>
        /// 办理规划证相关费
        /// </summary>
        [Column("PLANFEE")]
        public string PlanFee { get; set; }
        /// <summary>
        /// 扬尘防治增加费
        /// </summary>
        [Column("DUSTFEE")]
        public string DustFee { get; set; }
        /// <summary>
        /// 劳动卫生评价费
        /// </summary>
        [Column("HEALTHFEE")]
        public string HealthFee { get; set; }
        /// <summary>
        /// 预备费
        /// </summary>
        [Column("READYFEE")]
        public string ReadyFee { get; set; }
        /// <summary>
        /// 总管理费
        /// </summary>
        [Column("TOTALMANAGEFEE")]
        public string TotalManageFee { get; set; }
        /// <summary>
        /// 可支出管理费
        /// </summary>
        [Column("EXPANDFEE")]
        public string ExpandFee { get; set; }
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
        /// 创建人
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
        /// <summary>
        /// Remark1
        /// </summary>
        [Column("REMARK1")]
        public string Remark1 { get; set; }
        /// <summary>
        /// Remark2
        /// </summary>
        [Column("REMARK2")]
        public string Remark2 { get; set; }
        /// <summary>
        /// Remark3
        /// </summary>
        [Column("REMARK3")]
        public string Remark3 { get; set; }
        /// <summary>
        /// Remark4
        /// </summary>
        [Column("REMARK4")]
        public string Remark4 { get; set; }
        /// <summary>
        /// Remark5
        /// </summary>
        [Column("REMARK5")]
        public string Remark5 { get; set; }
        /// <summary>
        /// Remark6
        /// </summary>
        [Column("REMARK6")]
        public string Remark6 { get; set; }
        /// <summary>
        /// Remark7
        /// </summary>
        [Column("REMARK7")]
        public string Remark7 { get; set; }
        /// <summary>
        /// Remark8
        /// </summary>
        [Column("REMARK8")]
        public string Remark8 { get; set; }
        /// <summary>
        /// Remark9
        /// </summary>
        [Column("REMARK9")]
        public string Remark9 { get; set; }
        /// <summary>
        /// Remark10
        /// </summary>
        [Column("REMARK10")]
        public string Remark10 { get; set; }
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

