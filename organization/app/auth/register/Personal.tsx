"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Personal({ data, setData, next }: any) {
  const form = useForm({
    defaultValues: {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    },
  });

  const onSubmit = (values: any) => {
    setData({ ...data, ...values });
    next();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          PERSONAL DETAILS
        </h2>
        <p className="text-zinc-400 text-lg">
          Tell us about yourself
        </p>
      </div>

      
      <div className="space-y-5 text-lg">
        <Input placeholder="Full Name" {...form.register("name")} className="text-xl text-white"/>
        <Input placeholder="Email Address" {...form.register("email")} className="text-xl text-white"/>
        <Input type="password" placeholder="Password" {...form.register("password")} className="text-white text-xl"/>
        <Input placeholder="Phone Number" {...form.register("phone")} className="text-white text-xl"/>
      </div>

    
      <Button className="w-full font-semibold text-black text-2xl py-5 bg-linear-65 from-purple-500 to-pink-500 hover:cursor-pointer">
        NEXT
      </Button>

    </form>
  );
}