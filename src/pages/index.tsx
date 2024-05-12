import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/layout/AppLayout";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
