import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.scss']
})
export class Lab6Component implements OnInit {
  p5: any;
  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    var img: any;
    p.setup = () => {
      p.createCanvas(p.windowWidth, 265).parent('canvas');
      img = p.loadImage("assets/happy-face.png");
    }

    p.draw = () => {
      p.background('#fae');

      p.stroke(4);
      p.line(90, 20, 145, 75);

      let magentaColor = p.color('magenta');
      p.fill(magentaColor)
      p.circle(120, 120, 50);

      let redColor = p.color('red');
      p.fill(redColor);
      p.rect(205, 160, 55, 55);

      let blueColor = p.color('blue');
      p.fill(blueColor)
      p.circle(345, 120, 50);

      p.stroke(4);
      p.line(385, 20, 330, 75);    

      p.fill(0, 102, 153);
      let isntHappyString = "This is a picture of someone who isn't very happy right now."
      p.textSize(15);
      p.textStyle(p.ITALIC);
      p.textFont('Georgia');
      p.text(isntHappyString, 10, 255);

      p.image(img, 800,0, 250, 250);

      let isHappyString = "This is a picture of someone who seems a little too happy."
      p.textSize(15);
      p.textStyle(p.ITALIC);
      p.textFont('Georgia');
      p.text(isHappyString, 1000, 255);
    }
  }

}
