import React, { useEffect } from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget';
import Login from './Components/Login';

import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
