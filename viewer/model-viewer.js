import { projects } from "./projects.js";

// Get the current project ID from the url parameter
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const CurrentProjectID = url.searchParams.get("id");

const CurrentProject = projects.find(
  (project) => project.id === CurrentProjectID
);

const iframe = document.getElementById("model-iframe");
iframe.src = CurrentProject.url;
