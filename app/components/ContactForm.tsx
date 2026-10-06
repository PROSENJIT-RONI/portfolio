"use client";

import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import styles from "../page.module.css";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitState = "idle" | "success" | "error" | "config";

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(values: FormValues): FormErrors {
  const nextErrors: FormErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    nextErrors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Please enter a message.";
  }

  return nextErrors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const accessKey = useMemo(
    () => process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "",
    [],
  );

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const honeypotValue = new FormData(event.currentTarget).get("botcheck");
    if (typeof honeypotValue === "string" && honeypotValue.trim()) {
      return;
    }

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    if (!accessKey) {
      setSubmitState("config");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: values.name,
          replyto: values.email,
          botcheck: "",
        }),
      });

      const data: unknown = await response.json();

      if (
        !response.ok ||
        typeof data !== "object" ||
        data === null ||
        !("success" in data) ||
        data.success !== true
      ) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "message" in data &&
          typeof data.message === "string"
            ? data.message
            : "Submission failed";
        throw new Error(message);
      }

      setValues(initialValues);
      setSubmitState("success");
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
    <input type="text" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
    <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className={styles.formError} role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleInputChange}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={styles.formError} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleInputChange}
            autoComplete="off"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className={styles.formError} role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className={styles.formError} role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {submitState === "config" && (
        <p className={styles.formNotice} role="alert">
          The contact form is not configured yet. Please email me directly at{" "}
          <a href="mailto:prosenjitswarnakar2002@gmail.com">
            prosenjitswarnakar2002@gmail.com
          </a>
          .
        </p>
      )}

      {submitState === "success" && (
        <p className={styles.formSuccess} role="status" aria-live="polite">
          Thanks! Your message has been sent successfully.
        </p>
      )}

      {submitState === "error" && (
        <p className={styles.formErrorMessage} role="alert" aria-live="assertive">
          Something went wrong while sending your message. Please try again or email me
          directly.
        </p>
      )}

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
