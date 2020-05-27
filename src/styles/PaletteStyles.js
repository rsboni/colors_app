import sizes from "./sizes"

export default {
    Palette: {
        height: "100vh"
    },
    colors: {
        height: "90vh"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.7px",
        opacity: "1",
        backgroundColor: "black",
        "& a": {
            color: "white",
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
        },
        [sizes.down("lg")]: {
            height: "33.3333%",
            width: "25%"
        },
        [sizes.down("md")]: {
            height: "20%",
            width: "50%"
        },
        [sizes.down("xs")]: {
            height: "10%",
            width: "100%"
        },

        
    },
};
