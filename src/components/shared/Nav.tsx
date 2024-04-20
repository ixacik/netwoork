import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Smile } from "lucide-react";

export default function Nav() {
  return (
    <nav className="w-full h-20 fixed inset-0 bottom-auto flex items-center justify-between bg-nav global-padding">
      <Link href={"/"}>
        <Image
          src={"/assets/brand/logo.svg"}
          width={200}
          height={40}
          alt="Netwoork Logo"
        />
      </Link>
      <Button variant="default">
        <Link href={"/sign-in"}>Prihlásiť sa</Link>
      </Button>
    </nav>
  );
}
