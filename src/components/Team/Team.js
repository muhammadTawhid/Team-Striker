import React from 'react';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,    
} from "react-router-dom";  

const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team

    return (

        <div className='col-lg-3 col-sm-2 my-4 d-flex justify-content-center  p-3 mb-5 bg-body rounded'>

            <div className="card shadow  rounded" style={{ width: "20rem" }}>
                <img src={strTeamBadge} className="p-4 card-img-top" alt="..." />
                <div className="text-center card-body">
                    <h2 className="card-title">{strTeam}</h2>
                    <p className="card-text">{strSport}</p>
                    <Link to={`/details/${idTeam}`}>
                    <button className='btn btn-primary'>Explore</button>
                    </Link>
                    
                </div>
            </div>
        </div>

    );
};

export default Team;

