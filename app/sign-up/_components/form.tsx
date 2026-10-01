"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Controller } from "react-hook-form"
import useSignUp from "./use-sign-up"

export default function Form() {
  const { form, onSubmit } = useSignUp()
  return (
    <form
      id="form-rhf-demo"
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-[24px] bg-white p-10"
    >
      <p className="body-l text-primary-800">Create an Account</p>
      <h4 className="heading-m text-neutral-950">Welcome to ByteSpace</h4>

      <FieldGroup className="mt-10">
        <Controller
          name="fullName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="label-s text-neutral-950"
              >
                Full Name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Jamie Davis"
                autoComplete="off"
                className="h-11 border border-neutral-100 px-6 py-3 body-l text-neutral-950 placeholder:body-l placeholder:text-neutral-400"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="label-s text-neutral-950"
              >
                Email
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="designer@example.com"
                autoComplete="off"
                className="h-11 border border-neutral-100 px-6 py-3 body-l text-neutral-950 placeholder:body-l placeholder:text-neutral-400"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="label-s text-neutral-950"
              >
                Password
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="********"
                autoComplete="off"
                className="h-11 border border-neutral-100 px-6 py-3 body-l text-neutral-950 placeholder:body-l placeholder:text-neutral-400"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button variant="secondary" type="submit" className="ml-auto w-fit">
          Continue
        </Button>
      </FieldGroup>

      <p className="mt-30.5 text-center body-m text-neutral-700">
        Already have an account?{" "}
        <Link href="/sign-in" className="body-m text-primary-800">
          Login
        </Link>
      </p>
    </form>
  )
}
