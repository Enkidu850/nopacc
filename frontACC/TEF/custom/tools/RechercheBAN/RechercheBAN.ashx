<%@ WebHandler Language="C#" Class="RechercheBAN" %>
using System;
using System.Text;
using System.Web;
using Newtonsoft.Json.Linq;

    /*
    Cette recherche utilise l'api BAN francaise : https://api.gouv.fr/les-api/base-adresse-nationale
    Pour mettre en place la recherche sur Skyline, il faut modifier le fichier SGServices.json dans le repertoire SG
    
  "AddressSearch": [
    {
      "Name": "Address Search",
      "Tooltip": "",
      "Description": "",
      "Value": "https://cloud.skylineglobe.com/AddressSearch/AddressSearch.ashx?" => remplacer par l'url pour pointer sur ce fichier RechercheBAN.ashx
    }
  ]



    */

public class RechercheBAN : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        string url = "https://api-adresse.data.gouv.fr/search/?q=";
        StringBuilder sb = new StringBuilder();
        string q = "";
        string lat = "";
        string lon = "";
        string callback = "";
        if (context.Request.QueryString["callback"] != null)
        {
            callback = context.Request.QueryString["callback"];
        }
        if (context.Request.QueryString["q"] != null)
        {
            q = context.Request.QueryString["q"];
        }
        if (context.Request.QueryString["lat"] != null)
        {
            lat = context.Request.QueryString["lat"];
        }
        if (context.Request.QueryString["lon"] != null)
        {
            lon = context.Request.QueryString["lon"];
        }
        string tmp = "";
        if (q != "")
        {
            using (var webClient = new System.Net.WebClient())
            {
                System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12 | System.Net.SecurityProtocolType.Ssl3;
                webClient.Encoding = Encoding.UTF8;
                url += q + (lat != "" && lon != "" ? "&lat=" + lat + "&lon=" + lon : "");
                var json = webClient.DownloadString(url);
                tmp = json;
                //sb.Append(json);
                dynamic jsonObj = JObject.Parse(json);
                bool isFirst = true;
                foreach( var item in jsonObj["features"] ) {
                    if (isFirst)
                    {
                        isFirst = false;
                    }
                    else
                    {
                        sb.Append(",");
                    }
                    sb.Append("{ \"Description\":\"" + item["properties"]["name"].Value +
                        " " + item["properties"]["postcode"].Value +
                        (item["properties"]["name"].Value!=item["properties"]["city"].Value?" " + item["properties"]["city"].Value + ",":",") +
                        " " + item["properties"]["context"].Value + "\",");
                    sb.Append(" \"Lat\":\"" + item["geometry"]["coordinates"][1].Value.ToString().Replace(",",".") + "\",");
                    sb.Append(" \"Lon\":\"" + item["geometry"]["coordinates"][0].Value.ToString().Replace(",",".") + "\",");
                    sb.Append(" \"Name\":\"" + item["properties"]["name"].Value + "\"}");
                }
                // Now parse with JSON.Net
            }
        }
        if (callback == "")
        {
            context.Response.ContentType = "application/json";
            context.Response.Write("[");
        }
        else
        {
            context.Response.ContentType = "text/plain; charset=utf-8";
            context.Response.Write(callback + "([");

        }
        context.Response.Write(sb.ToString());
        context.Response.Write("]");
            
        if (callback != "")
        {
            context.Response.Write(");");
        }
        context.Response.Write(Environment.NewLine + Environment.NewLine + Environment.NewLine);
        //context.Response.Write(tmp);
    }

    public bool IsReusable
    {
        get
        {
            return true;
        }
    }

}