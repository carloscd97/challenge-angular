import { Injectable } from '@angular/core';
import {UnitOfWorkService} from '../unitOfWork/unit-of-work.service';
import { IUserSession } from '../../models/user-authenticated.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ILoginViewModel } from '../../viewmodels/ILoginViewModel';

@Injectable()
export class AuthenticationService {


  constructor(private unitOfWork: UnitOfWorkService) { }

  login(loginViewModel: ILoginViewModel): Observable<IUserSession> {
    return this.unitOfWork.post<IUserSession, ILoginViewModel>('login/authenticate', loginViewModel);
  }

}
