import teamService from "./team-service"
import employeeService from "../employee-object-frontend/employee-service";
import driverService from "../driver-user-frontend/driver-service";
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

function TeamEmployeeList(props) {
    const [employees, setEmployees] = useState([]);
    const findAllEmployees = () => employeeService.findAllEmployees().then(employee => setEmployees(employee.filter(
        (x) => x.team && x.team.id === parseInt(props.team_id)
    )))
    useEffect(() => {
        findAllEmployees()
    }, [])
    return(
        <div>
            <h2>Employees</h2>
            <ul>
                {
                    employees.map(
                        employee =>
                            <li key={employee.id}>
                                <Link to={`/employees/${employee.id}`}>
                                    {employee.name},
                                    {employee.role},
                                    {employee.hired}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

function TeamDriverList(props) {
    const [drivers, setDrivers] = useState([]);
    const findAllDrivers = () => driverService.findAllDrivers().then(drivers => setDrivers(drivers.filter(
        (x) => x.team && x.team.id === parseInt(props.team_id)
    )))
    useEffect(() => {
        findAllDrivers()
    }, [])
    return(
        <div>
            <h2>Drivers</h2>
            <ul>
                {
                    drivers.map(
                        driver =>
                            <li key={driver.id}>
                                <Link to={`/drivers/${driver.id}`}>
                                    {driver.firstName},
                                    {driver.lastName},
                                    {driver.userName}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

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
            <TeamEmployeeList team_id={id}/>
            <TeamDriverList team_id={id}/>
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