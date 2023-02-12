import React,{Component} from "react";
import { Fade, Slide } from "react-awesome-reveal";

const CARD_TEXT_PADDING = 20;
const CARDS_COLORS=[ "#91b5ff","#CEEDC7","#FFF6BD","#FFD4B2"]

const CARDS_CONTENT = [
    {
        title:"CARD_1",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_2",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_3",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_4",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    }
]

const styles={
    container_styling:{
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        height:"100%",
        positions:"relative",
        background:"#feffb5"
    },
    section_title_styling:{
        marginTop: "100px",
        fontSize: "2.5rem",
        lineHeight: "2",
        fontFamily: "'Courier New', monospace",
        fontWeight: "bold"
    },
    card_container_styling:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"100px"
    },
    card_styling:{
        minHeight: "250px",
        margin: "10px",
        boxShadow: "-6px 6px 0px 0px",
        borderRadius: "3%"
    },
    inner_card_styling:{
        height:"250px",
        border:"3px solid",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "2%",
        width:"300px"
    },
    card_title_styling:{
        padding:`${CARD_TEXT_PADDING}px`,
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif"
    },
    card_content_styling:{
        height: "100%",
        width: `calc(100% - ${CARD_TEXT_PADDING*2}px)`
    }
}

class ComunityPage extends Component{

    _renderCards=()=>{
        let cards = [];
        for(let index in CARDS_CONTENT){
            let direction = index %2 === 0 ?"up":"down"
            cards.push(
                <Slide direction={direction} damping={2}>
                    <div style={styles.card_styling}>
                        <div style={Object.assign({},styles.inner_card_styling,{
                                background:CARDS_COLORS[index]
                            })
                        }>
                            <div style={styles.card_title_styling}>
                                {CARDS_CONTENT[index].title}
                            </div>
                            <div style={styles.card_content_styling}>
                                {CARDS_CONTENT[index].text}
                            </div>
                        </div>
                    </div>
                </Slide>
            )
        }

        return cards
    }

    render(){
        return(
            <div style={styles.container_styling}>
                <div style={{height:"30%",zIndex: "2"}}>
                    <Slide direction="down" delay={200}>
                        <div style={styles.section_title_styling}>
                            <Fade delay={1000} duration={2000}>
                                OUR COMUNITY AND OUR GOALS
                            </Fade>
                        </div>
                    </Slide>
                    
                    <div style={styles.card_container_styling}>
                        {this._renderCards()}
                    </div>
                </div>
                    <div style={{    
                        height: "100%",
                        position: "absolute",
                        width: "100%"
                    }}>
                        {/*<img 
                            style={{
                                width: "100%",
                                maxHeight: "calc(100vh - 20%)",
                                top: "400px",
                                position: "absolute",
                                left: "0",
                                borderTop:"2px solid"
                            }}
                            src="/6308.jpg" 
                            alt="image_main_logo" 
                        />*/}
                    </div>                
            </div>
        )
    }
}

export default ComunityPage;