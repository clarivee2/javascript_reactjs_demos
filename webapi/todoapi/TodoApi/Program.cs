using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace TodoApi
{
    /// <summary>
    /// Main Program - setup contexts and hosting - Uses Kestrel
    /// </summary>
    /// 
    public class Program
    {
        /// <summary>
        /// setup hosting etc - trigger startup
        /// </summary>
        /// <param name="args"></param>
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
