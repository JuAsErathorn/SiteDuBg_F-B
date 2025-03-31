import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  constructor(private router : Router){

  }

  changeDog() {
    var dogImage = document.getElementById('dogImage')!;
    const dogText = document.getElementById('dogText')!;

    this.router.navigate(['/ethogram']);

    /*if (dogImage.src.includes('chien.jpg')) {
      dogImage.src = 'chien2.jpg'; // Remplace par une autre image de chien
      dogText.textContent = 'Le chien adore jouer dans le parc !';
    } else {
      dogImage.src = 'chien.jpg';
      dogText.textContent = 'Le chien est le meilleur ami de l\'homme.';
    }*/
  }

  changeCat() {
    const catImage = document.getElementById('catImage')!;
    const catText = document.getElementById('catText')!;

    alert("test");

    /*if (catImage.src.includes('chat.jpg')) {
      catImage.src = 'chat2.jpg'; // Remplace par une autre image de chat
      catText.textContent = 'Le chat adore se prélasser au soleil.';
    } else {
      catImage.src = 'chat.jpg';
      catText.textContent = 'Le chat est un animal indépendant et mystérieux.';
    }*/
  }

  changeBird() {
    const birdImage = document.getElementById('birdImage')!;
    const birdText = document.getElementById('birdText')!;

    alert("test");

    /*if (birdImage.src.includes('oiseau.jpg')) {
      //birdImage.src = 'oiseau2.jpg'; // Remplace par une autre image d'oiseau
      document.getElementById('birdImage').src = 'oiseau2.jpg';
      document.getElementById('birdText').textContent = 'Les oiseaux migrent vers le sud en hiver.';
    } else {
      birdImage.src = 'oiseau.jpg';
      birdText.textContent = 'Les oiseaux sont les maîtres du ciel.';
    }*/
  }
}
