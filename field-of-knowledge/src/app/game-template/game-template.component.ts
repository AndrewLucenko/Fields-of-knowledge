import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.scss'],
  standalone: true
})
export class GameTemplateComponent implements OnInit{
  ngOnInit(): void {
    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/build/Build/build.data",
      frameworkUrl: "/assets/build/Build/build.framework.js",
      codeUrl: "/assets/build/Build/build.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "YourCompagny",
      productName: "yourProjectName",
      productVersion: "1.0"
    });
  }


}
