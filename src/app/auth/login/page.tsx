import AuthContainer from "@/components/Auth/AuthContainer";
import LoginForm from "@/components/Auth/LoginForm";

export default function Login() {
  return (
    <AuthContainer color="bg-primary-200" title="Sign In">
      <LoginForm />
    </AuthContainer>
  );
}
