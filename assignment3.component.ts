import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {
  p5: any;
  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    var boyImage: any;
    var boyYCord = 130;
    p.setup = () => {
      p.createCanvas(800, 500).parent('canvas');
      boyImage = p.loadImage("assets/boy-jumping.png");

      // setting the framerate to 30 FPS
      p.frameRate(30);
    }

    p.draw = () => {
      // Background
      // light blue sky
      p.background('#afeeee');
      // no borders for the grass and the sun
      p.noStroke();

      // The grass
      p.fill('green');
      p.rect(0, 300, 800, 200);

      // The sun
      p.fill('yellow');
      p.ellipse(750,50, 55, 55);

      /////////////////////////////////
      // TREES

      // adding borders for the trees
      p.stroke(1);

      // RIGHT SIDE
      // Left tree on the right side
      p.fill('brown');
      p.rect(640,200,20,100);
      p.fill('green');
      p.ellipse(650,175,70,70);

      // Right tree on the right side
      p.fill('brown');
      p.rect(700,200,20,100);
      p.fill('green');
      p.ellipse(710,175,70,70);

      // Middle tree on the right side
      p.fill('brown');
      p.rect(670,200,20,100);
      p.fill('green');
      p.ellipse(680,175,70,70);

      // LEFT SIDE
      // Left tree on the left side
      p.fill('brown');
      p.rect(140,200,20,100);
      p.fill('green');
      p.ellipse(150,175,70,70);

      // Right tree on the left side
      p.fill('brown');
      p.rect(110,200,20,100);
      p.fill('green');
      p.ellipse(120,175,70,70);

      // no more borders
      p.noStroke();
      /////////////////////////////////

      // Load image of boy in the middle 
      p.image(boyImage, 300, boyYCord, 200, 200);
      
      // If the user clicks the mouse the boy jumps
      if(p.mouseIsPressed) {
        (async () => {
          for(var i = 0; i < 20; i++) {
            boyYCord = boyYCord - 2.5; // move the boy up
            await delay(10); // wait 10 ms
          }
          for(var i = 0; i < 20; i++) {
            boyYCord = boyYCord + 2.5; // move the boy down
            await(10); // wait 10 ms
          }
        })();
      }

      // Draw on the text for instructions
      p.textFont('Georgia');
      p.textSize(20);
      p.textStyle(p.BOLD);
      p.fill('black');p.text("Click the mouse to jump.", 280, 380);
      p.fill('black');p.text("Hold the mouse to jump higher.", 280, 410);
    }
  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}