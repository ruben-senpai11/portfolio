"use client"
import { useState } from "react"
import { Console } from "console"

import "../css/home.css"
import TinyBborder from "../components/tiny-bborder";
import { useTranslations } from "next-intl";
import { useForm } from "@formspree/react";


/*
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mtwammsrqnqlhxvmybcd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY 
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not defined in environment variables');
}
const supabase = createClient(supabaseUrl, supabaseKey)
*/

interface Props {
}

interface FormData {
  name: string;
  email: string;
  message: string
}


interface Errors {
  name?: string,
  email?: string,
  message?: string,
}


function ContactForm({ }: Props) {

  const [state, handleSubmit] = useForm("xgvvnoyy");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const errors: Errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Veuillez renseigner votre nom ';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Veuillez renseigner votre adresse ';
    }
    if (formData.message.trim() === '') {
      errors.message = 'Veuillez saisir un message ';
    } else
      if (!formData.email.includes('@')) {
        errors.email = "Cette adresse mail est invalide !";
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
        //const response = await handleSubmit(e);
        setFormData({ name: "", email: "", message: "" });
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
      <section id="contact" className="sides-section flex gap-2 ">
        <div className="right-side contact-form py- w-[100%] flex flex-col gap-2 ">
          <form onSubmit={handleForm} className={(formSent == false ? "flex" : "d-none") + " contact-container flex-col gap-10 w-[100%]"}>
            <div className="flex flex-col gap-4 w-[100%] ">
              <h2 className="text-4xl ">{(c('title'))}</h2>
              <h3 className="text- font-[300]">{(c('description'))}</h3>
              <div className="contact-infos flex gap-4 pt-4 w-[100%]">
                <div className="input-name flex flex-col gap-2 m-0 w-[100%]">
                  <p>{(c('name-help'))}</p>
                  <input className="name" type="text " name="name" placeholder={(c('name-placeholder'))} onChange={handleChange} value={formData.name} />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="input-email flex flex-col gap-2 m-0 p-0 w-[100%]">
                  <p>{(c('email-help'))}</p>
                  <input className="email" name="email" type="e-mail" placeholder={(c('email-placeholder'))} onChange={handleChange} value={formData.email} />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
              <div className="input-message flex flex-col gap-2 m-0 pt-4 w-[100%]">
                <p>{(c('message-help'))}</p>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  placeholder={(c('message-placeholder'))}
                  id="message"
                  name="message"
                  className="message"
                  rows={3}
                  minLength={30}>
                </textarea>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
            </div>
            {formSent == true &&
              <p className="pt-4">{(c('success-message'))}</p>
            }
            <div className="flex w-max m-auto">
              <TinyBborder>
                <button type="submit" className="btn cta w-max" disabled={state.submitting}>
                  <span className="cta-text font-medium">{(c('submit'))}</span>
                  <span className="cta-transition">
                    <span className="inverted-color"></span>
                    <span className="current-color"></span>
                  </span>
                </button>
              </TinyBborder>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default ContactForm