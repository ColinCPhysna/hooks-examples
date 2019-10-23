import React from 'react';
import ReactDOM from 'react-dom';
import useAxios from 'axios-hooks'
import './index.css';
import * as serviceWorker from './serviceWorker';




const Root = () => {
 const [{data,loading,error}, refetch] = useAxios('https://randomuser.me/api/');

 if(loading) return <p>Loading...</p>
 if(error) return <p>Error!</p>
  
 let user = data.results[0]
 let fullName = `${user.name.title}  ${user.name.first}  ${user.name.last}`

 return (
   <div>
     <h2>{fullName}</h2>
     <img src={user.picture.large} alt="a random fake user"/>
     <h3><span>{user.dob.age}</span> <span>{user.location.city}</span></h3>
     <button onClick={refetch}>Refetch</button>
   </div>
 )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
