import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import * as  feather from 'feather-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _toaster:ToastrService){}
  title = 'backend';
 
  ngOnInit(){
    feather.replace();

    // this._toaster.success("data saved","User Master");

  }
}
