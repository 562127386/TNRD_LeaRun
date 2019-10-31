using Learun.Application.Organization;
using Learun.DataBase.Repository;
using Learun.Util;
using Learun.Util.Operat;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Learun.Application.Web.Areas.LR_OrganizationModule.Controllers
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2017.03.09
    /// 描 述：公司管理
    /// </summary>
    public class CompanyController : MvcControllerBase
    {
        private CompanyIBLL companyIBLL = new CompanyBLL();

        #region 获取视图
        /// <summary>
        /// 主页
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// 表单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Form()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 获取公司列表信息
        /// </summary>
        /// <param name="keyword">查询关键字</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        //[ResultFillters]
        public ActionResult GetList(string keyword)
        {
            string companyId = LoginUserInfo.Get().companyId;
            var data = companyIBLL.GetList(keyword);
            List<CompanyEntity> list_final = new List<CompanyEntity>();
            List<CompanyEntity> companyList = (List<CompanyEntity>)new RepositoryFactory().BaseRepository().FindList<CompanyEntity>();
            string parNode = LoadParNode(companyId, companyList);
            if (LoginUserInfo.Get().isSystem)
            {
                return Success(data);
            }
            foreach (var item in data)
            {
                var item_parNode = LoadParNode(item.F_CompanyId, companyList);
                if (item_parNode.Equals(parNode))
                {
                    list_final.Add(item);
                }
            }
            return Success(list_final);
        }
        /// <summary>
        /// 获取树形数据
        /// </summary>
        /// <param name="parentId">父级id</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetTree(string parentId)
        {
            var data = companyIBLL.GetTree(parentId);
            List<CompanyEntity> companyList = (List<CompanyEntity>)new RepositoryFactory().BaseRepository().FindList<CompanyEntity>();
            string companyId = LoginUserInfo.Get().companyId;
            string parNode = LoadParNode(companyId, companyList);
            List<TreeModel> list_tree = new List<TreeModel>();
            if (LoginUserInfo.Get().isSystem)
            {
                return Success(data);
            }
            foreach (var item in data)
            {
                if (item.value == parNode)
                {
                    list_tree.Add(item);
                }
            }
            return Success(list_tree);
        }
        /// <summary>
        /// 获取映射数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetMap(string ver)
        {
            var data = companyIBLL.GetModelMap();
            string md5 = Md5Helper.Encrypt(data.ToJson(), 32);
            if (md5 == ver)
            {
                return Success("no update");
            }
            else
            {
                var jsondata = new
                {
                    data = data,
                    ver = md5
                };
                return Success(jsondata);
            }
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 保存表单数据
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <param name="entity">实体数据</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        [AjaxOnly]
        public ActionResult SaveForm(string keyValue, CompanyEntity entity)
        {
            companyIBLL.SaveEntity(keyValue, entity);
            return Success("保存成功！", "公司信息", string.IsNullOrEmpty(keyValue) ? OperationType.Create : OperationType.Update, entity.F_CompanyId, entity.ToJson());
        }
        /// <summary>
        /// 删除表单数据
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        [HttpPost]
        [AjaxOnly]
        public ActionResult DeleteForm(string keyValue)
        {
            companyIBLL.VirtualDelete(keyValue);
            return Success("删除成功！", "公司信息", OperationType.Delete, keyValue, "");
        }
        #endregion

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