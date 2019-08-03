import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  url: any;
  httpOptions: any;
  constructor(private rootUrl: UrlService ,
              private http: HttpClient ) {
    this.url = this.rootUrl.rootURL;
    this.httpOptions = this.rootUrl.httpOptions;
  }
  // ผลบอล
  postResult(formData: any) {
    return this.http.post(this.url + '/results', formData);
  }
}
