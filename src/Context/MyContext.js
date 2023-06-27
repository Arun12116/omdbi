import { createContext } from "react"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
const MyContext = createContext();

export default MyContext;

export const CustomComponents = ({ children }) => {

    const [moviesData, setMoviesData] = useState([])
    const [serch, setSearch] = useState("hero");
    const [query, setQuery] = useState([])



    // console.log(serch);

    useEffect(() => {

        axios.get(`https://www.omdbapi.com/?apikey=1a9d9cea&s=${serch}`).then((res) => {
            setMoviesData(res.data.Search)

        }).catch(() => {

            alert("api error")

        })



    },[query])
    const handleClick = () => {

        setQuery(serch);


    }




    return (

        <>
            <MyContext.Provider value={{ serch, setSearch, moviesData, setMoviesData, handleClick }}>
                {children}
            </MyContext.Provider>

        </>

    )
}


