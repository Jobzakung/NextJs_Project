import { WelcomePage } from "@/components";
import Image from "next/image";
import { Suspense, lazy } from "react";

export default function Page() {

  const LoadingHome = lazy (() => new Promise<{ default: React.FC }>((resolve) => {
    setTimeout(() => {
      resolve(import('../components/home/home'));
    }, 4000);
  },
  ));

  return (
    <main className="bg-beige_bg w-screen h-screen" >
      <WelcomePage />
      <Suspense fallback={<LoadingHome />}>
      </Suspense>
    </main>
  );
}
