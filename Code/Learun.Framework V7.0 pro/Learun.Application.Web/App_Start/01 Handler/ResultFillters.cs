using Learun.Application.Organization;
using Learun.DataBase.Repository;
using Learun.Util;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Learun.Application.Web
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2017.03.08
    /// 描 述：控制器执行后执行
    /// </summary>
    public class ResultFillters : FilterAttribute, IResultFilter
    {
        /// <summary>
        /// 执行完action后跳转后执行
        /// </summary>
        /// <param name="filterContext"></param>
        public void OnResultExecuted(ResultExecutedContext filterContext)
        {
            if (filterContext.Result is ViewResult)
            {// 如果返回结果是视图
                var viewResult = (ViewResult)filterContext.Result;
                string html = string.Empty;
                IView view = ViewEngines.Engines.FindView(filterContext, viewResult.ViewName, string.Empty).View;
                using (System.IO.StringWriter sw = new System.IO.StringWriter())
                {
                    ViewContext vc = new ViewContext(filterContext, view, viewResult.ViewData, viewResult.TempData, sw);
                    vc.View.Render(vc, sw);
                    html = sw.ToString();
                }
                ContentResult Content = new ContentResult();
                Content.Content = html;
                filterContext.Result = Content;
            }
        }
        /// <summary>
        /// 执行完action后跳转前执行
        /// </summary>
        /// <param name="filterContext"></param>
        public void OnResultExecuting(ResultExecutingContext filterContext)
        {

            //string companyId = LoginUserInfo.Get().companyId;
            //List<CompanyEntity> companyList = (List<CompanyEntity>)new RepositoryFactory().BaseRepository().FindList<CompanyEntity>();
            //List<string> res = new List<string>();
            //string parNode = LoadParNode(companyId, companyList);
            //ContentResult contentData = (ContentResult)filterContext.Result;
            //List<string> list_origin = contentData.Content.ToList<string>();
            //List<CompanyEntity> list_final = new List<CompanyEntity>();
            ////foreach (var item in list_origin)
            ////{
            ////    var item_parNode = LoadParNode(item.F_CompanyId, companyList);
            ////    if (item_parNode.Equals(parNode))
            ////    {
            ////        list_final.Add(item);
            ////    }
            ////}
            //contentData.Content = list_final.ToString();
        }
        //获取最顶层公司Id
        public string LoadParNode(string companyId, List<CompanyEntity> companyList)
        {
            string parNode = string.Empty;
            foreach (var item in companyList)
            {
                if (item.F_CompanyId == companyId)
                {
                    if (item.F_ParentId.Length > 5)
                    {
                        return LoadParNode(item.F_ParentId, companyList);
                    }
                    else
                    {
                        return item.F_CompanyId;
                    }

                }

            }
            return parNode;
        }
    }
}