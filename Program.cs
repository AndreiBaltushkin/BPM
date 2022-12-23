var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => Results.Redirect("/bpm.html"));
app.MapGet("/bpm-main-info-current", () => InfoHandler.GetJSONText(@"Data/projects-current.json"));
app.MapGet("/bpm-main-info-done", () => InfoHandler.GetJSONText(@"Data/projects-done.json"));
app.MapGet("/empty", () => InfoHandler.GetJSONText(@"Data/empty.json"));

app.UseStaticFiles();

app.Run();
