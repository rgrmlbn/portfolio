package com.portolfio.backend.modules.contact.mapper;

import com.portolfio.backend.modules.contact.dto.request.ContactRequest;
import com.portolfio.backend.modules.contact.dto.response.ContactResponse;
import com.portolfio.backend.modules.contact.entity.ContactEntity;
import org.springframework.stereotype.Component;

@Component
public class ContactMapper {

    public ContactEntity toEntity(ContactRequest request) {

        return ContactEntity.builder()
                .name(request.getName())
                .email(request.getEmail())
                .message(request.getMessage())
                .build();
    }

    public ContactResponse toResponse(ContactEntity entity) {

        return ContactResponse.builder().
                id(entity.getId()).
                name(entity.getName()).
                email(entity.getEmail()).
                message(entity.getMessage()).
                build();
    }

}
