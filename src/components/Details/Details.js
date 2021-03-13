import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
    
    let { idTeam } = useParams()
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams))
    },)
    console.log(teamDetails)
    
    // {
    //     teamDetails.map(teamDetails => <Team team={teamDetails}></Team>)
    // }

    const { strTeamBadge, strTeam} = teamDetails

    return (
        
        <h1>helo </h1>
        
        
       
        
    );
};

export default Details;







{/* <FontAwesomeIcon icon={} /> */}






 // <div>
        //     {/*--------------- this is banner of detail page */}
        //     <div className="my-4 card bg-dark text-white">
        //         <img style={{ maxHeight: "200px" }} src="https://cdn.imgbin.com/7/2/0/imgbin-olympic-football-stadium-rT9jFx1aJKcYG7euiS06AA6tJ.jpg" className="card-img" alt="..." />
        //         <div className="card-img-overlay d-flex justify-content-center align-items-center">
        //              <img src={strTeamBadge} className="h-25 w-25" alt="..." />
        //         </div>
        //     </div>

        //     {/*----------------------- this is male and female div */}



        //     <h3>this is detail..{idTeam}</h3>
        //     <button>dsasfs</button>
           
        // </div>