import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import Logo from '@/Components/Logo/Logo';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import FieldGroup from '@/Components/Form/FieldGroup';

export default function ForgotPassword() {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route('forget-password.store'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <Head title="Login" />

      <div className="w-full max-w-md">
        <Logo
          className="block w-full max-w-xs mx-auto text-white fill-current"
          height={50}
        />
        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-12">
            <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <div className="grid gap-6">
              <FieldGroup label="Email" name="email" error={errors.email}>
                <TextInput
                  name="email"
                  type="email"
                  error={errors.email}
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                />
              </FieldGroup>

            </div>
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              type="submit"
              loading={processing}
              className="btn-indigo"
            >
              Submit
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
