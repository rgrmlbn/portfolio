// services/contactService.js
import api from "./api";

// Matches your ContactEntity fields: name, email, message
export const submitContactForm = (data) => {
  return api.post("/contact", data);
};