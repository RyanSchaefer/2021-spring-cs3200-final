import driversService from "./driver-service"
import teamService from "../team-object-frontend/team-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const DriverFormEditor = () => {
    const {id} = useParams()
    const findUserById = (id) => driversService.findDriverById(id).then(driver => setUser(driver))
    const [user, setUser] = useState({})
    useEffect(() => {
        console.log(user)
        if(id !== "new") {
            findUserById(id)
        }
    }, [])
    const deleteDriver = (id) =>
        driversService.deleteDriver(id)
            .then(() => history.back())
    const createDriver = (driver) =>
        driversService.createDriver(driver)
            .then(() => history.back())
    const updateDriver = (id, newDriver) =>
        driversService.updateDriver(id, newDriver)
            .then(() => history.back())
    return (
        <div>
            { user.team &&
            <Link to={`/teams/${user.team.id}`}>
                {user.team.name},
                {user.team.ceo},
                {user.team.budget}
            </Link>
            }
            <h2>Driver Editor</h2>
            <label>Id</label>
            <input className="form-control"
                   value={user.id}
            />
            <label>First Name</label>
            <input className="form-control"
                   value={user.firstName}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, firstName: e.target.value}))}
            />
            <label>Last Name</label>
            <input className="form-control"
                   value={user.lastName}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, lastName: e.target.value}))}/>
            <label>Username</label>
            <input className="form-control"
                   value={user.userName}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, userName: e.target.value}))}
            />
            <label>Password</label>
            <input className="form-control"
                   value={user.password}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, password: e.target.value}))}
            />
            <br/>
            <label>Email</label>
            <input className="form-control"
                   value={user.email}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, email: e.target.value}))}
            />
            <br/>
            <label>Date of birth (YYYY-MM-DD)</label>
            <input className="form-control"
                   value={user.dob}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, dob: e.target.value}))}
            />
            <br/>
            <label>Team ID</label>
            <input className="form-control"
                   value={user.team ? user.team.id : ""}
                   onChange={(e) => {
                       teamService.findTeamById(e.target.value).then(
                           val => setUser(user =>
                               ({...user, team: val}))
                       )
                   }
                   }
            />
            <br/>
            <button className="btn btn-warning" onClick={() => {
                history.back()
            }}>Cancel</button>
            <button className="btn btn-danger" onClick={
                () => deleteDriver(user.id)
            }>Delete</button>
            <button className="btn btn-primary" onClick={() => updateDriver(user.id, user)}>Save</button>
            <button className="btn btn-success" onClick={() => createDriver(user)}>Create</button>
        </div>
    )
}
export default DriverFormEditor;