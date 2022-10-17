import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

const DynamicUserStatus = dynamic(() => import("../../components/UserStatus"), {
  ssr: false,
});

const RegisterForms = dynamic(() => import("../../components/RegisterForms"), {
  ssr: false,
});

type Data = {
  slug: string;
  authed: boolean;
};

const Canvas = ({
  slug,
  authed,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {!authed && <RegisterForms />}
      {authed && <DynamicUserStatus />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const cookies = ctx.req.cookies;

  const authed = Object.keys(cookies).includes(`canvas-${slug}`);

  const data: Data = { slug: typeof slug === "string" ? slug : "", authed };

  return {
    props: data,
  };
};

export default Canvas;
