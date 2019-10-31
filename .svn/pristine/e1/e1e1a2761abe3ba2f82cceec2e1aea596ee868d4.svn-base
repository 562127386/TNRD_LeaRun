using System.Web.Mvc;

namespace Learun.Application.Web.Areas.Wizsen_TNRD_Project
{
    public class Wizsen_TNRD_ProjectAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Wizsen_TNRD_Project";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Wizsen_TNRD_Project_default",
                "Wizsen_TNRD_Project/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}