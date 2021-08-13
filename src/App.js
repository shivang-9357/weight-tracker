import React, {useState} from 'react';

import Auth from './Auth/Auth';
import fire from './fire';
import Weight from './Home/Weight';

import './App.css';

function App() {
  const [userId, setUserId] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const loginHandler = async()=>{
      await fire.auth().signInAnonymously();
      setIsUser(true);
      fire.auth().onAuthStateChanged(user=>{
         setUserId(user.uid);
      })
  }
  const logoutHandler = () => {
      fire.auth().signOut();
      setIsUser(false);
  }

  return (
    <div className="App">
      {isUser?<Weight onClickLogout={logoutHandler} userId={userId}/>:<Auth onClickLogin={loginHandler}/>}
      
    </div>
  );
}

export default App;
