import { FormLogin } from "./_components/FormLogin";
import { Logo } from "./_components/Logo";
export default function Login() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <div className="w-full max-w-md mx-auto p-6">

        {/* Imagem de Logo */}
        <Logo/>

        {/* Card do form de login */}
        <FormLogin/>
        
      </div>
    </div>
  );
}