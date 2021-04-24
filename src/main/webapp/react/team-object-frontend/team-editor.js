import teamService from "./team-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const TeamFormEditor = () => {
    const {id} = useParams()
    const findUserById = (id) => teamService.findTeamById(id).then(driver => setUser(driver))
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, [])
    const deleteTeam = (id) =>
        teamService.deleteTeam(id)
            .then(() => history.back())
    const createTeam = (driver) =>
        teamService.createTeam(driver)
            .then(() => history.back())
    const updateTeam = (id, newEmployee) =>
        teamService.updateTeam(id, newEmployee)
            .then(() => history.back())
    return (
        <div>
            <h2>Team Editor</h2>
            <label>Id</label>
            <input className="form-control"
                   value={user.id}
            />
            <label>Name</label>
            <input className="form-control"
                   value={user.name}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, name: e.target.value}))}
            />
            <label>Budget</label>
            <input className="form-control"
                   value={user.budget}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, budget: e.target.value}))}/>
            <label>Ceo</label>
            <input className="form-control"
                   value={user.ceo}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, ceo: e.target.value}))}
            />
            <button className="btn btn-warning" onClick={() => {
                history.back()
            }}>Cancel</button>
            <button className="btn btn-danger" onClick={
                () => deleteTeam(user.id)
            }>Delete</button>
            <button className="btn btn-primary" onClick={() => updateTeam(user.id, user)}>Save</button>
            <button className="btn btn-success" onClick={() => createTeam(user)}>Create</button>
        </div>
    )
}
export default TeamFormEditor;