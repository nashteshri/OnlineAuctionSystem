import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const router = this.injector.get(Router); // Get Router instance

    console.error('Global Error Handler:', error);

    // Redirect to a custom error page
    router.navigate(['/error-page']);

    // Optionally log error to an external service
    // sendErrorToServer(error);

    // Rethrow error if needed (optional)
    throw error;
  }
}
