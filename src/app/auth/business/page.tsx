import AuthContainer from "@/components/Auth/AuthContainer";
import BusinessForm from "@/components/Auth/BusinessForm";

export default function Register() {
  return (
    <AuthContainer title="Setup Business">
      <BusinessForm />
    </AuthContainer>
  );
}
