import type { GetStaticProps, NextPage } from "next";

import { GET_HOME_DATA } from "../graphql/queries/home";
import { client } from "../graphql/client";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

interface HomeProps {
  data: { sections: any[] };
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <div
        className="h-[200px] md:h-[350px] lg:h-[400px] bg-cover bg-no-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url(https://resources.mindx.edu.vn/uploads/images/coverltweb.jpg)",
        }}
      >
        <p className="text-3xl md:text-4xl text-white text-center flex md:block flex-col items-center md:text-left md:uppercase px-[100px] w-full font-semibold">
          <span>Khoá học </span>
          <span>Lập trình Web</span>
        </p>
      </div>
      <div className="flex justify-center mx-3 mt-8 mb-20">
        <div className="w-full max-w-[800px] flex flex-col items-stretch">
          <div className="bg-[#E7323E] py-4 rounded-t text-xl text-center text-white">
            Chương trình Lab
          </div>
          {data.sections.map((section) => (
            <Accordion key={section.id} section={section} />
          ))}
        </div>
      </div>
      <Footer />
    </>
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
