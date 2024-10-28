import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";

export const runtime = 'edge';

const SignUp = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard />;
};

export default SignUp;
