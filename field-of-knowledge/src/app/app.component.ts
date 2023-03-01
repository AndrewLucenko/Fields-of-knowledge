import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private app: PIXI.Application = new PIXI.Application({resizeTo: document.getElementById("application") as HTMLCanvasElement});
  
  ngOnInit() {
    document.getElementById("application")!.appendChild(this.app.view as HTMLCanvasElement);
    console.log(document.body.getElementsByClassName("application")[0]);

    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontWeight: 'bold',
      fill: ['#ffffff'], 
      stroke: '#4a1850',
    });

    const basicText = new PIXI.Text('привет мир я гуль...', style);
    basicText.x = 10;
    basicText.y = 0;

    var time : number = 0;

    let sprite = PIXI.Sprite.from("../assets/no_borders.svg");
    console.log(sprite.width);
    console.log(sprite.height);
    sprite.x = 10
    sprite.y = 80

    sprite.interactive = true;

    sprite.on('pointerdown', this.onClick);
    console.log(sprite.width);
    console.log(sprite.height);

    this.app.stage.addChild(sprite);
    this.app.stage.addChild(basicText);

    this.app.ticker.add((delta) => {
      time += delta;
      basicText.x = 100 + Math.sin(time * 0.01) * 100;
    });

    setTimeout(() => {
      console.log("dispatched")
      const eventInitDict = {
        view: window,
        bubbles: true,
        cancelable: true,
        button: 0,
        buttons: 1,
        isPrimary: true,
        pointerType: 'mouse',
        clientX: window.innerWidth + 1,
        clientY: window.innerHeight + 1,
      };
    
      this.app.renderer.view.dispatchEvent( new PointerEvent( 'pointerdown', eventInitDict ) );
      this.app.renderer.view.dispatchEvent( new PointerEvent( 'pointerup', eventInitDict ) );
      
    }, 1000)
  }

  onClick() {

    console.log('hui')
  }
}

