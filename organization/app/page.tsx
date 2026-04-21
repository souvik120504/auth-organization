"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { UsersRound , ArrowRight  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Home() {
  const router = useRouter();
  return (
   <div className="min-h-screen w-full bg-gray-950 flex flex-col items-center justify-center px-4 py-10 gap-10">

  {/* TEXT SECTION */}
  <div className="text-white w-full max-w-3xl flex flex-col items-center gap-5 text-center">

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
      WELCOME TO{" "}
      <span className="bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent">
        OUR ORGANIZATION
      </span>
    </h1>

    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-300">
      LEARN PRACTICE AND GAIN EXPERIENCE
    </h2>

    <p className="text-sm sm:text-base md:text-lg font-medium text-gray-200 leading-relaxed">
      We are inviting students to participate in an exciting quiz organized by our organization.
      This quiz is a great opportunity to test your knowledge, learn new things, and compete with
      other talented students in a fun and engaging environment. All participants will get a chance
      to challenge themselves, improve their thinking skills, and gain confidence. We encourage
      every interested student to take part and make the most of this learning experience.
    </p>
  </div>

  {/* ACTION SECTION */}
  <div className="text-white flex flex-col items-center justify-center gap-6 w-full max-w-md">

    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-sky-400 rounded-full">
      <UsersRound size={28} className="text-sky-400" />
    </div>

    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-300 text-center">
      Choose an option to continue
    </h1>

    <div className="flex flex-col gap-4 w-full">

      
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button
            onClick={() => router.push("/auth/register")}
            className="w-full text-black p-5 sm:p-6 font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center gap-3"
          >
            REGISTER <ArrowRight size={20} />
          </Button>
        </HoverCardTrigger>

        <HoverCardContent side="right">
          <Link href="/auth/register" className="text-base sm:text-lg font-semibold text-blue-950">
            Don’t have an account? Register
          </Link>
        </HoverCardContent>
      </HoverCard>

      
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button
            onClick={() => router.push("/auth/login")}
            className="w-full text-black p-5 sm:p-6 font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center gap-3"
          >
            LOGIN <ArrowRight size={20} />
          </Button>
        </HoverCardTrigger>

        <HoverCardContent side="right">
          <Link href="/auth/login" className="text-base sm:text-lg font-semibold text-blue-950">
            Already have an account? Login
          </Link>
        </HoverCardContent>
      </HoverCard>

    </div>
  </div>
</div>
    
  );
}
