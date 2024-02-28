import { useContext } from "react"
import "../index.css"
import TodoContext from "../context/TodoContext";

function StatItems({text,color})
{
    const {totalNumberOfTodos}=useContext(TodoContext);

    return(
    <div className="statItems" style={{backgroundColor:color}}>
            <p>{text}</p>
            <p className="stat" style={{fontWeight:"100"}}>{totalNumberOfTodos}</p>
    </div>
    )
}

export default function Stat()
{

    return(
        <div style={{display : "flex",marginTop : "20px",height : "20rem",padding:"0 1rem 0 1rem",flexDirection:"column",width : "90%",justifyContent : "start",alignItems : "center"}}>
            <div style={{width : "100%"}}>
            <h2 style={{fontFamily:"Roboto", fontWeight:"500",marginTop : "0"}}>Stats</h2>
            <div style={{display :"grid", gridTemplateColumns : "1fr 1fr 1fr", gap:"1rem"}}>
             <StatItems text="Total" color ="#C5EBAA"/>
             <StatItems text="Remaining" color ="#FC6736"/>
             <StatItems text="Complete" color ="#F8E559"/>
            <StatItems  text="High Priority" color="#FF8080"/>
            <StatItems text="Medium Priority" color="#FDBF60"/>
            <StatItems text="Low Priority" color ="#F2C18D"/>

            </div>
            </div>
            
        </div>
    )
}