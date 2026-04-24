"use client";

import { useState } from "react";
import Personal from "./Personal";
import Org from "./Org";

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  orgName: string;
  legalName: string;
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    orgName: "",
    legalName: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-950 px-4">
      
      <div className="w-full max-w-md">
        
        <div className="flex items-center justify-center mb-6 gap-2">
          <div className={`h-2 w-10 rounded-full ${step === 1 ? "bg-white" : "bg-zinc-700"}`} />
          <div className={`h-2 w-10 rounded-full ${step === 2 ? "bg-white" : "bg-zinc-700"}`} />
        </div>

       
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          
          {step === 1 && (
            <Personal
              data={data}
              setData={setData}
              next={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <Org
              data={data}
              setData={setData}
              back={() => setStep(1)}
            />
          )}

        </div>
      </div>
    </div>
  );
}