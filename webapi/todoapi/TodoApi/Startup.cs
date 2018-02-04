using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;
using Swashbuckle.AspNetCore.Swagger;
using GraphQL;

namespace TodoApi
{
    /// <summary>
    /// Startup class - lines up config / hosting etc
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Startup function - sets up config/settings and base path
        /// </summary>
        /// <param name="env"></param>
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        /// <summary>
        /// configuration
        /// </summary>
        public IConfigurationRoot Configuration { get; }

        /// <summary>
        ///    // This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            // define todo db context
            services.AddDbContext<TodoContext>(opt => opt.UseInMemoryDatabase("TodoList"));

            // Add framework services.
            services.AddMvc();

            // Add Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });

            // Add GraphQL - simple db architecture model
            // services.AddSingleton<TodoContext>(); - may not be required - todo data already done using EMF objects
            services.AddSingleton<TodoQuery>();
            services.AddSingleton<TodoMutation>();
            services.AddSingleton<ISchema>(
                s => new TodoSchema(new FuncDependencyResolver(type => (GraphType)s.GetService(type))));

        }

        /// <summary>
        ///    This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

           app.UseMvc();

            // add GraphQL middleware model
            app.UseMiddleware<GraphQLMiddleware>(new GraphQLSettings
            {
                BuildUserContext = ctx => new GraphQLUserContext
                {
                    User = ctx.User
                }
            });

        }
    }
}
