package com.portolfio.backend.modules.contact.repository;

import com.portolfio.backend.modules.contact.entity.ContactEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, Long> {

    Page<ContactEntity> findByNameContainingIgnoreCase(
            String name,
            Pageable pageable
    );

}
