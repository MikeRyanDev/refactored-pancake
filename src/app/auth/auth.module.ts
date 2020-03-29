import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import {
  LoginPageComponentModule,
  LoginPageComponent
} from "./components/login-page";
import { UserComponentModule } from "./components/user";
import { RouterModule } from "@angular/router";
import { GuestGuard } from "../shared/guards";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "login",
        component: LoginPageComponent,
        canActivate: [GuestGuard]
      }
    ]),
    ,
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [LoginPageComponentModule, UserComponentModule]
})
export class AuthModule {}
