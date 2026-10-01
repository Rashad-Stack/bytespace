import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const searchFormSchema = z.object({
  query: z.string().min(1, "Query is required"),
})

export default function useSearchForm() {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  })

  function onSubmit(data: z.infer<typeof searchFormSchema>) {
    console.log("🚀 ~ use-search.ts:13 ~ onSubmit ~ data:", data)
  }

  return {
    form,
    onSubmit,
  }
}
