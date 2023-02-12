import React,{Component} from "react";
import { SECTIONS_BORDER_STYLE, COURSES } from "../Constants";

const styles={
    container_styling:{
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        height:"100%",
        positions:"relative",
        background:"#feffb5",
        borderTop:SECTIONS_BORDER_STYLE
    }
}

class Courser extends Component{
    _renderCourseCards = () => {

    }

    _renderCourseContent = () => {
        
    }
    
    render(){
        return(
            <div style={styles.container_styling}>
                <div>
                    16 Weeks Web Development Course
                </div>
                <div style={{border:"2px solid"}}>
                    <div style={{background:"red"}}>
                    </div>  
                </div>

            </div>
        )
    }
}

export default Courser;