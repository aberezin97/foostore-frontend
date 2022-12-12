import React from "react";

interface PageCenterProps {
  children: React.ReactNode
}

const PageCenter = ({children}: PageCenterProps) => (
  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {children}
  </div>
)

export default PageCenter