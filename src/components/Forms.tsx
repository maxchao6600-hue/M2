"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Dictionary } from "@/content/types";

type Forms = Dictionary["forms"];

export function LoginForm({ forms }: { forms: Forms }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    const username = String(data.get("username") ?? "").trim();
    const password = String(data.get("password") ?? "");
    if (!username) next.username = forms.required;
    if (password.length < 8) next.password = forms.passwordShort;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      if (data.get("remember") === "on") {
        window.localStorage.setItem("m2-username", username);
      }
      setDone(true);
    }
  }

  if (done) return <Success text={forms.loginSuccess} />;

  return (
    <form onSubmit={onSubmit} className="surface grid gap-4 rounded-3xl p-5 sm:p-6" noValidate>
      <Field label={forms.username} name="username" error={errors.username} autoComplete="username" />
      <Field label={forms.password} name="password" type="password" error={errors.password} autoComplete="current-password" />
      <label className="flex items-center gap-2 text-sm text-cream/85">
        <input type="checkbox" name="remember" className="accent-orange" />
        {forms.remember}
      </label>
      <button type="submit" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
        {forms.submitLogin}
      </button>
    </form>
  );
}

export function RegisterForm({ forms }: { forms: Forms }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    const username = String(data.get("username") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");
    const mobile = String(data.get("mobile") ?? "").replace(/\D/g, "");
    if (!username) next.username = forms.required;
    if (password.length < 8) next.password = forms.passwordShort;
    if (password !== confirm) next.confirm = forms.passwordMismatch;
    if (mobile.length < 8) next.mobile = forms.mobileInvalid;
    if (data.get("age") !== "on") next.age = forms.mustAgree;
    if (data.get("terms") !== "on") next.terms = forms.mustAgree;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  if (done) return <Success text={forms.registerSuccess} />;

  return (
    <form onSubmit={onSubmit} className="surface grid gap-4 rounded-3xl p-5 sm:p-6" noValidate>
      <Field label={forms.username} name="username" error={errors.username} autoComplete="username" />
      <Field label={forms.password} name="password" type="password" error={errors.password} autoComplete="new-password" />
      <Field label={forms.confirmPassword} name="confirm" type="password" error={errors.confirm} autoComplete="new-password" />
      <Field label={forms.mobile} name="mobile" inputMode="tel" error={errors.mobile} autoComplete="tel" />
      <Check label={forms.ageConfirm} name="age" error={errors.age} />
      <Check label={forms.termsConfirm} name="terms" error={errors.terms} />
      <button type="submit" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
        {forms.submitRegister}
      </button>
    </form>
  );
}

export function ContactForm({ forms }: { forms: Forms }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = forms.required;
    if (!String(data.get("contact") ?? "").trim()) next.contact = forms.required;
    if (!String(data.get("message") ?? "").trim()) next.message = forms.required;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  if (done) return <Success text={forms.contactSuccess} />;

  return (
    <form onSubmit={onSubmit} className="surface grid gap-4 rounded-3xl p-5 sm:p-6" noValidate>
      <Field label={forms.name} name="name" error={errors.name} autoComplete="name" />
      <Field label={forms.contactDetail} name="contact" error={errors.contact} autoComplete="email" />
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-cream">{forms.topic}</span>
        <select name="topic" className="rounded-xl border border-white/10 bg-[#120e0c] px-3 py-3 text-cream" defaultValue={forms.topics[0]}>
          {forms.topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-cream">{forms.message}</span>
        <textarea
          name="message"
          rows={5}
          className="rounded-xl border border-white/10 bg-[#120e0c] px-3 py-3 text-cream"
          aria-invalid={errors.message ? true : undefined}
        />
        {errors.message ? <span className="text-xs text-orange">{errors.message}</span> : null}
      </label>
      <button type="submit" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
        {forms.submitContact}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-cream">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        className="rounded-xl border border-white/10 bg-[#120e0c] px-3 py-3 text-cream outline-none focus:border-gold"
      />
      {error ? <span className="text-xs text-orange">{error}</span> : null}
    </label>
  );
}

function Check({ label, name, error }: { label: string; name: string; error?: string }) {
  return (
    <div>
      <label className="flex items-start gap-2 text-sm leading-6 text-cream/85">
        <input type="checkbox" name={name} className="mt-1 accent-orange" />
        <span>{label}</span>
      </label>
      {error ? <span className="text-xs text-orange">{error}</span> : null}
    </div>
  );
}

function Success({ text }: { text: string }) {
  return (
    <div className="surface rounded-3xl p-5 text-sm leading-6 text-cream sm:p-6" role="status">
      {text}
    </div>
  );
}
