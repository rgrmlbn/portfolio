// hooks/useSubmitContactForm.js
import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../../services/contactService";

export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: contactApi.submit,
  });
};
