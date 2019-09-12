import { Component } from '@angular/core'; // to let angular know about the 'Component' decorator

@Component({  // to tells angular it's not a normal typescript class, it allows to enhance our class
  selector: 'app-server', // meta data for this class which will tell what to do with this class
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
