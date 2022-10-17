import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import QRCode from "qrcode";

type Data = {
  slug: string;
  qr: string;
};

const Canvas = ({
  slug,
  qr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {slug}
      <img src={qr} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;

  let qr = "";

  try {
    qr = await QRCode.toDataURL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/play/${slug}`
    );
  } catch (err) {
    console.error(err);
  }

  const data: Data = { slug: typeof slug === "string" ? slug : "", qr };

  return {
    props: data,
  };
};

export default Canvas;
