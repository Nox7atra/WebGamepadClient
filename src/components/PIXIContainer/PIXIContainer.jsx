import React from "react";
import * as PIXI from 'pixi.js';
import CircleButton from "../../pixi_scripts/Button/button";
const margin = 0.1;
const size = 0.1;
let pixiApp;
let onLeftButtonDown;
let onLeftButtonUp;
let onRightButtonDown;
let onRightButtonUp;
window.addEventListener("resize", function() {
    document.location.reload();
    setTimeout(()=>  initPixi(), 1000);

});
function initPixi(){
    let playGround = document.getElementById('pxrender');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    pixiApp = new PIXI.Application({
        width: windowWidth,
        height: windowHeight,
        antialias: true,
        backgroundColor: 0x282c34
    });

    let circleSize = windowWidth * size;
    let buttonLeft = new CircleButton(
        margin * windowWidth + circleSize,
        windowHeight / 2,
        circleSize,
        0x00cf00,
        "A",
        onLeftButtonDown,
        onLeftButtonUp
    );
    let buttonRight = new CircleButton(
        windowWidth - circleSize - margin * windowWidth,
        windowHeight / 2,
        circleSize,
        0xff0000,
        "D",
        onRightButtonDown,
        onRightButtonUp
    );
    pixiApp.stage.addChild(buttonLeft);
    pixiApp.stage.addChild(buttonRight);

    if(playGround.childNodes[0] != null){
        playGround.removeChild(playGround.childNodes[0])
    }
    playGround.appendChild(pixiApp.view);
}
class PIXIContainer extends React.Component {
    componentDidMount() {
        onLeftButtonDown = this.props.onLeftButtonDown;
        onLeftButtonUp = this.props.onLeftButtonUp;
        onRightButtonDown = this.props.onRightButtonDown;
        onRightButtonUp = this.props.onRightButtonUp;
        initPixi();
    }
    render() {

        return  <div style={{
            position: "relative", width: this.props.width, height: this.props.height,
        }}>
            <div id="pxrender" style={{position: "relative", zIndex: 0, width: "100%", height: "100%"}}/>
        </div>
    }
}

export default PIXIContainer;