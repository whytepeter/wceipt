"use client";
import AuthContainer from "@/components/Auth/AuthContainer";
import BusinessForm from "@/components/Auth/BusinessForm";
import Button from "@/components/global/Button";
import { useAppSelector } from "@/hooks";
import useInitAccount from "@/hooks/useInitAccount";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Register() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { initAccount } = useInitAccount();

  const { user } = useAppSelector((state) => state.auth);

  const userId = searchParams.get("userId") || user?.userId;

  const onDone = async () => {
    user && (await initAccount(user));
    router.replace(`/dashboard`);
  };

  return (
    <AuthContainer title="Business Setup">
      <div className="mt-2 mb-4 flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-primary">
          Welcome aboard, {user?.full_name} ! 🤝
        </h3>
        <p className="text-xs  text-dark-200 font-light">
          Enter your business details to get started with Weceipt.
        </p>
      </div>
      <BusinessForm onDone={onDone} userId={userId!} />

      <div className="flex items-center divide-x-2 gap-2 justify-end text-xs mt-3 -mb-2">
        <Button size="small" color="primary-light" variant="text">
          Privacy Policy
        </Button>
        <Button size="small" color="primary-light" variant="text">
          Sign out
        </Button>
      </div>
    </AuthContainer>
  );
}
