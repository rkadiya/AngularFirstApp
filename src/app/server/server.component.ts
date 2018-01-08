import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }

    .offline {
      color: yellowgreen;
    }
  `
  ]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus = function() {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
