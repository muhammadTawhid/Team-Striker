// import React, { useEffect, useState } from 'react';
// import Details from '../Details/Details';


// const Main2 = () => {

//     const [teams, setTeam] = useState([]);

//     useEffect(() => {
//         fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604')
//             .then(res => res.json())
//             .then(data => setTeam(data.teams))
//     }, [])


//     return (
//         <div>
//             <div>
//                 {
//                 teams.map(team => <Details team={team}></Details>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Main2;