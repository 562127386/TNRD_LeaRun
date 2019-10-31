using Dapper;
using Learun.Application.Base.SystemModule;
using Learun.DataBase.Repository;
using Learun.Util;
using Learun.Util.Operat;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Wizsen_XM_EnergyProject.Wizsen_NE_Project
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创 建：超级管理员
    /// 日 期：2019-01-14 16:51
    /// 描 述：项目层级管理
    /// </summary>
    public class ProjectBaseService : RepositoryFactory
    {
        #region 构造函数和属性

        private string fieldSql;
        public ProjectBaseService()
        {
            fieldSql=@"
                t.Id,
                t.BindId,
                t.Code,
                t.Name,
                t.ParentCode,
                t.ParentName,
                t.BeginDate,
                t.EndDate,
                t.DEC,
                t.Remark,
                t.CreateDate,
                t.CreateUserId,
                t.CreateUserName,
                t.UpdateDate,
                t.UpdateUserId,
                t.UpdateUserName
            ";
        }

         private CodeRuleIBLL codeRuleIBLL = new CodeRuleBLL();

        #endregion

        #region 获取数据

        /// <summary>
        /// 获取列表数据
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_BaseEntity> GetList( string queryJson )
        {
            try
            {
                //参考写法
                //var queryParam = queryJson.ToJObject();
                // 虚拟参数
                //var dp = new DynamicParameters(new { });
                //dp.Add("startTime", queryParam["StartTime"].ToDate(), DbType.DateTime);
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Project_Base t where ParentName <> '1' ");
                if (!string.IsNullOrEmpty(queryJson))
                {
                    strSql.Append(queryJson);
                }
                //strSql.Append(" ORDER BY t.F_AreaCode ");
                return this.BaseRepository().FindList<XM_Project_BaseEntity>(strSql.ToString());
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 获取列表分页数据
        /// <param name="pagination">分页参数</param>
        /// <summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_BaseEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var queryParam = queryJson.ToJObject();
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(fieldSql);
                strSql.Append(" FROM XM_Project_Base t WHERE ParentName <> '1'");
                //查询条件
                if (!queryParam["keyword"].IsEmpty())
                {
                    string keyord = queryParam["keyword"].ToString();
                    strSql.Append(" AND (ParentCode like '%" + keyord + "%' " +
                                    "or  ParentName like '%" + keyord + "%' " +
                                    "or  Code like '%" + keyord + "%'" +
                                    "or  Name like '%" + keyord + "%') ");
                }
                return this.BaseRepository().FindList<XM_Project_BaseEntity>(strSql.ToString(), pagination);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 项目树形列表
        /// </summary>
        /// <returns></returns>
        public IEnumerable<XM_Project_BaseEntity> GetProjectTree()
        {
            try
            {
                StringBuilder strSql = new StringBuilder();
                strSql.Append("SELECT *   FROM   View_XM_Project WHERE  1=1 and ParentName <> '1' ");
                return this.BaseRepository().FindList<XM_Project_BaseEntity>(strSql.ToString());
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 获取实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public XM_Project_BaseEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<XM_Project_BaseEntity>(keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        #endregion

        #region 提交数据

        /// <summary>
        /// 删除实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void DeleteEntity(string keyValue)
        {
            try
            {
                this.BaseRepository().Delete<XM_Project_BaseEntity>(t=>t.Id == keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void SaveEntity(string keyValue, XM_Project_BaseEntity entity)
        {
            try
            {
                if (!string.IsNullOrEmpty(keyValue))
                {
                    entity.Modify(keyValue);
                    this.BaseRepository().Update(entity);
                }
                else
                {
                    entity.Create();
                    if (string.IsNullOrEmpty(entity.ParentName))
                    {
                        entity.ParentName = "0";
                        entity.Code = codeRuleIBLL.GetBillCode("10009");
                    }
                    else
                    {
                        entity.Code = codeRuleIBLL.GetBillCode("10008");
                    }
                    this.BaseRepository().Insert(entity);
                }
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        #endregion

    }
}
