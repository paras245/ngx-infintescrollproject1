import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-infintescrollproject1';
  // onScroll() {
  //   console.log("scrolled!!");
  // }

  ngOnInit(){
    for(let i =1; i<=100;i++){
      this.post.push(i);
    }
  }

  post :any = [];  //1--100
  onScroll(){
    const length = this.post.length;   //[100].map
    setTimeout(()=>{        //[1,2,3]
      const p:any= ' '.repeat(100).split('').map((s,i)=>i+1 + length);
      while(p.length) this.post.push(p.shift());
    },1000);
  }
}
