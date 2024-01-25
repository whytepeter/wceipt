"use client";

import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Auth Layout</p>

      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
