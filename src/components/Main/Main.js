import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';



const Main = () => {

    const [teams, setTeam] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])

    
    return (
        <div className="container">

            <div className="my-4 card bg-dark text-white">
                <img style={{ maxHeight: "200px" }} src="https://st2.depositphotos.com/3725083/5486/i/600/depositphotos_54860225-stock-photo-stadium.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h1 className="card-title">Team Striker</h1>
                </div>
            </div>


            <div className="row">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
            
           

        </div>
    );
};

export default Main;