import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { TerritorioDataService } from './services/territorio-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'territoriesLending-app';
  value="";
  description: any;

  constructor(public db:AngularFireDatabase, public clientesService: TerritorioDataService) {
    var territoriosList = db.database.ref("territorios/002/nombres");
    territoriosList.on('value', territorio => {
      var territorioObject = territorio.val();
  
      let array = [Object.entries(territorioObject).map(i => i[1])] 
      console.log(array[0])
      this.description = array[0]
    });
  }

  
  altaUsuario(){
    console.log(this.value)
    this.db.database.ref('territorios/002/nombres').push(this.value).then( ()=> {
      alert('altaOK')
    }).catch(err=>{
      console.log(err)
    });
  }

  ngOnInit() {
    console.log(this.clientesService)
  }

}
