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
    <div className="min-h-screen w-full m-0 p-0 bg-gray-950 flex flex-col items-center justify-evenly">
      <div className='text-white w-1/2 flex flex-col items-center gap-4'>
        <h1 className='text-4xl font-bold'>
          WELCOME TO <span className='bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent'>OUR ORGANIZATION</span>
        </h1>
        <h2 className='text-2xl font-semibold text-emerald-300'>LEARN PRACTICE AND GAIN EXPERIENCE</h2>
        <p className='text-xl font-semibold'>We are inviting students to participate in an exciting quiz organized by our organization. This quiz is a great opportunity to test your knowledge, learn new things, and compete with other talented students in a fun and engaging environment. All participants will get a chance to challenge themselves, improve their thinking skills, and gain confidence. We encourage every interested student to take part and make the most of this learning experience.
</p>
      </div>
      <div className='text-white flex flex-col items-center justify-center gap-4'>
       <div className="w-16 h-16 flex items-center justify-center border-2 border-sky-400 rounded-full">
  <UsersRound size={32} className="text-sky-400" />
</div>
        <h1 className='text-2xl font-semibold text-emerald-300'>Choose an option to continue</h1>
        <div className='flex flex-col gap-4'>
        <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button onClick={() => router.push("/auth/register")} variant="link" className='text-black p-6 bg-linear-to-r font-bold text-xl from-cyan-500 to-blue-500 flex items-center justify-center gap-4'>REGISTER   <ArrowRight size={20}/></Button>
      </HoverCardTrigger>
      <HoverCardContent side="right">
      <Link href="/auth/register" className='text-xl font-semibold text-blue-950'>Dont have an account ? Register</Link>
      </HoverCardContent>
    </HoverCard>

     <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button onClick={() => router.push("/auth/login")} variant="link" className='text-black p-6  font-bold text-xl bg-linear-to-bl from-violet-500 to-fuchsia-500 flex items-center justify-center gap-4'>LOGIN   <ArrowRight size={20}/></Button>
      </HoverCardTrigger>
      <HoverCardContent side="right">
      <Link href="/auth/login" className='text-xl font-semibold text-blue-950'>Already have an account ? Login</Link>
      </HoverCardContent>
    </HoverCard>
    
    </div>
      </div>
     
    </div>
    
  );
}
