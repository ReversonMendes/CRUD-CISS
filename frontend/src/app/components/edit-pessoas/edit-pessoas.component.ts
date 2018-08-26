import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-edit-pessoas',
  templateUrl: './edit-pessoas.component.html',
  styleUrls: ['./edit-pessoas.component.css']
})
export class EditPessoasComponent implements OnInit {

  // pessoa: any;
  pessoa: Pessoa = new Pessoa();
  formulario: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService) {
  }

  //atualizar cadastro de pessoa
  AtualizarPessoa(pessoa) {
    this.pessoaService.updatePessoa(pessoa).subscribe( data => {
        this.router.navigate(['pessoas']);
        }, error => {
          alert("Oh não! aconteceu um erro! ->"+error);
         });          
  }

  //pega por parametro o ID da pessoa e alimenta o mold
  ngOnInit() {
        //Cria vaildações dos campos
        this.formulario = new FormGroup({
          'nome': new FormControl(this.pessoa.nome, [Validators.required]),
          'email': new FormControl(this.pessoa.email, [Validators.required, Validators.email]),
          'datanascimento': new FormControl(this.pessoa.datanascimento, [Validators.required]),
          'sexo': new FormControl(this.pessoa.sexo, [Validators.required])
         });

      this.route.params.subscribe(params => {
      this.pessoaService.getPessoaId(params['id']).subscribe(res => {
              this.pessoa = res;
          }, error =>{
            alert("Oh não! aconteceu um erro! ->"+error);
          });
      });
  }

}
