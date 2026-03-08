import { AuthForm } from '@/components/forms/auth-form';

export default function LoginPage() {
  return (
    <div className="py-8">
      <AuthForm mode="login" />
    </div>
  );
}
