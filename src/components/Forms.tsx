"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode, Ref } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";

type Forms = Dictionary["forms"];

export function LoginForm({ forms, locale, title }: { forms: Forms; locale: Locale; title: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);
  const timer = useRef(0);
  const live = useRef(true);

  useEffect(() => {
    const saved = window.localStorage.getItem("m2-username");
    if (saved && usernameRef.current) usernameRef.current.value = saved;
    if (saved && rememberRef.current) rememberRef.current.checked = true;
    return () => {
      live.current = false;
      window.clearTimeout(timer.current);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    const username = String(data.get("username") ?? "").trim();
    const password = String(data.get("password") ?? "");
    if (!username) next.username = forms.required;
    if (password.length < 8) next.password = forms.passwordShort;
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (data.get("remember") === "on") window.localStorage.setItem("m2-username", username);
    else window.localStorage.removeItem("m2-username");
    setPending(true);
    timer.current = window.setTimeout(() => {
      if (!live.current) return;
      setPending(false);
      setDone(true);
    }, 450);
  }

  if (done) return <Success text={forms.loginSuccess} />;

  return (
    <form onSubmit={onSubmit} className="surface grid gap-4 rounded-3xl p-5 sm:p-6" noValidate aria-busy={pending || undefined}>
      <h2 className="font-display text-3xl text-cream">{title}</h2>
      <Field
        id="login-username"
        label={forms.username}
        name="username"
        error={errors.username}
        autoComplete="username"
        inputRef={usernameRef}
        className="text-base"
      />
      <Field
        id="login-password"
        label={forms.password}
        name="password"
        type={showPassword ? "text" : "password"}
        error={errors.password}
        autoComplete="current-password"
        className="pr-20 text-base"
        end={
          <button
            type="button"
            className="text-xs font-semibold text-gold"
            aria-pressed={showPassword}
            aria-controls="login-password"
            onClick={() => setShowPassword((value) => !value)}
          >
            {showPassword ? forms.hidePassword : forms.showPassword}
          </button>
        }
      />
      <label className="flex items-center gap-2 text-sm text-cream/85">
        <input ref={rememberRef} type="checkbox" name="remember" className="accent-orange" />
        {forms.remember}
      </label>
      <a href="#login-forgotten" className="text-sm font-semibold text-gold hover:text-gold-soft">
        {forms.forgotDetails}
      </a>
      <button type="submit" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold disabled:opacity-70" disabled={pending}>
        {pending ? forms.checking : forms.submitLogin}
      </button>
      <LocaleLink locale={locale} href="/register" className="text-sm font-semibold text-gold hover:text-gold-soft">
        {forms.registerInstead}
      </LocaleLink>
      <p className="text-xs leading-5 text-muted">{forms.loginNotice}</p>
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
  id,
  className = "",
  inputRef,
  end,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
  id?: string;
  className?: string;
  inputRef?: Ref<HTMLInputElement>;
  end?: ReactNode;
}) {
  const errorId = error && id ? `${id}-error` : undefined;
  return (
    <div className="grid gap-1 text-sm">
      <label htmlFor={id} className="font-medium text-cream">
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={`w-full rounded-xl border border-white/10 bg-[#120e0c] px-3 py-3 text-cream outline-none focus:border-gold ${className}`}
        />
        {end ? <div className="absolute inset-y-0 right-3 flex items-center">{end}</div> : null}
      </div>
      {error ? (
        <span id={errorId} className="text-xs text-orange">
          {error}
        </span>
      ) : null}
    </div>
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
