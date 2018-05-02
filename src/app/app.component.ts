import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any;

  file: any;

  constructor(private http: HttpClient) {

  }

  downloadFile() {
    this.http.get('http://api.mobile.design/uploads/shots/239d30d434bb80223407f9e375a64e6790bd9234.?1505722325', {responseType: 'blob'}).subscribe(res => {
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(res);
      link.href = url;
      link.download = 'my-file.jpg';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

  getFile(event) {
    this.file = event.target.files[0];
  }

  sendFile() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post('https://file.io', formData).subscribe(res => {
      console.log(res);
    });
  }

  handleDropdownSelection(value) {
    this.title = value;
  }
}
