import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-pessoas',
  templateUrl: './add-pessoas.component.html',
  styleUrls: ['./add-pessoas.component.css']
})
export class AddPessoasComponent implements OnInit {

  formulario: FormGroup;

  pessoa: Pessoa = new Pessoa();
  constructor(private router: Router, private pessoaService: PessoaService) {
  }

  //Metodo para incluir pessoa
  incluirPessoa(): void {
    this.pessoaService.createPessoa(this.pessoa)
      .subscribe(data => {
        this.router.navigate(['pessoas']);
      }, error => {
        console.log(error);
        alert("Oh não! aconteceu um erro! ->"+error);
    });

  };

  ngOnInit(){
    //Cria vaildações dos campos
    this.formulario = new FormGroup({
      'nome': new FormControl(this.pessoa.nome, [Validators.required]),
      'email': new FormControl(this.pessoa.email, [Validators.required, Validators.email]),
      'datanascimento': new FormControl(this.pessoa.datanascimento, [Validators.required]),
      'sexo': new FormControl(this.pessoa.sexo, [Validators.required])
     });
  }

}
