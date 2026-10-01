"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Button } from "../animate-ui/components/buttons/button"
import { Field, FieldGroup } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import Icon from "./icon"

const searchFormSchema = z.object({
  query: z.string().min(1, "Query is required"),
})

type SearchFormValues = z.infer<typeof searchFormSchema>

type Variant = "hero" | "courses" | "footer"

const variantConfig: Record<Variant, {
  icon: string
  inputType: string
  placeholder: string
  autoComplete: string
  buttonLabel: string
  formClassName: string
}> = {
  hero: {
    icon: "/icons/search.svg",
    inputType: "search",
    placeholder: "Course, topic, creator",
    autoComplete: "off",
    buttonLabel: "Search",
    formClassName: "mx-auto w-full max-w-xl px-4 sm:mt-15 md:px-0",
  },
  courses: {
    icon: "/icons/search.svg",
    inputType: "search",
    placeholder: "Course, topic, creator",
    autoComplete: "off",
    buttonLabel: "Search",
    formClassName: "w-full",
  },
  footer: {
    icon: "/icons/mail.svg",
    inputType: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
    buttonLabel: "Subscribe",
    formClassName: "w-full",
  },
}

interface SearchProps {
  variant?: Variant
  className?: string
  onSearch?: (query: string) => void
}

export default function Search({ variant = "hero", className, onSearch }: SearchProps) {
  const config = variantConfig[variant]

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { query: "" },
  })

  function onSubmit(data: SearchFormValues) {
    console.log("🚀 ~ Search ~ onSubmit ~ data:", data)
    onSearch?.(data.query)
    form.reset()
  }

  return (
    <form
      id={`form-search-${variant}`}
      onSubmit={form.handleSubmit(onSubmit)}
      className={`${config.formClassName} ${className ?? ""}`.trim()}
    >
      <FieldGroup className="flex flex-col items-center gap-3 sm:flex-row md:gap-4">
        <Controller
          name="query"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="min-w-0 flex-1" data-invalid={fieldState.invalid}>
              <InputGroup className="h-11 w-full rounded-full bg-white px-4 md:px-6">
                <InputGroupAddon>
                  <Icon src={config.icon} className="size-5 shrink-0 md:size-6" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  id={field.name}
                  type={config.inputType}
                  aria-invalid={fieldState.invalid}
                  placeholder={config.placeholder}
                  autoComplete={config.autoComplete}
                  className="min-w-0 flex-1 body-l placeholder:body-l"
                  style={{ fontSize: "clamp(0.8125rem, 2vw, 18px)", width: "100%", minWidth: 0 }}
                />
              </InputGroup>
            </Field>
          )}
        />

        <Button type="submit" variant="secondary" size="lg">
          {config.buttonLabel}
        </Button>
      </FieldGroup>
    </form>
  )
}
