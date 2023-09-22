import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <Navbar />
      <div className="flex grow">{children}</div>
      <Footer />
    </div>
  );
}
