using Learun.Util;
using System.Data;
using System.Collections.Generic;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:13
    /// 描 述：采购设备合同
    /// </summary>
    public interface PactPurchaseIBLL
    {
        #region 获取数据 

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        DataTable GetList(string queryJson);
        /// <summary> 
        /// 获取页面显示列表数据 
        /// <summary> 
        /// <param name="queryJson">查询参数</param> 
        /// <returns></returns> 
        IEnumerable<XM_Pact_PurchaseEntity> GetPageList(Pagination pagination, string queryJson);
        /// <summary> 
        /// 获取XM_Facility_Base表数据 
        /// <summary> 
        /// <returns></returns> 
        IEnumerable<XM_Facility_BaseEntity> GetXM_Facility_BaseList(string keyValue);
        /// <summary> 
        /// 获取XM_Pact_Purchase表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        XM_Pact_PurchaseEntity GetXM_Pact_PurchaseEntity(string keyValue);
        /// <summary> 
        /// 获取XM_Facility_Base表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        XM_Facility_BaseEntity GetXM_Facility_BaseEntity(string keyValue);
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
        void SaveEntity(string keyValue, XM_Pact_PurchaseEntity entity, List<XM_Facility_BaseEntity> xM_Facility_BaseList);
        #endregion

    }
}
