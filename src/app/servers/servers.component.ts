import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'test';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'Testserver 2'];
  displayDetails = false;
  displayDetailsArray = [];

  toggleDisplayDetails() {
    this.displayDetailsArray.push(new Date());
    this.displayDetails === false ? this.displayDetails = true : this.displayDetails = false;
  }

  getBackgroundColor(detail: any) {
    return this.displayDetailsArray.indexOf(detail) >= 4 ? 'blue' : 'white';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onEmptyUser() {
    this.userName = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }


}
