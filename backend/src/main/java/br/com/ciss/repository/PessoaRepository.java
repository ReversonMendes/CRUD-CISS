package br.com.ciss.repository;

import br.com.ciss.model.Pessoa;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PessoaRepository extends Repository <Pessoa, Integer> {

    void delete(Pessoa pessoa);

    List<Pessoa> findAll();

    Pessoa findOne(int id);

    Pessoa save(Pessoa pessoa);
}
