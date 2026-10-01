"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
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
              <InputGroup className="h-11 w-full rounded-full bg-white px-4 md:px-6">
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

        <Button type="submit" variant="secondary" size="lg">
          Search
        </Button>
      </FieldGroup>
    </form>
  )
}
