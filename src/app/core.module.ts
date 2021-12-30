import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    ShoppingListService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
  ],
})
export class CoreModule {}
