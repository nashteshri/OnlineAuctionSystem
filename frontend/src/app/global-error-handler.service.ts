import { ErrorHandler, Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { AuthService } from "./user/auth.service";

 
@Injectable({
    providedIn: 'root'
})
 
export class GlobalErrorHandlerService implements ErrorHandler {
 
 
 
    constructor(private authService: AuthService) {
       
    }
 
    handleError(error: any): void {
 
   
       
       
 
        if (error.status !== undefined) {
            console.log(error.status);
            console.log(error);
            
           
            if (error.status !== 500 && error.status !== 0) {
                error.message = error.error.message
            } else {
                error.message = "Try again later !"
            }
 
            Swal.fire({
                icon: "error",
               
                text: error.message
            }).then(
 
                (result) => {
 
 
                    if (error.status === 0) {
                        this.authService.logout()
                    }
 
 
                }
            )
        }
    }
}
 