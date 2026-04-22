"use client"
import {motion} from "framer-motion"
export default function Writing(){
    return(
 <div className="text-center flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white"
          >
            WELCOME TO{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OUR ORGANIZATION
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-emerald-300 font-medium"
          >
            LEARN • PRACTICE • GAIN EXPERIENCE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Join our interactive quiz program designed to challenge your mind,
            improve your knowledge, and help you grow in a fun competitive
            environment. Compete with others, learn new concepts, and build
            confidence through real participation.
          </motion.p>
        </div>

    );
}