import { Component } from "@angular/core";


@Component( {
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles: [`
        .onLine {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine';
    }

    getServerStatus(): string {
        return this.serverStatus
    }

    getColor(): any {
        return this.serverStatus === 'onLine' ? 'green' : 'red';
    }



}
