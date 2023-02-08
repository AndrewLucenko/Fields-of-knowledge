import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private app: PIXI.Application = new PIXI.Application({width: 640, height: 360});
  
  ngOnInit() {
    document.body.appendChild(this.app.view as HTMLCanvasElement);
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

    this.app.ticker.add((delta) => {
      time += delta;
      basicText.x = 100 + Math.sin(time * delta * 0.01) * 100;
    });

    this.app.stage.addChild(basicText);
  }
}

