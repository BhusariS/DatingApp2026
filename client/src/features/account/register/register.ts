import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService=inject (AccountService);
 cancelRegister= output<boolean>();
  protected creds = {} as RegisterCreds;

  register(){
  
  this.accountService.register(this.creds).subscribe(
  (response) => {
    console.log(response);
    // You can handle the success response here, e.g., redirect or show a message
    this.cancel();
  },
  (error) => {
    console.error(error);
    // Handle the error response appropriately
  }
);
    
  }
  cancel()
  {
    
    this.cancelRegister.emit(false);
  }

}
