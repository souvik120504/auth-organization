"use client"
import {motion} from "framer-motion"
import { UsersRound } from "lucide-react";
export default function Roundicon(){
    return (
<>
  <motion.div
         animate={{ scale: 1.1, rotate: 360 }}
         transition={{duration:2,repeat: Infinity,ease:'easeOut'}}
          className="w-16 h-16 rounded-full border border-cyan-400 flex items-center justify-center"
        >
          <UsersRound className="text-cyan-400" size={30} />
        </motion.div>

</>
    );
}