package com.portolfio.backend.modules.contact.controller;

import com.portolfio.backend.modules.contact.dto.request.ContactRequest;
import com.portolfio.backend.modules.contact.dto.response.ContactResponse;
import com.portolfio.backend.modules.contact.service.interfaces.ContactService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Valid
public class ContactController {

    private final ContactService contactService;

    @PostMapping()
    ResponseEntity<ContactResponse> createContact(@Valid @RequestBody ContactRequest contactRequest) {

        return ResponseEntity.status(HttpStatus.CREATED).body(contactService.createContact(contactRequest));
    }

    @GetMapping()
    ResponseEntity<List<ContactResponse>> getAllContacts(
            @RequestParam (defaultValue = "0") int page,
            @RequestParam (defaultValue = "10")  int size,
            @RequestParam (required = false ) String name) {

        return ResponseEntity.ok(contactService.getAllContacts(page, size, name));
    }

    @GetMapping("/{id}")
    ResponseEntity<ContactResponse> getContactById(@PathVariable @Positive Long id) {
        return ResponseEntity.ok(contactService.getContactById(id));
    }


    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteContactById(@PathVariable @Positive Long id) {
        contactService.deleteContactById(id);

        return ResponseEntity.noContent().build();
    }
}
