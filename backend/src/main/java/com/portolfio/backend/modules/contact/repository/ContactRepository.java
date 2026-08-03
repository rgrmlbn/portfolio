package com.portolfio.backend.modules.contact.repository;

import com.portolfio.backend.modules.contact.entity.ContactEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, Long> {

}
