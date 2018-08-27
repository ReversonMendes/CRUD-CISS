package br.com.ciss.service;

import br.com.ciss.model.Pessoa;

import java.util.List;

public interface PessoaService {
    Pessoa insere(Pessoa pessoa);

    Pessoa excluir(int id);

    List<Pessoa> buscatodos();

    Pessoa buscabyId(int id);

    Pessoa atualiza(Pessoa user);
}
