using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:01
    /// 描 述：项目管理
    /// </summary>
    public class XM_Project_DatailsEntity 
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
        /// 编码
        /// </summary>
        /// <returns></returns>
        [Column("CODE")]
        public string Code { get; set; }
        /// <summary>
        /// 名称
        /// </summary>
        /// <returns></returns>
        [Column("NAME")]
        public string Name { get; set; }
        /// <summary>
        /// 主项目编码
        /// </summary>
        /// <returns></returns>
        [Column("BASECODE")]
        public string BaseCode { get; set; }
        /// <summary>
        /// 主项目名称
        /// </summary>
        /// <returns></returns>
        [Column("BASENAME")]
        public string BaseName { get; set; }
        /// <summary>
        /// 一级项目编码
        /// </summary>
        /// <returns></returns>
        [Column("BASESUBCODE")]
        public string BaseSubCode { get; set; }
        /// <summary>
        /// 一级项目名称
        /// </summary>
        /// <returns></returns>
        [Column("BASESUBNAME")]
        public string BaseSubName { get; set; }
        /// <summary>
        /// 开始时间
        /// </summary>
        /// <returns></returns>
        [Column("BEGINDATE")]
        public DateTime? BeginDate { get; set; }
        /// <summary>
        /// 结束时间
        /// </summary>
        /// <returns></returns>
        [Column("ENDDATE")]
        public DateTime? EndDate { get; set; }
        /// <summary>
        /// 所属公司Id
        /// </summary>
        /// <returns></returns>
        [Column("COMPANYID")]
        public string CompanyId { get; set; }
        /// <summary>
        /// 所属公司
        /// </summary>
        /// <returns></returns>
        [Column("COMPANYNAME")]
        public string CompanyName { get; set; }
        /// <summary>
        /// 项目状态
        /// </summary>
        /// <returns></returns>
        [Column("PROJECTSTATE")]
        public string ProjectState { get; set; }

        /// <summary>
        /// 项目类别
        /// </summary>
        /// <returns></returns>
        [Column("TYPE")]
        public string Type { get; set; }

        /// <summary>
        /// 资金来源
        /// </summary>
        /// <returns></returns>
        [Column("CAPITALSOURCE")]
        public string CapitalSource { get; set; }

        /// <summary>
        /// 项目节点
        /// </summary>
        /// <returns></returns>
        [Column("NODE")]
        public string Node { get; set; }

        /// <summary>
        /// 设备包
        /// </summary>
        /// <returns></returns>
        [Column("PACKAGE")]
        public string Package { get; set; }
        /// <summary>
        /// 项目描述
        /// </summary>
        /// <returns></returns>
        [Column("DEC")]
        public string DEC { get; set; }
        /// <summary>
        /// 项目负责人
        /// </summary>
        /// <returns></returns>
        [Column("PRINCIPAL")]
        public string Principal { get; set; }
        /// <summary>
        /// 项目负责人电话
        /// </summary>
        /// <returns></returns>
        [Column("PHONE")]
        public string Phone { get; set; }
        /// <summary>
        /// 施工单位
        /// </summary>
        /// <returns></returns>
        [Column("CONSTRUCTIONUNIT")]
        public string ConstructionUnit { get; set; }
        /// <summary>
        /// 施工单位负责人
        /// </summary>
        /// <returns></returns>
        [Column("CPRINCIPAL")]
        public string CPrincipal { get; set; }
        /// <summary>
        /// 施工单位负责人电话
        /// </summary>
        /// <returns></returns>
        [Column("CPHONE")]
        public string CPhone { get; set; }
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
        /// <summary>
        /// 财政配套资金或清洁能源供热补贴申请额度（元）
        /// </summary>
        /// <returns></returns>
        [Column("FISCALCAPITAL")]
        public decimal? FiscalCapital { get; set; }
        /// <summary>
        /// 已到位资金(元)
        /// </summary>
        /// <returns></returns>
        [Column("ARRIVECAPITAL")]
        public decimal? ArriveCapital { get; set; }
        /// <summary>
        /// 项目审计年份
        /// </summary>
        /// <returns></returns>
        [Column("AUDITYEAR")]
        public string AuditYear { get; set; }
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

