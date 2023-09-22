import { GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Footer = () => {

    return(
        <div className="w-full py-5 flex justify-center text-gray-400 text-sm bg-gray-900">
            <div className="max-w-screen-2xl flex-col flex text-center items-center w-full justify-between md:flex-row gap-3 mx-3">
                <p className="w-[245px]">©{new Date().getFullYear()} Botnatic - All rights reserved.</p>
                <div className="flex gap-6 items-center">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-service">Terms of Service</Link>
                    <Link href="/imprint">Imprint</Link>
                </div>
                <div className="w-[245px] flex gap-6 text-lg justify-center md:justify-end">
                    <GitHubLogoIcon className="scale-150 cursor-pointer"/>
                    <DiscordLogoIcon className="scale-150 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}