import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  persone: any
  persona: any
  isProfile: boolean
  constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.persona = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
    }else{
      this.isProfile = false
      this.persone = this.servizioProva.getPersone()
    }
    console.log(this.route.snapshot.paramMap.get('id'))
  }
}
