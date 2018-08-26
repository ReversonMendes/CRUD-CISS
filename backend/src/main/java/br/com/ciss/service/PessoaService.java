package br.com.ciss.service;

import br.com.ciss.model.Pessoa;

import java.util.List;

public interface PessoaService {
    Pessoa create(Pessoa pessoa);

    Pessoa delete(int id);

    List<Pessoa> findAll();

    Pessoa findById(int id);

    Pessoa update(Pessoa user);
}
