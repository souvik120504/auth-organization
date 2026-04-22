"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerType } from "@/lib/types";
import { z } from "zod";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FormData = z.infer<typeof registerType>;

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(registerType),
    defaultValues: {
      orgName: "",
      legalName: "",
      phone: "",
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: FormData) => {
  try {
    await API.post("/auth/register", {
      orgDetails: {
        name: data.orgName,
        legalName: data.legalName,
        contactInfo: {
          email: data.email,
          phone: data.phone,
        },
      },
      name: data.name,
      email: data.email,
      password: data.password,
    });
toast.success("Registration Successful")
    router.push("/auth/login");
  } catch (error: any) {
   toast.error(error?.response?.data?.message || "Something went wrong");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-4">

  <Card className="w-full max-w-lg bg-zinc-900/80 border border-zinc-800 backdrop-blur-lg rounded-2xl shadow-2xl">
    
    <CardHeader className="text-center  space-y-2">
      <CardTitle className="text-3xl font-semibold text-white">
        Create Organization
      </CardTitle>
      <p className="text-xl text-zinc-400">
        Enter your details to get started
      </p>
    </CardHeader>

    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

         
          <FormField
            control={form.control}
            name="orgName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Organization Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            control={form.control}
            name="legalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Legal Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Personal Phone</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

      
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Personal Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-xl">Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="bg-zinc-800 border-zinc-700 text-white focus:ring-1 focus:ring-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200 transition text-xl"
          >
            {form.formState.isSubmitting ? "Creating..." : "REGISTER"}
          </Button>

        </form>
      </Form>
    </CardContent>
  </Card>
</div>
  );
}