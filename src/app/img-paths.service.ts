import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgPathsService {

  logoPath: string;
  constructor() {
    this.logoPath = "../assets/logo.png";
  }
}
