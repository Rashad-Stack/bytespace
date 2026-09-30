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
      className="mx-auto w-full max-w-xl px-4 sm:mt-15 md:px-0"
    >
      <FieldGroup className="flex flex-col items-center gap-3 sm:flex-row md:gap-4">
        <Controller
          name="query"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="min-w-0 flex-1" data-invalid={fieldState.invalid}>
              <InputGroup className="h-11 w-full rounded-full bg-white px-4 py-2.5 md:h-13 md:px-6 md:py-3">
                <InputGroupAddon>
                  <Icon
                    src="/icons/search.svg"
                    className="size-5 shrink-0 md:size-6"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Course, topic, creator"
                  autoComplete="off"
                  className="min-w-0 flex-1 body-l placeholder:body-l"
                  style={{
                    fontSize: "clamp(0.8125rem, 2vw, 18px)",
                    width: "100%", // force full width inside the pill
                    minWidth: 0,
                  }}
                />
              </InputGroup>
            </Field>
          )}
        />

        <button
          className="h-11 shrink-0 cursor-pointer rounded-full bg-secondary px-4 py-2.5 body-l font-medium text-neutral-950 max-sm:w-full md:h-13 md:px-6 md:py-3"
          style={{ fontSize: "clamp(0.8125rem, 2vw, 18px)" }}
          type="submit"
        >
          Search
        </button>
      </FieldGroup>
    </form>
  )
}
