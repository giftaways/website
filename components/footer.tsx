import { GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center py-5 text-sm text-gray-400">
      <div className="mx-3 flex w-full max-w-screen-2xl flex-col items-center justify-between gap-3 text-center md:flex-row">
        <p className="w-[245px]">
          ©{new Date().getFullYear()} Botnatic - All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/imprint">Imprint</Link>
        </div>
        <div className="flex w-[245px] justify-center gap-6 text-lg md:justify-end">
          <GitHubLogoIcon className="scale-150 cursor-pointer" />
          <DiscordLogoIcon className="scale-150 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
