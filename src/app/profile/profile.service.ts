import {ProfileModel} from "./profile.model";
import {Http, Response} from "@angular/http";
import {api} from "../utils/apis";

import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";

@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  getProfile() : Promise<ProfileModel> {
    return this.http.get(api)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json() as ProfileModel;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
