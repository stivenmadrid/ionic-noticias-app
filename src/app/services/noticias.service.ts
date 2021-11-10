import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
   // eslint-disable-next-line max-len
   const urlNoticias = `https://newsapi.org/v2/everything?q=tesla&from=2021-10-10&sortBy=publishedAt&apiKey=f30da64f87d8490cb9e12983c9fc3537`;
   return this.http.get(urlNoticias);

  }
}
