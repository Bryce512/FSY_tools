using System.Net;
using fsyTools.Data;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
//builder.Services.AddDbContext<fsyDbContext>(options =>
//    options.UseSqlite("Data Source=FSY.sqlite"));
//// builder.Services.AddDbContext<fsyDbContext>(options =>
////     options.UseSqlite("Data Source=FSY_DB.db"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<FsyDbContext>(options => options.UseSqlite(builder.Configuration.GetConnectionString("FSYConnection")));

builder.Services.AddCors();

var app = builder.Build();

// Because we do not have data in the database yet, I have this to test if the connection is working

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<FsyDbContext>();

    try
    {
        dbContext.Database.OpenConnection();
        Console.WriteLine("Database connection successful!");
        dbContext.Database.CloseConnection();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database connection failed: {ex.Message}");
    }
}

// end of db test clause



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
