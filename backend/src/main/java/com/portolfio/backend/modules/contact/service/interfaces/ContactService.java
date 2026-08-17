package com.portolfio.backend.modules.contact.service.interfaces;

import com.portolfio.backend.modules.contact.dto.request.ContactRequest;
import com.portolfio.backend.modules.contact.dto.response.ContactResponse;
import org.hibernate.query.Page;

import java.util.List;

public interface ContactService {

    ContactResponse createContact(ContactRequest contactRequest);

    List<ContactResponse> getAllContacts(int page, int size, String name);

    ContactResponse getContactById(Long id);

    void deleteContactById(Long id);
}
