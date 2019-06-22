import { Component } from '@angular/core'; // to let angular know about the 'Component' decorator
@Component({  // to tells angular it's not a normal typescript class, it allows to enhance our class
  selector: 'app-server', // meta data for this class which will tell what to do with this class
  templateUrl: './server.component.html'
})
export class ServerComponent {

}
