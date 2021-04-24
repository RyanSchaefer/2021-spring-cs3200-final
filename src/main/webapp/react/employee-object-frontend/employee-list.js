const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
import employeeService from "./employee-service"

const EmployeeList = () => {
    const history = useHistory();
    const [employees, setEmployees] = useState([]);
    const findAllEmployees = () => employeeService.findAllEmployees().then(employee => setEmployees(employee))
    useEffect(() => {
        findAllEmployees()
    }, [])
    return(
        <div>
            <h2>Employees</h2>
            <button type="button" className="btn btn-light" onClick={() => history.push("/employees/new")}>
                Add Employee
            </button>
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
export default EmployeeList;