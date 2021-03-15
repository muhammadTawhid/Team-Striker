import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVolleyballBall, faFlag, faMapMarkerAlt, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Details = () => {

    let { idTeam } = useParams()
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    })

    const { strTeamBadge, strTeam, strCountry, strAlternate, strGender, strFacebook, strInstagram,strTwitter
     } = teamDetails

    return (
      

            <div className='text-white col-lg-3 col-sm-2' style={{ maxWidth: "1200px", marginLeft: " 85px", backgroundColor: "#2A3142" }}>
            <div className="card bg-dark text-white">
                <img style={{ maxHeight: "250px" }} src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <img style={{ maxHeight: "200px", marginLeft: "450px" }} src={strTeamBadge} alt="" />
                </div>
            </div>

            <div class="card mb-3" style={{
                maxWidth: "1000px",
                marginTop: "20px",
                marginLeft: "95px",
                backgroundColor: "#61718A",
                fontColor: 'red'
            }}>
                <div class="row g-0">

                    <div class="col-md-8">
                        <div style={{ fontStyle: 'none', fontColor: 'white' }} class="card-body">
                            <h3 class="card-title">{strTeam}</h3>
                            <a className='text-white' href={strAlternate}><FontAwesomeIcon icon={faMapMarkerAlt} />Club Name: {strAlternate}</a>
                            <br />
                            <a className='text-white' href={strCountry}><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</a>
                            <br />
                            <a className='text-white' href={strGender}><FontAwesomeIcon icon={faVolleyballBall} />Sport Type: Football</a>
                            <br />
                            <a className='text-white' href={strGender}><FontAwesomeIcon icon={faMars} />Gender: {strGender}</a>
                        </div>
                    </div>
                    <div class="col-md-4">

                        {
                            strGender === true ? <img
                                style={{ maxWidth: "300px", maxHeight: "200px", marginTop: "5px" }}
                                src='https://media-eng.dhakatribune.com/uploads/2020/09/skysports-brazil-women-football-5084776-1599122143561.jpg' alt="..." />
                                :
                                <img style={{ maxWidth: "600px", maxHeight: "200px" }}
                                    src="https://d2wegfs7x5oo9z.cloudfront.net/wp-content/uploads/2018/02/21014107/philosophy_square05.jpg" alt="..." />
                        }
                    </div>

                </div>
            </div>

            <div style={{ marginLeft: "100px" }}>
                <p><small>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which <br /> don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <br /> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of <br /> over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore <br /> always free from repetition, injected humour, or non-characteristic words etc.
                </small></p>
                <p><small>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which <br /> don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <br /> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of <br /> over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore <br /> always free from repetition, injected humour, or non-characteristic words etc.
                </small></p>
            </div>

            <div style={{ marginLeft: "500px" }}>

                <Link to={strFacebook}>
                    <img style={{ maxWidth: "60px" }}
                        src="https://amazingroofwash.com/wp-content/uploads/2018/07/fb-icon.png                      " alt="..." />
                </Link>
                <Link to={strTwitter}>
                    <img style={{ maxWidth: "40px", }}
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="..." />
                </Link>
                <Link to={strInstagram}>
                    <img style={{ maxWidth: "30px", marginLeft: "18px" }}
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="..." />
                </Link>

            </div>

        </div>
         



    );
};

export default Details;


