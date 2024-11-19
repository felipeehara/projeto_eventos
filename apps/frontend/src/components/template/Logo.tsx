import { Righteous } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image'

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
})

export const Logo = () => {
    return(
        <Link href="/" className={`flex items-center gap-2 ${fonte.className}`}>
            <Image 
                src="/logo.svg" 
                alt='logo'
                width={50}
                height={50}
            />
            <h1 className='leading-5 flex flex-col item-center text-lg '>
                <div>CONVIT<span className='text-blue-500'>3</span></div>
                <div>DIGITAL</div>
            </h1>
        </Link>
    );
}