import CustomErrorMain from "@/components/custom_error_pages/CustomErrorMain";
import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
  return <CustomErrorMain statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
