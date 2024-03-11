import RegisterForm from "@/components/Auth/RegisterForm";
import AuthContainer from "../../../components/Auth/AuthContainer";

export default function Register() {
  return (
    <AuthContainer title="Sign Up">
      <RegisterForm />
    </AuthContainer>
  );
}
