import React from 'react';

interface PageAuthProps {
  children: React.ReactNode;
  header?: string;
}

const PageAuth = ({ children, header }: PageAuthProps) => (
  <div className="w-full max-w-md space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {header}
      </h2>
    </div>
    {children}
  </div>
);

export default PageAuth;
