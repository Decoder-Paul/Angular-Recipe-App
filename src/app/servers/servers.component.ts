import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//  selector: '[app-servers]', //as a attribute of an element
//  selector: '.app-servers', // but for id it can't be used
  templateUrl: './servers.component.html',
//  template: ,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server is created. The name is '+this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
