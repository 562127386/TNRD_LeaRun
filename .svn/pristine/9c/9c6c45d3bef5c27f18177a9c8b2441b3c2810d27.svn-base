using Learun.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learun.Application.TwoDevelopment.LR_Common
{
    public class CommonBLL
    {
        private CommonService service = new CommonService();

        #region 根据sql获取select数据
        public string LoadSelectData(string sql)
        {
            try
            {
                return service.LoadSelectData(sql);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowBusinessException(ex);
                }
            }
        }
        #endregion

        #region 根据sql获取formdata数据
        public string LoadFormDataBySpeciName(string sqldata)
        {
            return service.LoadFormDataBySpeciName(sqldata);
        }
        #endregion
    }
}
