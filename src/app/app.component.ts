import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IoTBot Control App';
  introText = 'This device is based on:'
  totalAngularPackages;

  IPaddress;
  port;

  speed;

  constructor(private http: HttpClient) { }

  setIP(value) {
    console.log(value);
    this.IPaddress = value;
    console.log(this.IPaddress);
  }

  setPort(value) {
    console.log(value);
    this.port = value;
    console.log(this.port);
  }

  onDropdownChange(value) {
    console.log(value);
    this.speed = value;
    console.log(this.speed);
  }

  goForward() {
    this.http.get<any>('http://' + this.IPaddress + ':' + this.port + '/goForward?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  rotateLeft() {
    this.http.get<any>('http://' + this.IPaddress + ':' + this.port + '/rotateLeft?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }

  rotateRight() {
    this.http.get<any>('http://' + this.IPaddress + ':' + this.port + '/rotateRight?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }

  goBackward() {
    this.http.get<any>('http://' + this.IPaddress + ':' + this.port + '/goBackward?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }

  fullStop() {
    this.http.get<any>('http://' + this.IPaddress + ':' + this.port + '/fullStop?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
