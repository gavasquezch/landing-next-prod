import { FormChangePassword } from "@/components/ui/admin/change-password/FormChangePassword";

interface Props {
  params: Promise<{ idUser: string }>;
}

export default async function ChangePasswordPage({ params }: Props) {
  
  const { idUser } = await params;

  return (
    <div className="container-fluid flex justify-center items-center h-screen bg-gray-100">
      <div className="layout-specing bg-white shadow-lg rounded-md w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Cambio de contraseña
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Por favor realiza el cambio de tu contraseña
          </p>
          <FormChangePassword idUser={idUser} />
        </div>
      </div>
    </div>
  );
}