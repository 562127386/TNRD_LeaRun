using System.Web.Mvc;

namespace Learun.Application.Web.Areas.Wizsen_NE_Project
{
    public class Wizsen_NE_ProjectAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Wizsen_NE_Project";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Wizsen_NE_Project_default",
                "Wizsen_NE_Project/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}