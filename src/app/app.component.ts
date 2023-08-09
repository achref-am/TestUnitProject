import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isAuth=false;
Tab_Article = [
  {name: 'Bougie', Qte: '20', Prix:'152.500'},
  {name: 'Phare Droite', Qte: '10', Prix:'452.500'},
  {name: 'parachoc arriere', Qte:'5', Prix:'352.900'},
  {name: 'Amortisseurs avant Droit', Qte: '7', Prix:'152.500'},
  {name: 'Amortisseurs avant Gauche', Qte: '3', Prix:'152.500'},
  {name: 'Huile 10w40 ', Qte:'15', Prix:'90.000'},
  {name: 'Vilebrequin', Qte: '2', Prix:'1052.500'},
  {name: 'Phare Arriere Gauche', Qte: '10', Prix:'350.500'},
  {name: 'parachoc arriere', Qte:'5', Prix:'352.900'}

]
 constructor()
  {
    setTimeout((

    ) => {
      this.isAuth=true;
      
    }, 2000);
    
  }
/** Effacer un article
 * @ EffacerArticle
 */
  EffacerArticle()
  {
    console.log('TEST');
  }
 }



