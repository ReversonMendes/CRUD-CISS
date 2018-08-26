package br.com.ciss.controller;

import br.com.ciss.model.Pessoa;
import br.com.ciss.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/cadastros"})
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa insert(@RequestBody Pessoa pessoa){
        return pessoaService.create(pessoa);
    }

    @GetMapping(path = {"/{id}"})
    public  Pessoa getById(@PathVariable("id") int id){
        return pessoaService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Pessoa update(@PathVariable("id") int id, @RequestBody Pessoa pessoa){
        pessoa.setId(id);
        return  pessoaService.update(pessoa);
    }

    @DeleteMapping(path = {"/{id}"})
    public Pessoa delete(@PathVariable("id") int id){
        return pessoaService.delete(id);
    }

    @GetMapping
    public List<Pessoa>getAll(){
        return pessoaService.findAll();
    }

}
