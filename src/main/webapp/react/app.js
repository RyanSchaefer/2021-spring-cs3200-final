import DriverList from "./driver-user-frontend/driver-list";
import EmployeeList from "./employee-object-frontend/employee-list";
import DriverFormEditor from "./driver-user-frontend/driver-editor";
import TeamList from "./team-object-frontend/team-list";
import EmployeeFormEditor from "./employee-object-frontend/employee-editor";
import TeamFormEditor from "./team-object-frontend/team-editor";

const {HashRouter, Route, Link} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Link to="/drivers"><button type="button" className="btn btn-light">Drivers</button></Link>
                    <Link to="/employees"><button type="button" className="btn btn-light">Employees</button></Link>
                    <Link to="/teams"><button type="button" className="btn btn-light">Teams</button></Link>
                </Route>
                <Route path="/drivers" exact={true}>
                    <DriverList/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
                <Route path="/drivers/:id" exact={true}>
                    <DriverFormEditor/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
                <Route path="/employees" exact={true}>
                    <EmployeeList/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
                <Route path="/employees/:id" exact={true}>
                    <EmployeeFormEditor/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
                <Route path="/teams" exact={true}>
                    <TeamList/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
                <Route path="/teams/:id" exact={true}>
                    <TeamFormEditor/>
                    <Link to="/"><button type="button" className="btn btn-light">Back</button></Link>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
