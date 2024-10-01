"use client"

import { getSession } from "next-auth/react";

const DashboardPage = async () => {
  const session = await getSession();

  if (!session) {
    return <div>You are not logged in. Please login first.</div>;
  }

  return <div>Logged in as @{session.user?.name}</div>;
};

export default DashboardPage;
