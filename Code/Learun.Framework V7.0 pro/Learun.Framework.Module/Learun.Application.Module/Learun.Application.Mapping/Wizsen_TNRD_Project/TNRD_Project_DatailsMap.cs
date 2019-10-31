using Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project;
using System.Data.Entity.ModelConfiguration;

namespace  Learun.Application.Mapping
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-23 17:26
    /// 描 述：项目管理
    /// </summary>
    public class TNRD_Project_DatailsMap : EntityTypeConfiguration<TNRD_Project_DatailsEntity>
    {
        public TNRD_Project_DatailsMap()
        {
            #region 表、主键
            //表
            this.ToTable("TNRD_PROJECT_DATAILS");
            //主键
            this.HasKey(t => t.Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

