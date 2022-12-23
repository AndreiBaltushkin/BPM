// file creator taken here: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser#:~:text=Try%20creating%20two%20functions

//another way of getting an API data without nesting then-s and catch-es is async():
// const loadProjects = async() => {
async function LoadProjects(projectsPath) {
    try {
        document.querySelector("#projects-list").innerHTML = "";
        const projects = await fetch(projectsPath, {mode: 'no-cors'}).then(response => response.json())
        console.log(projects);
        // const projects = JSON.parse(data);
        for (let i = 0; i < Object.keys(projects.projects).length; i ++)
        {
            let projectAtI = document.createElement("li");
            projectAtI.innerText = projects.projects[i].name + " | " + projects.projects[i].people;
            document.querySelector("#projects-list").appendChild(projectAtI);
        }
    }
    catch (e) {
        console.log("Error", e)
    }
}
function PrepareButtons()
{
    document.querySelector("#btn-projects-current").addEventListener("click", function () {LoadProjects("https://localhost:7161/bpm-main-info-current");});
    document.querySelector("#btn-projects-done").addEventListener("click", function() {LoadProjects("https://localhost:7161/bpm-main-info-done");});
    // document.querySelector("#btn-projects-current").addEventListener("click", function () {LoadProjects("Data/projects-current.json");});
    // document.querySelector("#btn-projects-done").addEventListener("click", function () {LoadProjects("Data/projects-done.json");});
    
}
function UploadMainPage()
{
    document.querySelector("main.major-main").innerHTML = `<nav id="projects-nav" class="projects">
    <button type="button" class="projects" id="btn-projects-current">Current</button>
    <button type="button" class="projects" id="btn-projects-done">Done</button>
</nav>
<ul id="projects-list"></ul>`;
    PrepareButtons();
}
async function LoadEmptyJSON()
{
    const projects = await fetch('https://localhost:7161/empty', {mode: 'no-cors'}).then(response => response.json());
    console.log(projects);
}
//localStorage.setItem("currentProjectsPath", "data/projects-current.json");
//localStorage.setItem("doneProjectsPath", "data/projects-done.json");
window.addEventListener("error", function(event) {
    console.log(event);
});
window.addEventListener("load", function() {
    UploadMainPage();
    // LoadEmptyJSON();
    this.document.querySelector("#btn-projects-current").click();
});