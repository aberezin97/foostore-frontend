import React from "react";
import { useRouteError } from "react-router-dom";
import PageCenter from "../../components/page-center";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <PageCenter>
      Error
    </PageCenter>
  )
}

export default ErrorPage;