"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Main() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/users/details");

        // ✅ FIX: handle different API response shapes
        const userData = res.data.data || res.data.user || res.data;

        console.log("USER DATA:", userData); // debug (remove later)

        setUser(userData);
      } catch (error) {
        toast.error("Unauthorized. Please login again.");
        router.push("/auth/login");
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-4">

      {user ? (
        <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-2xl shadow-2xl p-6 space-y-4 text-white">

        
          <h1 className="text-3xl font-semibold text-center">
            Welcome User
          </h1>

          
          <div className="h-px bg-zinc-800" />

       
          <div className="space-y-3 text-sm">

            <div>
              <span className="text-zinc-400 text-2xl">Name:</span>{" "}
              <span className="font-medium text-xl">
                {user?.name ?? "N/A"}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 text-2xl">Email:</span>{" "}
              <span className="font-medium text-xl">
                {user?.email ?? "N/A"}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 text-2xl">Organization:</span>{" "}
              <span className="font-medium text-xl">
                 {user?.orgId?.name || "N/A"}
              </span>
            </div>


          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem("token");
              toast.success("Logged out");
              router.push("/auth/login");
            }}
            className="w-full mt-4 bg-white text-black py-2 rounded-lg hover:bg-zinc-200 transition"
          >
            Logout
          </button>

          {/* Footer */}
          <div className="pt-2 text-2xl text-zinc-500 text-center">
            You are successfully logged in
          </div>

        </div>
      ) : (
        <div className="text-zinc-400 text-sm">Loading...</div>
      )}

    </div>
  );
}