import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State, selectAuthUser } from "../state";
import { map, take } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate() {
    return this.store.select(selectAuthUser).pipe(
      map(user => {
        if (user) return true;

        return this.router.createUrlTree(["/login"]);
      }),
      take(1)
    );
  }
}
