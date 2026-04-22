"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Controller, FormProvider, useFormContext , useFormState } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormField = Controller

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("space-y-2", className)} {...props} />
})
FormItem.displayName = "FormItem"

const FormLabel = Label

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />
})
FormControl.displayName = "FormControl"

const FormMessage = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name]?.message as string | undefined

  if (!error) return null

  return <p className="text-sm text-red-500">{error}</p>
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
}