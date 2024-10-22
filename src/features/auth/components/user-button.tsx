"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Loader } from "lucide-react";
import { useCurrent } from "../api/use-current";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();

  if (isLoading) {
    return (
      <div className="size-10 flex rounded-full items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const { name, email } = user;

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu modal={false}>
      <Avatar className="size-10 hover:bg-opacity-75 transition border border-neutral-300">
        <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
    </DropdownMenu>
  );
};
