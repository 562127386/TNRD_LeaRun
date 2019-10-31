using Learun.Util;
using System.Data;
using System.Collections.Generic;

namespace Wizsen_TNRD_EnergyProject.Wizsen_TNRD_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-02-25 14:30
    /// 描 述：Wizsen_TNRD_Pact
    /// </summary>
    public interface Wizsen_TNRD_PactIBLL
    {
        #region 获取数据

        /// <summary>
        /// 获取页面显示列表数据
        /// <summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns></returns>
        //IEnumerable<TNRD_Pact_DatailsEntity> GetPageList(Pagination pagination, string queryJson);
        DataTable GetPageList(Pagination pagination, string queryJson);
        //IEnumerable<TNRD_Pact_DatailsEntity> GetList(string queryJson);
        DataTable GetList(string queryJson);

        List<TreeModel> GetProjectTree();
        /// <summary>
        /// 获取TNRD_Facility_Base表数据
        /// <summary>
        /// <returns></returns>
        IEnumerable<TNRD_Facility_BaseEntity> GetTNRD_Facility_BaseList(string keyValue);
        /// <summary>
        /// 获取TNRD_Pact_Datails表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        TNRD_Pact_DatailsEntity GetTNRD_Pact_DatailsEntity(string keyValue);
        /// <summary>
        /// 获取TNRD_Facility_Base表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        TNRD_Facility_BaseEntity GetTNRD_Facility_BaseEntity(string keyValue);
        #endregion

        #region 提交数据

        /// <summary>
        /// 删除实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        void DeleteEntity(string keyValue);
        /// <summary>
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        void SaveEntity(string keyValue, TNRD_Pact_DatailsEntity entity);
        #endregion

    }
}
