import { GetStaticProps } from "next";

const AllGames = () => {
  return <div>Enter</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default AllGames;
