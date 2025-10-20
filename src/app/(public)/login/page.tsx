import { LoginForm } from "@/components/molecules/LoginForm";
import { TemplateAuth } from "@/components/templates/TemplateAuth";
import React from "react";

export default function login() {
  return (
    <TemplateAuth>
      <LoginForm />
    </TemplateAuth>
  );
}
