//const baseUrl = "http://localhost:8000/api"
const baseUrl = "https://nice-pink-tick-garb.cyclic.cloud/api/"

const downloadProject = () => {
    const url = `${baseUrl}/projects`
    const data = fetch(url).then(data => data.json())
    console.log("Projects :: ");
    console.log(data);
    return data
}

const downloadProjectByID = (id) => {
    const url = `${baseUrl}/project/${id}`
    const data = fetch(url).then(data => data.json())
    console.log("Project by ID :: ");
    console.log(data);
    return data
}

export {downloadProject, downloadProjectByID}