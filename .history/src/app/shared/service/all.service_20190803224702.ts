import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllService {
  constructor(private rootUrl: UrlService ,
              private http: HttpClient) {
  }
  // ผลบอล
  postResult(formData: any) {
    return this.http.post(this.rootUrl.rootURL + '/api/results', formData, this.rootUrl.httpOptions);
  }

  // โปรแกรมแข่งขัน
  postFixtures(formData: any) {
    return this.http.post(this.rootUrl.rootURL + '/api/fixtures', formData, this.rootUrl.httpOptions);
  }

}
