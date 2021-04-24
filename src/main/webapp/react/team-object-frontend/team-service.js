const BASE_URL = "http://localhost:8080/api/teams"

export const findAllTeams = () => {
    return fetch(BASE_URL).then(
        response => response.json()
    )
}

export const findTeamById = (id) => {
    return fetch(`${BASE_URL}/${id}`, )
        .then(response => response.json())
}

export const deleteTeam = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createTeam = (employee) => {
    return fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {"content-type": 'application/json'}
    }).then(response => response.json())
}

export const updateTeam = (id, employee) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(employee),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

export default {
    findTeamById,
    findAllTeams,
    deleteTeam,
    createTeam,
    updateTeam
}

