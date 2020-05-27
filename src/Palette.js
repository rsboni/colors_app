import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles"
import { withStyles }  from "@material-ui/styles";

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }    

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const {classes} = this.props;

        const ColorBoxes = colors[level].map(c =>  
            <ColorBox background={c[format]} 
                      name={c.name} 
                      key={c.id}
                      id={c.id}
                      paletteId={id}
                      showingFullPalette={true} />
        );

        return (
            <div className={classes.Palette}>
                <Navbar changeFormat={this.changeFormat} 
                        changeLevel={this.changeLevel} 
                        level={level}
                        showingAllColors/>
                <div className={classes.colors}>
                    {ColorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);
