using Npgsql;
using Microsoft.EntityFrameworkCore;
using Backend.Data; // for AppDbContext
using Npgsql.EntityFrameworkCore.PostgreSQL; // for UseNpgsql

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS for frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Entity Framework Core, using Npgsql(Postgres)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();
app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();

// --- Test Supabase Connection ---
try
{
    using var conn = new NpgsqlConnection(builder.Configuration.GetConnectionString("DefaultConnection"));
    conn.Open();
    Console.WriteLine("✅ Connected to Supabase successfully!");
}
catch (Exception ex)
{
    Console.WriteLine("❌ Failed to connect to Supabase:");
    Console.WriteLine(ex.Message);
}
// --- End Test ---

app.Run();

