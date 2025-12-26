"use client";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <OrganizationSwitcher hidePersonal />
          <Button onClick={() => addUser()}>Add</Button>
          <div className="max-w-sm w-full mx-auto"></div>
          {JSON.stringify(users, null, 2)}
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>must be signed in</p>
        <SignInButton>Sign in </SignInButton>
      </Unauthenticated>
    </>
  );
}
