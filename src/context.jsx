import { useContext, useEffect, useReducer } from "react";
import React from "react";
import reducer from "./reducer";

// create a context (wherehouse)
// Provider
// consumer /useContext
const AppContext=React.createContext();

const API="https://kunaldemoapi.herokuapp.com/product";
const intialState={
    title:"",
    image:"",
    products:[],
};

const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,intialState);

    const updateHomePage=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name:"PAWAR BHANDI & METALS",
                image:"./images/pawarstore.jpg",
            },
        });
    };
    
    const updateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"PAWAR FURNITURES",
                image:"./images/pawarbhandhi.jpg",
            },
        });
    };

    // to get the api data
    const getProducts=async(url)=>{
        try{
        const res=await fetch(url);
        const data=await res.json();
        dispatch({type:"GET_PRODUCTS",payload:data})
        }catch(error){
        console.log(error);
        }
    };

    // to call the api
    useEffect(() => {
    getProducts(API);
    }, []);
    

    return( <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
    </AppContext.Provider>
    );
};

// global custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
};

export{AppContext,AppProvider,useGlobalContext};