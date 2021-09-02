import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasico';

  nome4: string = 'John';
  nome = 'Victor';
  nome2 = 'Gustavo';

  //Para usar esse componente, voce usar a interpolção, {{}}
}
