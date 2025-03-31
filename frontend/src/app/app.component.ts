import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projet';

  constructor(public dialog: MatDialog, private router : Router) {}

  ngOnInit(): void {
    this.router.navigate(["/summary"]);
  }
  
}
