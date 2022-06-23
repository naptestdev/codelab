import type { GetStaticProps, NextPage } from "next";

import { GET_HOME_DATA } from "../graphql/queries/home";
import Link from "next/link";
import { client } from "../graphql/client";

interface HomeProps {
  data: { posts: any[] };
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div>
      {data.posts.map((item) => (
        <div key={item.id}>
          <Link href={`/post/${item.slug}`}>
            <a className="text-blue-400">{item.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(GET_HOME_DATA);

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
