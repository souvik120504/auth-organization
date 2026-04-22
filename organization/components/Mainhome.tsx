"use client"
import { motion } from "framer-motion";
import Logbtn from "@/components/Logbtn"
import Writing from "@/components/Writing"
import Roundicon from "@/components/Roundicon";
import Regisbtn from "@/components/Regisbtn";
export default function Mainhome(){
    return(
 <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col items-center gap-10"
      >
       <Writing />
      <Roundicon />
        <div className="w-full max-w-md flex flex-col gap-5">
          <h3 className="text-center text-emerald-300 text-lg sm:text-xl font-semibold">
            Choose an option to continue
          </h3>
         <Regisbtn />
         <Logbtn />
        </div>
      </motion.div>
    );
}