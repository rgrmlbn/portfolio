package com.portolfio.backend.modules.contact.service.implementation;

import com.portolfio.backend.exceptions.ResourceNotFoundException;
import com.portolfio.backend.modules.contact.dto.request.ContactRequest;
import com.portolfio.backend.modules.contact.dto.response.ContactResponse;
import com.portolfio.backend.modules.contact.entity.ContactEntity;
import com.portolfio.backend.modules.contact.mapper.ContactMapper;
import com.portolfio.backend.modules.contact.repository.ContactRepository;
import com.portolfio.backend.modules.contact.service.interfaces.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;


    @Override
    public ContactResponse createContact(ContactRequest contactRequest) {

        ContactEntity contact = contactMapper.toEntity(contactRequest);
        contactRepository.save(contact);

        return contactMapper.toResponse(contact);
    }

    @Override
    public List<ContactResponse> getAllContacts() {
        return contactRepository.findAll().stream()
                .map(contactMapper::toResponse)
                .toList();
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
