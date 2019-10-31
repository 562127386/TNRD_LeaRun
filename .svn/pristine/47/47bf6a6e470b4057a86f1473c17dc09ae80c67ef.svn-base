using Learun.DataBase.Repository;
using Learun.Util;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Learun.Application.OA.Gantt
{
    /// <summary>
    /// 版 本 Learun-ADMS V6.1.6.0 力软敏捷开发框架
    /// Copyright (c) 2013-2017 上海力软信息技术有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2018.06.20
    /// 描 述：项目计划
    /// </summary>
    public class JQueryGanttService : RepositoryFactory
    {
        #region 获取数据
        /// <summary>
        /// 获取甘特图数据
        /// </summary>
        /// <param name="queryJson">关键词</param>
        /// <returns></returns>
        public IEnumerable<JQueryGanttEntity> GetList(string strWhere)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT * FROM JQueryGantt t where 1=1 ");
                strSql.Append(strWhere);
                strSql.Append(" order by level,code ");
                return this.BaseRepository().FindList<JQueryGanttEntity>(strSql.ToString());
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
        /// 获取甘特图实体
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        public JQueryGanttEntity GetEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<JQueryGanttEntity>(keyValue);
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
        /// 删除
        /// </summary>
        /// <param name="keyValue">主键</param>
        public void DeleteEntity(string keyValue)
        {
            try
            {
                this.BaseRepository().Delete<JQueryGanttEntity>(t => t.id == keyValue);
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
        /// 保存（新增、修改）
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <param name="entity">邮件发送实体</param>
        /// <returns></returns>
        public void SaveEntity(string keyValue, JQueryGanttEntity entity)
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
        /// <summary>
        /// 保存项目甘特图数据
        /// </summary>
        /// <param name="prj"></param>
        public void AddProjectGantt(string prj)
        {
            IRepository db = this.BaseRepository().BeginTrans();
            try
            {
                JObject jobj = prj.ToJObject();
                var taskJson = jobj.GetValue("tasks").ToString().Replace("\r\n", "").Replace(" ", "").Replace("[]", "\"\"");
                List<JQueryGanttEntity> gantt_list = taskJson.ToList<JQueryGanttEntity>();
                string ProjectId = gantt_list[0].ProjectId;
                //先删除后添加
                db.Delete<JQueryGanttEntity>(u => u.ProjectId.Equals(ProjectId));
                foreach (var item in gantt_list)
                {
                    JQueryGanttEntity ganttEntity = new JQueryGanttEntity();
                    ganttEntity.id = Guid.NewGuid().ToString();
                    ganttEntity.name = item.name;
                    ganttEntity.ProjectId = ProjectId;
                    ganttEntity.progress = item.progress;
                    ganttEntity.progressByWorklog = item.progressByWorklog;
                    ganttEntity.relevance = item.relevance;
                    ganttEntity.type = item.type;
                    ganttEntity.typeId = item.typeId;
                    ganttEntity.description = item.description;
                    ganttEntity.code = item.code;
                    ganttEntity.level = item.level;
                    ganttEntity.status = item.status;
                    ganttEntity.depends = item.depends;
                    ganttEntity.canWrite = item.canWrite;
                    ganttEntity.start = item.start;
                    ganttEntity.duration = item.duration;
                    ganttEntity.end = item.end;
                    ganttEntity.startIsMilestone = item.startIsMilestone;
                    ganttEntity.endIsMilestone = item.endIsMilestone;
                    ganttEntity.collapsed = item.collapsed;
                    ganttEntity.hasChild = item.hasChild;
                    ganttEntity.assigs = item.assigs;
                    //ganttEntity.createdate = DateTime.Now;
                    db.Insert<JQueryGanttEntity>(ganttEntity);
                }
                db.Commit();
            }
            catch (Exception ex)
            {
                db.Rollback();
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