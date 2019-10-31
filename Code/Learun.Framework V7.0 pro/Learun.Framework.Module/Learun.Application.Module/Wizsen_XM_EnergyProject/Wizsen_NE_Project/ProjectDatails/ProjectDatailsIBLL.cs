using Learun.Util;
using System.Data;
using System.Collections.Generic;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 17:01
    /// 描 述：项目管理
    /// </summary>
    public interface ProjectDatailsIBLL
    {
        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        DataTable GetList( string queryJson );
        /// <summary>
        /// 获取列表分页数据
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        IEnumerable<XM_Project_DatailsEntity> GetPageList(Pagination pagination, string queryJson);
        /// <summary>
        /// 获取实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        XM_Project_DatailsEntity GetEntity(string keyValue);
        /// <summary>
        /// 获取项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        DataTable GetProjectAmount(string queryJson);
        /// <summary>
        /// 获取附件报表
        /// </summary>
        /// <param name="queryJson"></param>
        /// <returns></returns>
        DataTable GetAdjunctReport(string queryJson);
        /// <summary>
        /// 获取主项目金额合计
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        DataTable GetProjectBaseAmount(string queryJson);
        /// <summary>
        /// 项目国内配套合同付款金额汇总
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        DataTable GetAssSum(string keyValue);
        /// <summary> 
        /// 获取XM_Project_Details_Estimate表数据 
        /// <summary> 
        /// <returns></returns> 
        IEnumerable<XM_Project_Details_EstimateEntity> GetXM_Project_Details_EstimateList(string keyValue);
        /// <summary> 
        /// 获取XM_Project_Datails表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        XM_Project_DatailsEntity GetXM_Project_DatailsEntity(string keyValue);
        /// <summary> 
        /// 获取XM_Project_Details_Estimate表实体数据 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        XM_Project_Details_EstimateEntity GetXM_Project_Details_EstimateEntity(string keyValue);
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
        void SaveEntity(string keyValue, XM_Project_DatailsEntity entity);
        /// <summary> 
        /// 保存实体数据（新增、修改） 
        /// <param name="keyValue">主键</param> 
        /// <summary> 
        /// <returns></returns> 
        void SaveEntity2(string keyValue, XM_Project_DatailsEntity entity, List<XM_Project_Details_EstimateEntity> xM_Project_Details_EstimateList);
        #endregion

    }
}
