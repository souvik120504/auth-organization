"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginType } from "@/lib/types";
import { z } from "zod";
import API from "@/lib/api";
import {useRouter} from "next/navigation"
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
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

type FormData = z.infer<typeof loginType>;

export default function LoginPage() {
  
  const router = useRouter();
 const form = useForm<FormData>({
  resolver: zodResolver(loginType),
  mode: "onSubmit",
  defaultValues: {
    email: "",
    password: "",
  },
});

  const onSubmit = async (data: FormData) => {
  try {
    const res = await API.post("/auth/login", data);

    localStorage.setItem("token", res.data.accessToken);

    toast.success("Login Successful");

    router.push("/main"); 
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Invalid credentials");
  }
};
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-4">

  <Card className="w-full max-w-md bg-zinc-900/80 border border-zinc-800 backdrop-blur-lg rounded-2xl shadow-2xl">
    
    <CardHeader className="text-center space-y-2">
      <CardTitle className="text-3xl font-semibold text-white">
        Welcome Back
      </CardTitle>
      <p className="text-xl text-zinc-400">
        Login to your account
      </p>
    </CardHeader>

    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
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
            className="w-full text-xl bg-white text-black hover:bg-zinc-200 transition"
          >
            {form.formState.isSubmitting ? "Logging in..." : "LOGIN"}
          </Button>

        </form>
      </Form>
    </CardContent>
  </Card>
</div>
  );
}