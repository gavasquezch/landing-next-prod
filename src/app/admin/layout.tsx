import "../globals.css";
import "../assets/css/tailwind.css";
import "../assets/css/materialdesignicons.min.css";
import type { Metadata } from "next";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Provider } from "@/components";
import { RouteGuard } from "@/components/rootLayout/RouteGuard";

export const metadata: Metadata = {
  title: "Information Admin",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <Provider>
      <RouteGuard
        password_change_required={session.user.password_change_required}
        userId={session.user.id}
      >
        {children}
      </RouteGuard>
    </Provider>
  );
}