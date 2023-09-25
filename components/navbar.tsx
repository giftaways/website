import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-center py-5">
      <div className="mx-3 flex w-full max-w-screen-2xl items-center justify-between gap-3 text-center">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={35} height={35} alt="giftaways" />
            <p className="text-lg font-bold">Giftaways</p>
          </div>
        </Link>
        <div className="flex gap-6">
          <Button className="flex gap-3">Support Server</Button>
        </div>
      </div>
    </div>
  );
};
