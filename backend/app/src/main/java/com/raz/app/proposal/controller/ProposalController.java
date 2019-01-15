package com.raz.app.proposal.controller;

import com.raz.app.Model.Book;
import com.raz.app.Repository.BookRepository;
import com.raz.app.proposal.model.Proposal;
import com.raz.app.proposal.repository.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProposalController {

    private ProposalRepository proposalRepository;

    @Autowired
    public ProposalController(ProposalRepository proposalRepository) {
        this.proposalRepository = proposalRepository;
    }


    @PostMapping(value = "proposal/save")
    public void save(
            @RequestBody Proposal proposal
    )
    {
        proposalRepository.save(proposal);
    }

    @GetMapping(value = "proposal/all")
    public List<Proposal> getAll(){

       List<Proposal> proposals = proposalRepository.findAll();
        return proposals;
    }
}
