"use client"

import Icon from "@/components/shared/icon"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Controller } from "react-hook-form"
import useSearchForm from "./use-search"

export default function SearchForm() {
  const { form, onSubmit } = useSearchForm()
  return (
    <form
      id="form-search"
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto max-w-xl"
    >
      <FieldGroup className="flex flex-row items-center gap-4">
        <Controller
          name="query"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-13 rounded-full bg-white px-6 py-3">
                <InputGroupInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Course, topic, creator"
                  autoComplete="off"
                />
                <InputGroupAddon>
                  <Icon src="/icons/search.svg" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          )}
        />

        <button
          className="flex items-center justify-center rounded-full bg-secondary px-6 py-3 body-l font-medium text-neutral-950"
          type="submit"
        >
          Search
        </button>
      </FieldGroup>
    </form>
  )
}
