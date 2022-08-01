import React,{useEffect,useState} from "react"
import './App.css';


import axios from "axios";
const App = () => {
    const labels = ['Yes', 'No'];
    const [entries, setEntries] = useState();
    console.log("entries",entries)
    const [shopActImage, setShopActImage] = useState({
        bytes: "",
        file: "",
    });

    return (

        <div className="centered" >
        <div className="Ass2a">
            <div className="Ass2b">
                <div className="Ass2c">
                    <div className="Ass2d">

            <button  id="Ass2"  style={{color:'black'}}>Hi!</button>
        </div>
                </div></div></div>

</div>

    );
};
export default App
