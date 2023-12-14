import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Admin Layout</p>

      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
