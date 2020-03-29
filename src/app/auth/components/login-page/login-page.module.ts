import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoginFormComponentModule } from "../login-form";
import { LoginPageComponent } from "./login-page.component";

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, LoginFormComponentModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class LoginPageComponentModule {}
