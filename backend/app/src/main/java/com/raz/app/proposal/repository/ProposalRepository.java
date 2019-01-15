package com.raz.app.proposal.repository;

import com.raz.app.Model.Book;
import com.raz.app.proposal.model.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProposalRepository extends JpaRepository<Proposal,Long> {
}

