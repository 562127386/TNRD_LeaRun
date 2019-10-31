using Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project;
using System.Data.Entity.ModelConfiguration;

namespace  Learun.Application.Mapping
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-10-25 18:02
    /// 描 述：项目收入
    /// </summary>
    public class TNRD_Project_IncomeMap : EntityTypeConfiguration<TNRD_Project_IncomeEntity>
    {
        public TNRD_Project_IncomeMap()
        {
            #region 表、主键
            //表
            this.ToTable("TNRD_PROJECT_INCOME");
            //主键
            this.HasKey(t => t.Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

