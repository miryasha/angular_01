import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName = '';

  constructor() {
    const handleTimeOut = (): any => {
      this.allowNewServer = true;
    };
    setTimeout(handleTimeOut,2000)

   }

  ngOnInit(): void {
  }

  onCreateServer(): any{
    this.serverCreationStatus = 'Server was created! Name is  ' + this.serverName;
  };

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  };

}