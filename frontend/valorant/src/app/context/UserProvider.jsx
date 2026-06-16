"use client"
import React, { useEffect, useState } from 'react'
import userContext from "./userContext"
import axiosApi from "../api/axiosApi"

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try{
     const response = await axiosApi.get('/isLoggedIn', {withCredentials:true});
      console.log("Auth response:", response.data);
      if(response.data.loggedIn === true){
        setUser(response.data.user);
        setIsLoggedIn(true);
       
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } 
    catch(error){
      console.error("Auth check error:", error);
      console.log("Not logged in");
      setUser(null);
      setIsLoggedIn(false);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [])

   const handleAuthSuccess = (authedUser) => {
    setUser(authedUser || null);
    setIsLoggedIn(Boolean(authedUser));
  };
  
  return (
    <userContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, handleAuthSuccess }}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
