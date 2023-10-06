//const baseUrl = "http://localhost:8000/api"
const baseUrl = "https://puzzled-jay-stockings.cyclic.cloud/api/"

const downloadProject = () => {
    const url = `${baseUrl}/projects`
    const data = fetch(url).then(data => data.json())
    return data
}

const downloadProjectByID = (id) => {
    const url = `${baseUrl}/project/${id}`
    const data = fetch(url).then(data => data.json())
    return data
}

export {downloadProject, downloadProjectByID}