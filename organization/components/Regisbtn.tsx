"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {motion} from "framer-motion"
export default function Regisbtn(){
    const router = useRouter();
    return(
 <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  onClick={() => router.push("/auth/register")}
                  className="w-full py-6 text-black font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition flex items-center justify-center gap-2 rounded-xl"
                >
                  REGISTER <ArrowRight size={20} />
                </Button>
              </motion.div>
            </HoverCardTrigger>

            <HoverCardContent>
              <Link href="/auth/register" className="text-blue-700 font-medium">
                Create your account and start now
              </Link>
            </HoverCardContent>
          </HoverCard>
    );
}