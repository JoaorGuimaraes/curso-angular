import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  userName:String = "Joaquim";

  userData= {
    email: "joaquim@email.com",
    role: "Admin"
  };
}
