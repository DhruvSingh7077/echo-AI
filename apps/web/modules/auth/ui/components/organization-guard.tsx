"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/auth-layout";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organizationId } = useOrganization();
  if (!organizationId) {
    return (
      <div>
        <p>Create an organization !!</p>
      </div>
    );
  }

  return <div>{children}</div>;
};
