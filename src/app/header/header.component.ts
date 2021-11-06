import { Component, OnInit } from '@angular/core';
import { ImgPathsService } from '../img-paths.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoPath: string;
  constructor(private imgPathService: ImgPathsService) {
    this.logoPath = imgPathService.logoPath;
  }

  ngOnInit(): void {
  }

}
