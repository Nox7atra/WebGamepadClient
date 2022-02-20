import * as PIXI from 'pixi.js'
const margin = 0.1;
const size = 0.1;
class CircleButton extends PIXI.Container
{
    constructor(x, y, radius, color, text, onDown, onUp)
    {
        super();

        this.color = color;
        this.isOver = false;
        this.isDown = false;
        this.onDown = onDown;
        this.onUp = onUp;
        const fontSize = 36;
        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: fontSize,
            fill: '#ffffff'
        });
        this.width = radius;
        this.height = radius;
        this.text = new PIXI.Text(text, style);
        this.text.anchor.set(0.5, 0.5);
        this.text.position.x = x;
        this.text.position.y = y;
        let graphics = new PIXI.Graphics();
        graphics.beginFill(color);
        graphics.drawCircle(x, y, radius);
        graphics.endFill();
        this.bg = graphics;
        super.on("pointerover", this.OnOver.bind(this))
            .on("pointerout",  this.OnOut.bind(this))
            .on("pointerupoutside",  this.OnUp.bind(this))
            .on("pointerdown",  this.OnDown.bind(this))
            .on("pointerup",  this.OnUp.bind(this))
        super.interactive = true;
        super.addChild(this.bg);
        super.addChild(this.text)
    }
    OnUp(mouseData){
        this.isDown = false;
        this.bg.tint = this.isOver ? 0xAAAAAA : this.color;
        this.onUp();
    }
    OnDown(mouseData){
        this.isDown = true;
        this.bg.tint = 0x222222;
        this.onDown();
    }
    OnOver(mouseData){
        this.isOver = true;
        if(this.isDown) return;
        this.bg.tint = 0xAAAAAA;
    }
    OnOut(mouseData){
        this.isOver = false;
        if(this.isDown) return;
        this.bg.tint = this.color;
    }

}

export default CircleButton;