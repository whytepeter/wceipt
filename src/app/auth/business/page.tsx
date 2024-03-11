"use client";
import AuthContainer from "@/components/Auth/AuthContainer";
import BusinessForm from "@/components/Auth/BusinessForm";
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
    <AuthContainer title="Setup Business">
      <BusinessForm onDone={onDone} userId={userId!} />
    </AuthContainer>
  );
}
