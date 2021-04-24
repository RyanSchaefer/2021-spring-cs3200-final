const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
import driverService from "./driver-service";

const DriverList = () => {
    const history = useHistory();
    const [drivers, setDrivers] = useState([]);
    const findAllDrivers = () => driverService.findAllDrivers().then(drivers => setDrivers(drivers))
    useEffect(() => {
        findAllDrivers()
    }, [])
    return(
        <div>
            <h2>Drivers</h2>
            <button type="button" className="btn btn-light" onClick={() => history.push("/drivers/new")}>
                Add Driver
            </button>
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
export default DriverList;