const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
import teamService from "./team-service"

const TeamList = () => {
    const history = useHistory();
    const [team, setTeam] = useState([]);
    const findAllTeams = () => teamService.findAllTeams().then(team => setTeam(team))
    useEffect(() => {
        findAllTeams()
    }, [])
    return(
        <div>
            <h2>Teams</h2>
            <button type="button" className="btn btn-light" onClick={() => history.push("/teams/new")}>
                Add Team
            </button>
            <ul>
                {
                    team.map(
                        team =>
                            <li key={team.id}>
                                <Link to={`/teams/${team.id}`}>
                                    {team.name},
                                    {team.ceo},
                                    {team.budget}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}
export default TeamList;