import { Component, OnInit } from '@angular/core';
import { CapturePrivateIpService } from 'capture-private-ip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-capture-private-ip-lib';
  machineDetails : any;
  allIps : any;

  constructor(private ipService:CapturePrivateIpService)
  {

  }

  ngOnInit()
  {
    const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
    const isEdge = /edg\//i.test(window.navigator.userAgent);
    const isChrome = /Chrome\//i.test(window.navigator.userAgent);
    const isFirefox = /Firefox\//i.test(window.navigator.userAgent);
    if(isIE)
      this.machineDetails = this.ipService.fetchMachineNameOnInternetExplorer();
    
    if(isEdge || isChrome || isFirefox)  {
      this.ipService.fetchPrivateIpOnModernBrowsers();
      setTimeout(()=>{
        this.allIps = document.cookie;
      },200);
    }
  }
}
