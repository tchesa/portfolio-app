import Button from "@/components/form/ui/button";
import Link from "next/link";
import { FiMail } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="py-4 container mx-auto px-8 mb-20 resume-outside">
      <div className="pt-[120px] max-w-[500px]">
        <span className="text-xl">Hi there! I&apos;m</span>
        <span className="font-serif text-5xl text-orange-900 block">Cesar Lima,</span>
        <span className="text-xl">a web developer with expertise in building robust and scalable web applications. With expertise in React, Redux, NextJS, Typescript, CSS, Sass, Tailwind CSS, I&apos;m able to craft custom solutions that meet the unique needs of each project.</span>
      </div>
      <div className="mt-10 text-center">
        <Link href="/contact">
          <Button type="button"><FiMail className="inline mr-2" />Send me a message</Button>
        </Link>
      </div>
    </main>
  )
}
