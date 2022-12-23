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
    <button type="button" class="projects" id="btn-projects-current"><svg class="text-underline" height="20" width="50"><line x1="0" y1="14" x2="45" y2="14" style="stroke:rgb(255,0,0);stroke-width:2" /></svg><span>Current</span></button>
    <button type="button" class="projects" id="btn-projects-done"><span>Done<span></button>
</nav>
<ul id="projects-list"></ul>`;
    document.querySelector("svg.text-underline").addEventListener("hover", () => {
        let line = document.querySelector("svg.text-underline line");
        console.log(line);
    });
    PrepareButtons();
}
async function LoadEmptyJSON()
{
    const projects = await fetch('https://localhost:7161/empty', {mode: 'no-cors'}).then(response => response.json());
    console.log(projects);
}
window.addEventListener("error", function(event) {
    console.log(event);
});
window.addEventListener("load", function() {
    UploadMainPage();
    document.querySelector("#btn-projects-current").click();
});