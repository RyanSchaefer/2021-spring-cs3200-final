import employeeService from "./employee-service"
import teamService from "../team-object-frontend/team-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const EmployeeFormEditor = () => {
    const {id} = useParams()
    const findUserById = (id) => employeeService.findEmployeeById(id).then(driver => setUser(driver))
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, [])
    const deleteEmployee = (id) =>
        employeeService.deleteEmployee(id)
            .then(() => history.back())
    const createEmployee = (driver) =>
        employeeService.createEmployee(driver)
            .then(() => history.back())
    const updateEmployee = (id, newEmployee) =>
        employeeService.updateEmployee(id, newEmployee)
            .then(() => history.back())
    return (
        <div>
            <h2>Employee Editor</h2>
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
            <label>Role</label>
            <input className="form-control"
                   value={user.role}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, role: e.target.value}))}/>
            <label>Hired (YYYY-MM-DD)</label>
            <input className="form-control"
                   value={user.hired}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, hired: e.target.value}))}
            />
            <label>Salary</label>
            <input className="form-control"
                   value={user.salary}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, salary: e.target.value}))}
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
                () => deleteEmployee(user.id)
            }>Delete</button>
            <button className="btn btn-primary" onClick={() => updateEmployee(user.id, user)}>Save</button>
            <button className="btn btn-success" onClick={() => createEmployee(user)}>Create</button>
        </div>
    )
}
export default EmployeeFormEditor;