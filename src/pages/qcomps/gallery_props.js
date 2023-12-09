
function Profile({person, size}){
return(
  <div>
    <h2>{person.name}</h2>
    <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imageId +'s.jpg'}
          alt={person.name}
          width={size}
          height={size}
        />
     <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardsno} </b>
            ({person.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
      </ul>
    
  </div>
);

}



export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
      person={
        {name: "Maria Skłodowska-Curie", 
        imageId: "szV5sdG", 
        profession: "physicist and chemist",
        awardsno: 4 ,
        awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal" ,
        discovery: "polonium (element)"}
       }
      size={70}
      />
      <Profile
      person={
        {name: "Katsuko Saruhashi", 
        imageId: "YfeOqp2", 
        profession: "geochemist",
        awardsno: 2 ,
        awards: "Miyake Prize for geochemistry, Tanaka Prize" ,
        discovery: "a method for measuring carbon dioxide in seawater"
      }
       }
      size={70}
      />
      </div>
  );
}
























// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src='https://i.imgur.com/szV5sdGs.jpg'
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b>
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src='https://i.imgur.com/YfeOqp2s.jpg'
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b>
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }
