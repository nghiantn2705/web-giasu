'use client';
// import { EmailForm } from "~/components/EmailForm";
import { useFormState } from '@/components/Auth/FormController';
import { FormProvider } from '@/components/Auth/FormController';
// import { PasswordForm } from "~/components/PasswordForm";
import FormName from '@/components/Auth/userform/FormName';
import Address from '@/components/Auth/userform/Address';

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <FormName />;
    case 2:
      return <Address />;
    // case 3:
    //   return <PasswordForm />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <div className="space-y-6">
          <FormProvider>
            <ActiveStepFormComponent />
          </FormProvider>
        </div>
      </div>
    </main>
  );
}
