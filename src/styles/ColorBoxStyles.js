import chroma from "chroma-js";
import sizes from "./sizes"

export default {
    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.7px",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height:  props => (props.showingFullPalette ? "20%" : "33.3333%")
        },
        [sizes.down("md")]: {
            width: "50%",
            height:  props => (props.showingFullPalette ? "10%" : "20%")

        },
        [sizes.down("xs")]: {
            width: "100%",
            height:  props => (props.showingFullPalette ? "5%" : "10%")
        },

    },

    copyText: {
        color: props =>
        chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },

    colorName: {
        color: props => 
             chroma(props.background).luminance() <= 0.08 ? "white" : "black"

    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        position: "absolute",
        background: "rgba(255,255,255,0.3)",
        right: "0",
        bottom: "0",
        border: "none",
        
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12p"
    },
    copyOverlay: {
        width: "100%",
        height: "100%",
        zIndex: "0",
        opacity: "0",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        zIndex: "2",
        position: "absolute",
        transform: "scale(50)"
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0",
        transform: "scale(0.1)",
        "& h1": {
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.3)",
            textAlign: "center",
            textShadow: "1px 2px black",
            fontWeight: "400",
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
            textTransform: "uppercase",
            fontSize: "4rem",
            [sizes.down("xs")]: {
                fontSize: "5rem"
            }
        },
        "& p": {
            textAlign: "center",
            fontWeight: "100",
            fontSize: "2rem"
        }
    },
    showMessage: {
        opacity: "1",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s",
        transform: "scale(1)",
        zIndex: "3"
    }
}