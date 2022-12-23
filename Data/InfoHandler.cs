using System.IO;
public class InfoHandler
{
    public static string GetJSONText(string path)
    { 
        string currentProjects = File.ReadAllText(path);
        return currentProjects;
    }
}