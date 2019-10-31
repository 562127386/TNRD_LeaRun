using Learun.Application.Base.SystemModule;
using Learun.Application.TwoDevelopment.LR_Common;
using Learun.Cache.Base;
using Learun.Cache.Factory;
using Learun.Util;
using Learun.Util.Operat;
using System.Web.Mvc;

namespace Learun.Application.Web.Controllers
{
    /// <summary>
    /// 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架
    /// Copyright (c) 2013-2018 上海力软信息技术有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2017.03.09
    /// 描 述：主页控制器
    /// </summary>
    public class HomeController : MvcControllerBase
    {
        #region 视图功能
        /// <summary>
        /// 初始化页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Index()
        {
            string learn_UItheme = WebHelper.GetCookie("Learn_ADMS_V6.1_UItheme");
            switch (learn_UItheme)
            {
                //case "1":
                //    return View("AdminDefault");      // 经典版本
                //case "2":
                //    return View("AdminAccordion");    // 手风琴版本
                //case "3":
                //    return View("AdminWindos");       // Windos版本
                //case "4":
                //    return View("AdminTop");          // 顶部菜单版本
                default:
                    return View("AdminTop");      // 经典版本
            }
        }
        /// <summary>
        /// 首页桌面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AdminDesktop()
        {
            //return View("AdminDesktopLeader");
            //return View("AdminDesktopTemp");
            var user = LoginUserInfo.Get();
            if (user.companyId == "8f84dbe4-3285-40a2-8977-b917fc40409b")//青岛能源
            {
                return View("AdminDesktopLeader");
            }//泰能热点
            else if(user.companyId == "2323098c-e97b-4800-be05-ca6e2d311cf9")
            {
                var sql = "select F_ItemName as name,F_ItemValue as value from dbo.LR_Base_DataItemDetail t where exists(select 1 from dbo.LR_Base_DataItem where t.F_ItemId=F_ItemId and F_ItemCode='Year') ";
                CommonBLL bll = new CommonBLL();
                string jsonData = bll.LoadSelectData(sql);
                ViewBag.yearDt = jsonData.ToTable();

                return View("TNRDDesktopTemp");
            }
            else
            {
                return View("AdminDesktopTemp");
            }

        }
        /// <summary>
        /// 首页模板
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AdminDesktopTemp()
        {
            return View();
        }
        #endregion

        private ICache cache = CacheFactory.CaChe();

        #region 清空缓存
        /// <summary>
        /// 清空缓存
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [AjaxOnly]
        public ActionResult ClearRedis()
        {
            for (int i = 0; i < 16; i++)
            {
                cache.RemoveAll(i);
            }
            return Success("清空成功");
        }
        #endregion

        /// <summary>
        /// 访问功能
        /// </summary>
        /// <param name="moduleId">功能Id</param>
        /// <param name="moduleName">功能模块</param>
        /// <param name="moduleUrl">访问路径</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult VisitModule(string moduleName, string moduleUrl)
        {
            UserInfo userInfo = LoginUserInfo.Get();
            LogEntity logEntity = new LogEntity();
            logEntity.F_CategoryId = 2;
            logEntity.F_OperateTypeId = ((int)OperationType.Visit).ToString();
            logEntity.F_OperateType = EnumAttribute.GetDescription(OperationType.Visit);
            logEntity.F_OperateAccount = userInfo.account;
            logEntity.F_OperateUserId = userInfo.userId;
            logEntity.F_Module = moduleName;
            logEntity.F_ExecuteResult = 1;
            logEntity.F_ExecuteResultJson = "访问地址：" + moduleUrl;
            logEntity.WriteLog();
            return Success("ok");
        }
    }
}