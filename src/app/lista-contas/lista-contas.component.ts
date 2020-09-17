import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { ContaService } from "../conta.service";
import { Conta } from "../conta";
import { isEmpty } from "rxjs/operator/isEmpty";

@Component({
  selector: "app-lista-contas",
  templateUrl: "./lista-contas.component.html",
  styleUrls: ["./lista-contas.component.css"],
})
export class ListaContasComponent implements OnInit {
  contas: Observable<Conta[]>;

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit() {
    this.carregaContas();
  }

  carregaContas() {
    this.contas = this.contaService.getListaContas();
  }

  sacarConta(id: number) {
    var valorOperacao = (<HTMLInputElement>document.getElementById('valorOperacao'));

    if (+valorOperacao.value <= 0) {
      console.log("Não é possível sacar negativo");
      return;
    }

    this.contaService.sacarConta(id, +valorOperacao.value).subscribe(
      (data) => {
        console.log(data);
        this.carregaContas();
      },
      (error) => {
        console.log(error);
      }
    );;

  }

  depositarConta(id: number) {
    var valorOperacao = (<HTMLInputElement>document.getElementById('valorOperacao'));

    if (+valorOperacao.value <= 0) {
      console.log("Não é possível depositar negativo");
      return;
    }

    this.contaService.depositarConta(id, +valorOperacao.value).subscribe(
      (data) => {
        console.log(data);
        this.carregaContas();
      },
      (error) => {
        console.log(error);
      }
    );;

  }

  deletaConta(id: number) {
    this.contaService.deletaConta(id).subscribe(
      (data) => {
        console.log(data);
        this.carregaContas();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  atualizaConta(id: number) {
    this.router.navigate(["update", id]);
  }

  cadastrarConta() {
    var nomeUsuario = (<HTMLInputElement>document.getElementById('nomeUsuario')).value;
    var senhaUsuario = (<HTMLInputElement>document.getElementById('senhaUsuario')).value;
    var depositoInicial = (<HTMLInputElement>document.getElementById('depositoInicial')).value;

    if (!nomeUsuario || !senhaUsuario || !depositoInicial)
      return;

    let conta = new Conta();
    conta.usuario = nomeUsuario;
    conta.senha = senhaUsuario;
    conta.saldo = depositoInicial;
    conta.numeroConta = Math.floor((Math.random() * (99999 - 1) + 1)).toString();


    console.log(nomeUsuario, senhaUsuario, depositoInicial)
    this.contaService.cadastrarConta(conta).subscribe(
      (data) => {
        console.log(data);
        this.carregaContas();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
