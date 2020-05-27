import React, { Component } from 'react';
import ColorBox from './ColorBox';
import PaletteFooter from "./PaletteFooter";
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import styles from "./styles/PaletteStyles"
import { withStyles } from "@material-ui/styles";


export default withStyles(styles)(class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: "hex"
        }
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        console.log(shades.slice(1))
        return shades.slice(1)
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {
        const { paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[this.state.format]} 
                showingFullPalette={false}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar 
                    changeFormat={this.changeFormat}
                    showingAllColors={false}

                /> 
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />

            </div>
        )
    }
}
)