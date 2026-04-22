"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Main() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/users/details");
        const userData = res.data.data || res.data.user || res.data;
        setUser(userData);
      } catch (error) {
        toast.error("Unauthorized. Please login again.");
        router.push("/auth/login");
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black">

      {user ? (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg relative"
        >

          
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl" />

          
          <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-white flex flex-col gap-6">

          
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-3xl font-bold text-center"
            >
              Welcome{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                User
              </span>
            </motion.h1>

            <div className="h-px bg-zinc-800" />

            
            <div className="space-y-5">

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex justify-between text-xl sm:text-base"
              >
                <span className="text-zinc-200 text-2xl font-bold">Name</span>
                <span className="font-medium text-white text-xl">
                  {user?.name ?? "N/A"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between text-sm sm:text-base"
              >
                <span className="text-zinc-400 text-2xl font-bold">Email</span>
                <span className="font-medium text-white break-all text-xl">
                  {user?.email ?? "N/A"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex justify-between text-sm sm:text-base"
              >
                <span className="text-zinc-400 text-2xl font-bold">Organization</span>
                <span className="font-medium text-white text-xl">
                  {user?.orgId?.name || "N/A"}
                </span>
              </motion.div>
            </div>

           
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                localStorage.removeItem("token");
                toast.success("Logged out");
                router.push("/auth/login");
              }}
              className="w-full mt-2 py-3 text-xl rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition"
            >
              LOGOUT
            </motion.button>

           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-sm sm:text-xl text-zinc-500"
            >
              You are successfully logged in
            </motion.div>

          </div>
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-zinc-400 text-xl"
        >
          Loading...
        </motion.div>
      )}
    </div>
  );
}