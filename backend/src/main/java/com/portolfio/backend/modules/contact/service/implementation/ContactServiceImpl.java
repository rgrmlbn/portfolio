package com.portolfio.backend.modules.contact.service.implementation;

import com.portolfio.backend.exceptions.ResourceNotFoundException;
import com.portolfio.backend.modules.contact.dto.request.ContactRequest;
import com.portolfio.backend.modules.contact.dto.response.ContactResponse;
import com.portolfio.backend.modules.contact.entity.ContactEntity;
import com.portolfio.backend.modules.contact.mapper.ContactMapper;
import com.portolfio.backend.modules.contact.repository.ContactRepository;
import com.portolfio.backend.modules.contact.service.interfaces.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;
    private final ContactEmailServiceImpl contactEmailService;


    @Override
    public ContactResponse createContact(ContactRequest contactRequest) {

        ContactEntity contact = contactMapper.toEntity(contactRequest);

        contactRepository.save(contact);
        contactEmailService.sendContactNotifications(contact);

        return contactMapper.toResponse(contact);
    }

    @Override
    public Page<ContactResponse> getAllContacts(
            int page,
            int size,
            String name) {

        Pageable pageable = PageRequest.of(page, size);

        Page<ContactEntity> contacts;

        if (name == null || name.isBlank()) {
            contacts = contactRepository.findAll(pageable);
        } else {
            contacts = contactRepository
                    .findByNameContainingIgnoreCase(name, pageable);
        }

        return contacts.map(contactMapper::toResponse);
    }

    @Override
    public ContactResponse getContactById(Long id) {
        ContactEntity contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User"));

        return contactMapper.toResponse(contact);
    }

    @Override
    public void deleteContactById(Long id) {
        ContactEntity contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User"));

        contactRepository.delete(contact);
    }

}
