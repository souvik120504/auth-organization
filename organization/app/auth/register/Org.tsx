"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Org({ data, setData, back }: any) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      orgName: data.orgName,
      legalName: data.legalName,
    },
  });

  const onSubmit = async (values: any) => {
  const finalData = { ...data, ...values };

  console.log("FINAL DATA:", finalData);

  if (!finalData.email || !finalData.password) {
    toast.error("Missing personal details!");
    return;
  }

  try {
    await API.post("/auth/register", {
      orgDetails: {
        name: finalData.orgName,
        legalName: finalData.legalName,
        contactInfo: {
          email: finalData.email,
          phone: finalData.phone,
        },
      },
      name: finalData.name,
      email: finalData.email,
      password: finalData.password,
    });

    toast.success("Registration Successful");
    router.push("/auth/login");

  } catch (error: any) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 w-full"
    >
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          ORGANIZATION DETAILS
        </h2>
        <p className="text-zinc-400 text-lg">
          Fill the details
        </p>
      </div>

      
      <div className="space-y-4">
        <Input
          placeholder="Organization Name"
          {...form.register("orgName")}
          className="h-11 text-xl text-white"
        />
        <Input
          placeholder="Legal Name"
          {...form.register("legalName")}
          className="h-11 text-xl text-white"
        />
      </div>

     
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        
        <Button
          type="button"
          variant="outline"
          onClick={back}
          className="w-full sm:w-1/2 text-lg"
        >
          BACK
        </Button>

        <Button
          type="submit"
          className="w-full hover:cursor-pointer text-black font-semibold sm:w-1/2 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        >
          REGISTER
        </Button>

      </div>
    </form>
  );
}