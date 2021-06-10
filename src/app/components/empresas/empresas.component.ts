import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Empresa } from '../../models/empresa';
import { EmpresasService } from '../../services/empresas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogService } from '../../services/modal-dialog.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Titulo = 'Empresas';
  TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)'
  };
  AccionABMC = 'L'; // inicialmente inicia en el listado de articulos (buscar con parametros)
  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...'
  };

  empresas: Empresa[] = null;
  submitted: boolean = false;

  FormBusqueda: FormGroup;
  FormRegistro: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private empresasService: EmpresasService,
    private modalDialogService: ModalDialogService
  ) {}

  // CONTINUAR ACA/...
  ngOnInit() {}
}
