"use client";
import { Button } from "@/components/ui/button";
import { AddToDiscordBanner } from "./components/addToDiscordBanner";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex grow flex-col">
      <div className="flex max-h-screen grow justify-center">
        <div className="flex h-full w-full max-w-screen-2xl flex-col items-center justify-between gap-6 p-3 md:flex-row">
          <div className="flex w-full justify-center">
            <div className="flex max-w-xl flex-col gap-6">
              <div className="flex pb-1 text-4xl font-semibold">
                <p>Simplify</p>
                <span className="pl-2 text-orange-300">
                  <Typewriter
                    options={{
                      delay: 100,
                      strings: ["hosting", "managing"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <p className="-mt-6 text-4xl font-semibold">
                Giveaways on Discord
              </p>
              <p>
                Looking forwards to host exciting giveaways on your Discord
                server? Look no further! Giftaways is the ultimate solution for
                giveaway management.
              </p>
              <Link href="/invite">
                <Button className="flex items-center gap-2 self-start">
                  <ExternalLinkIcon className="h-4 w-4" />
                  Invite Giftaways
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Image
              src="/placeholder.svg"
              alt="placeholder"
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>
      <AddToDiscordBanner />
    </div>
  );
}
