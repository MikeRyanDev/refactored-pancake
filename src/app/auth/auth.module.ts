import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import { LoginPageComponentModule } from "./components/login-page";
import { UserComponentModule } from "./components/user";

@NgModule({
  imports: [EffectsModule.forFeature([AuthEffects])],
  exports: [LoginPageComponentModule, UserComponentModule]
})
export class AuthModule {}
