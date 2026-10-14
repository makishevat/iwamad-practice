import { useState } from "react";
import type { ChangeEvent, FocusEvent, SubmitEvent } from "react";
import { Button } from "../components/ui/Button";
import { TextField } from "../components/ui/TextField";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

const initialValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registered, setRegistered] = useState(false);
  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setRegistered(true);
    }
  }

  if (registered) {
    return <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>;
  }

  return (
    <>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullName || submitAttempted ? errors.fullName : undefined}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email || submitAttempted ? errors.email : undefined}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password || submitAttempted ? errors.password : undefined}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword || submitAttempted ? errors.confirmPassword : undefined}
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            I accept the terms
          </label>
          {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
            <p className="field-error">{errors.acceptTerms}</p>
           )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </>
  );
}