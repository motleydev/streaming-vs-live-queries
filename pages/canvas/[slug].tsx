import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import QRCode from "qrcode";

const DynamicCanvasSVG = dynamic(() => import("../../components/CanvasSVG"), {
  ssr: false,
});

type Data = {
  slug: string;
  qr: string;
};

const Canvas = ({
  slug,
  qr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="h-full">
      {slug}
      <DynamicCanvasSVG slug={slug} />
      <div className="fixed bottom-0 right-24 w-96 h-96 bg-neutral-focus rounded-t-lg flex items-center justify-center overflow-clip">
        <img src={qr} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;

  let qr = "";

  try {
    qr = await QRCode.toDataURL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/play/${slug}`,
      {
        width: 400,
        color: {
          dark: "#6b21a8",
          light: "#ffffff",
        },
      }
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
