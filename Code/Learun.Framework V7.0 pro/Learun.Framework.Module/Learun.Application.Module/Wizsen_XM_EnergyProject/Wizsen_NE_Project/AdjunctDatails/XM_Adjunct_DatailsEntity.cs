using Learun.Util;
using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project

{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:22
    /// 描 述：附件信息表
    /// </summary>
    public class XM_Adjunct_DatailsEntity 
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
        /// 附件流程节点
        /// </summary>
        /// <returns></returns>
        [Column("PROCESS")]
        public string Process { get; set; }
        /// <summary>
        /// 关联编号
        /// </summary>
        /// <returns></returns>
        [Column("ORDERNO")]
        public string OrderNo { get; set; }
        /// <summary>
        /// 附件名称
        /// </summary>
        /// <returns></returns>
        [Column("ADJUNCTNAME")]
        public string AdjunctName { get; set; }
        /// <summary>
        /// 附件名称
        /// </summary>
        /// <returns></returns>
        [Column("ADJUNCTTYPE")]
        public string AdjunctType { get; set; }
        /// <summary>
        /// 附件路径
        /// </summary>
        /// <returns></returns>
        [Column("URL")]
        public string Url { get; set; }
        /// <summary>
        /// 上传时间
        /// </summary>
        /// <returns></returns>
        [Column("UPLOADTIME")]
        public DateTime? UploadTime { get; set; }
        /// <summary>
        /// 上传时间
        /// </summary>
        /// <returns></returns>
        [Column("FILETYPE")]
        public string FileType { get; set; }
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

