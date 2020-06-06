import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['user'];
  }

}
