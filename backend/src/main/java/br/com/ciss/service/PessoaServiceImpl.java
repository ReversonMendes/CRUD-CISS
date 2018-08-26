package br.com.ciss.service;

import br.com.ciss.model.Pessoa;
import br.com.ciss.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaServiceImpl implements PessoaService {

    @Autowired
    private PessoaRepository repository;

    @Override
    public Pessoa create(Pessoa pessoa) {
        return repository.save(pessoa);
    }

    @Override
    public Pessoa delete(int id) {
        Pessoa pessoa = findById(id);
        if(pessoa != null){
            repository.delete(pessoa);
        }
        return pessoa;
    }

    @Override
    public List<Pessoa> findAll() {
        return repository.findAll();
    }

    @Override
    public Pessoa findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Pessoa update(Pessoa pessoa) {
        return repository.save(pessoa);
    }
}
