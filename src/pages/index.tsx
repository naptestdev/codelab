import type { GetStaticProps, NextPage } from "next";

import { GET_HOME_DATA } from "../graphql/queries/home";
import Link from "next/link";
import { client } from "../graphql/client";

interface HomeProps {
  data: { sections: any[] };
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div className="flex justify-center mx-3 my-6">
      <div className="w-full max-w-[800px] flex flex-col items-stretch gap-4">
        {data.sections.map((section) => (
          <div key={section.id}>
            <div className="bg-[#ececec] py-3 px-4 rounded text-xl">
              {section.title}
            </div>

            <div className="flex flex-col p-4 bg-white rounded text-lg">
              {section.posts.length === 0 && (
                <p className="text-gray-400">Chưa có bài giảng nào</p>
              )}
              {section.posts.map((item: any) => (
                <Link href={`/post/${item.slug}`} key={item.id}>
                  <a className="text-blue-600">{item.title}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
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
