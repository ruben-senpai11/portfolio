"use client"
import { useForm, ValidationError } from '@formspree/react';
import { useTranslations } from 'next-intl';

import { useState } from "react"
import { Console } from "console"

interface Props {
  formId: string;
  useWebsite?: boolean;
  cta: string
}

interface FormData {
  email: string;
  website: string
}


interface Errors {
  email?: string,
  website?: string
}

export default function ContactForm({ formId, useWebsite, cta }: Props) {

  const h = useTranslations('HomePage.hero');

  const [state, handleSubmit] = useForm(formId);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    website: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const errors: Errors = {};

    if (formData.email.trim() === '') {
      errors.email = (c('email-error'));
    }
    if (formData.website.trim() === '') {
      errors.website = (c('website-error'));
    } else
      if (!formData.email.includes('@')) {
        errors.email = (c('invalid-email-error'));
      }
    return errors;
  };


  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    const formIsClean = Object.keys(validationErrors).length === 0;

    if (formIsClean) {
      try {
        const response = await handleSubmit(e);
        setFormData({ email: "", website: "" });
        setFormSent(true)
      } catch (err) {
        console.error("Error submitting the form:", err);
      }
    } else {
      console.log("Validation errors:", validationErrors);
    }

  };

  const [formSent, setFormSent] = useState(false)

  const c = useTranslations('Global.contactForm');

  return (
    <>

      <form onSubmit={handleForm} className={(formSent == false ? "flex flex-col gap-4" : "d-none")}>
        <div className="flex gap-5 pt-4 w-[100%]">
          {useWebsite &&
            <div className="hero-name border-solid flex flex-col gap-2 m-0 w-[100%]">
              <input className="hero-input" type="text " name="website" placeholder={(c('website-placeholder'))} onChange={handleChange} value={formData.website} />
              {errors.website && <span className="error">{errors.website}</span>}
            </div>
          }
          <div className="hero-email border-solid flex flex-col gap-2 m-0 p-0 w-[100%]">
            <input className="hero-input" name="email" type="e-mail" placeholder={(c('email-placeholder'))} onChange={handleChange} value={formData.email} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        {formSent == true &&
          <p className="pt-4">{(c('success-message'))}</p>
        }
        <div className="flex w-100 m-auto">
          <button type="submit" className="btn cta w-100" disabled={state.submitting}>
            <span className="cta-text uppercasef font-extrabold">{cta}</span>
            <span className="cta-transition">
              <span className="inverted-color"></span>
              <span className="current-color"></span>
            </span>
          </button>
        </div>
      </form >

    </>
  );
}