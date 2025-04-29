import { Component, OnInit } from '@angular/core';
import { Behavior } from '../Behavior.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../Animal.model';

@Component({
  selector: 'app-ethogram',
  imports: [],
  templateUrl: './ethogram.component.html',
  styleUrl: './ethogram.component.css'
})

export class EthogramComponent implements OnInit {

  misc_behaviors: Behavior[]
  saved_behaviors: Behavior[]
  b : Animal;

  constructor(public dialog: MatDialog, private activatedRoute : ActivatedRoute, private router : Router) {
    this.misc_behaviors = [
      { name: "Aboyer", description: "Le chien émet des sons pour communiquer ou alerter.", iterations: 0, type: "test" },
      { name: "Remuer la queue", description: "Signe de joie ou d'excitation.", iterations: 0, type: "test" },
      { name: "Se rouler par terre", description: "Peut indiquer un besoin de se gratter ou de se détendre.", iterations: 0, type: "test" },
      { name: "Lécher", description: "Signe d'affection ou de soumission.", iterations: 0, type: "test" }
    ]
    this.saved_behaviors = []

    //console.log("test : " + this.activatedRoute.snapshot.params['behaviors']);
    //this.b = this.storage.selectedAnimal;
    this.b = this.router.getCurrentNavigation()?.extras.state?.['animal'];

    //console.log("b : " + this.storage.selectedAnimal)
    //console.log(JSON.stringify(this.b, null, 2));

    //this.b = JSON.stringify(this.b, null, 2)

    this.misc_behaviors = this.b.behaviors;
  }

  ngOnInit(): void {
    /*this.misc_behaviors =*/ 
  }

  addBehavior(bh: Behavior) {
    this.openModal().subscribe(result => {
      if (result === "cancel" || result.trim() === '' || !result) {

      }
      else {
        bh.iterations = result;
        this.saved_behaviors.push(bh);
      }
    });
  }

  removeBehavior(bh: Behavior) {
    var idx = this.saved_behaviors.indexOf(bh);
    if (idx > -1) {
      this.saved_behaviors.splice(idx, 1);
    }
  }

  openModal(): Observable<any> {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: { message: "Implémenter différents types de saisie" } // Vous pouvez passer des données à la modale ici
    });

    return dialogRef.afterClosed();
  }

  sendReport() {
    var tamp = this.generateCSV(this.saved_behaviors);
    this.download(tamp);
  }

  generateCSV(data: any[]): string {
    // Créer les en-têtes de colonnes
    const headers = Object.keys(data[0]).join(';');

    // Créer les lignes de données
    var rows = [];
    for (var i = 0; i < data.length; i++) {
      rows.push(Object.values(data[i]).join(';'));
    }

    // Combiner les en-têtes et les lignes
    return `${headers}\n${rows.join('\n')}`;
  }

  createFile(content: string) {

    /*fs.writeFile('file.csv', content, function (err) {
      if (err) {
        return console.error(err);
      }
      console.log("File created!");
    });*/
  }

  download(content: string) {
    let file = new Blob([content], { type: '.csv' });
    let a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = "test.csv";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

}
