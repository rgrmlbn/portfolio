package com.portolfio.backend.modules.contact.service.implementation;

import com.portolfio.backend.modules.contact.entity.ContactEntity;
import com.resend.Resend;
import com.resend.services.emails.model.CreateEmailOptions;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactEmailServiceImpl {

    private final SpringTemplateEngine templateEngine;

    @Value("${resend.api-key}")
    private String resendApiKey;

    @Value("${app.notification-email}")
    private String ownerEmail;

    @Value("${resend.from-email}")
    private String fromEmail;

    @Async("emailTaskExecutor")
    public void sendContactNotifications(ContactEntity contact) {
        sendNotificationToMe(contact);
//        sendConfirmationToSender(contact);
    }

    private void sendNotificationToMe(ContactEntity contact) {
        try {
            Context context = new Context();
            context.setVariable("senderName", contact.getName());
            context.setVariable("senderEmail", contact.getEmail());
            context.setVariable("message", contact.getMessage());

            String htmlBody = templateEngine.process("email/notifications-me", context);

            Resend resend = new Resend(resendApiKey);

            CreateEmailOptions params = CreateEmailOptions.builder()
                    .from(fromEmail)
                    .to(ownerEmail)
                    .subject("New portfolio message from " + contact.getName())
                    .html(htmlBody)
                    .build();

            resend.emails().send(params);
            log.info("Notification email sent to owner for message from {} on thread {}",
                    contact.getEmail(), Thread.currentThread().getName());

        } catch (Exception e) {
            log.error("Failed to send notification email to owner: {}", e.getMessage(), e);
        }
    }

//    private void sendConfirmationToSender(ContactEntity contact) {
//        if (contact.getEmail() == null || contact.getEmail().isBlank()) {
//            log.warn("No sender email provided, skipping confirmation email for {}", contact.getName());
//            return;
//        }
//
//        try {
//            Context context = new Context();
//            context.setVariable("senderName", contact.getName());
//            context.setVariable("message", contact.getMessage());
//
//            String htmlBody = templateEngine.process("email/notifications-sender", context);
//
//            Resend resend = new Resend(resendApiKey);
//
//            CreateEmailOptions params = CreateEmailOptions.builder()
//                    .from(fromEmail)
//                    .to(contact.getEmail())
//                    .subject("Thanks for reaching out!")
//                    .html(htmlBody)
//                    .build();
//
//            resend.emails().send(params);
//            log.info("Confirmation email sent to {} on thread {}",
//                    contact.getEmail(), Thread.currentThread().getName());
//
//        } catch (Exception e) {
//            log.error("Failed to send confirmation email to sender: {}", e.getMessage(), e);
//        }
//    }
}