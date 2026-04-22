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
export default function Logbtn(){
      const router = useRouter();
    return (
        <>
<HoverCard>
            <HoverCardTrigger asChild>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  onClick={() => router.push("/auth/login")}
                  className="w-full py-6 text-black font-bold text-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:opacity-90 transition flex items-center justify-center gap-2 rounded-xl"
                >
                  LOGIN <ArrowRight size={20} />
                </Button>
              </motion.div>
            </HoverCardTrigger>

            <HoverCardContent>
              <Link href="/auth/login" className="text-purple-700 font-medium">
                Welcome back! Continue learning
              </Link>
            </HoverCardContent>
          </HoverCard>
          </>

    );
}