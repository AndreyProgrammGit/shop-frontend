import { RegisterForm } from "@/components/molecules/RegisterForm";
import { TemplateAuth } from "@/components/templates/TemplateAuth";
import React from "react";

export default function register() {
  return (
    <TemplateAuth>
      <RegisterForm />
    </TemplateAuth>
  );
}
