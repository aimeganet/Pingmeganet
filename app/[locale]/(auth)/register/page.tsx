import { AuthForm } from '@/components/forms/auth-form';

export default function RegisterPage() {
  return (
    <div className="py-8">
      <AuthForm mode="register" />
    </div>
  );
}
