using Learun.DataBase.Repository;
using Learun.Util;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learun.Application.TwoDevelopment.LR_Common
{
    class CommonService : RepositoryFactory
    {
        #region 根据sql获取select数据
        public string LoadSelectData(string sql)
        {
            try
            {
                DataTable dt = this.BaseRepository().FindTable(sql);
                List<String> liscols = new List<string>();
                foreach (DataColumn col in dt.Columns)
                {
                    liscols.Add(col.ColumnName);
                }
                return ToCombobox(dt, liscols);
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

        private string ToCombobox(DataTable dt, List<String> outField)
        {
            StringBuilder sb = new StringBuilder();

            int count = dt.Rows.Count;
            if (count > 0)
            {
                sb.Append("[");
                foreach (DataRow dr in dt.Rows)
                {
                    sb.Append("{");
                    foreach (string s in outField)
                    {
                        sb.Append("\"" + s + "\":\"" + dr[s].ToString() + "\",");
                    }
                    sb.Remove(sb.Length - 1, 1);
                    sb.Append("},");
                }
                sb.Remove(sb.Length - 1, 1);
                sb.Append("]");
            }
            else
            {
                sb.Append("[]");
            }
            return sb.ToString();
        }
        #endregion

        #region 根据sql语句获取formdata数据
        public string LoadFormDataBySpeciName(string sqldata)
        {
            try
            {
                DataTable dt = this.BaseRepository().FindTable(sqldata);
                string json= dt.ToJson();
                return json;
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
