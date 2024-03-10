import React from "react";
import Logo from "@/components/global/Logo";
import { useRouter } from "next/navigation";

interface ContainerTypes {
  color?: string;
  title?: string;
  children?: React.ReactNode;
}

function AuthContainer({
  color = "bg-accent",
  title,
  children,
}: ContainerTypes) {
  const router = useRouter();

  return (
    <div
      className={`${color} w-full min-h-screen flex items-center justify-center p-4`}
    >
      <div
        style={{ boxShadow: "0px 0px 18.299999237060547px 0px #383B6612" }}
        className="p-6 sm:p-8 grid grid-cols-1 gap-5 rounded-3xl bg-white w-full max-w-xl"
      >
        <div className="flex items-center gap-3 sm:gap-5">
          <div
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <Logo />
          </div>
          <div className="h-12  border-l border-accent"></div>
          <h3 className="text-xl md:text-2xl text-primary font-bold">
            {title}
          </h3>
        </div>
        <div className="text-dark-300 text-sm sm:text-base">{children}</div>
      </div>
    </div>
  );
}

export default AuthContainer;
