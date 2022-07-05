import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { GET_POST_BY_SLUG } from "../../graphql/queries/post";
import { client } from "../../graphql/client";
import dynamic from "next/dynamic";
import { markdownToHTML } from "../../shared/utils";

const CodeEditor = dynamic(() => import("../../components/CodeEditor"), {
  ssr: false,
});

interface PostProps {
  post: any;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <div className="px-[3vw] grid grid-cols-[minmax(0px,_600px)_minmax(0px,_100%)] gap-5 my-8">
      <div>
        <h1 className="text-4xl font-medium mb-6">{post.title}</h1>
        <p>{new Date(post.updatedAt).toLocaleString()}</p>

        <article
          className="prose prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-headings:mt-8 prose-headings:mb-6 prose-h1:text-2xl prose-h2:text-2xl prose-h3:text-xl prose-h1:font-semibold prose-strong:font-semibold prose-pre:bg-[#121213] prose-pre:p-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>
      <div className="h-[calc(100vh-56px)] sticky top-14">
        <CodeEditor
          htmlCode={post.htmlCode}
          cssCode={post.cssCode}
          javascriptCode={post.javascriptCode}
        />
      </div>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const data = await client.request(GET_POST_BY_SLUG, { slug });

  const post = {
    ...data.post,
    content: markdownToHTML(data.post.content),
  };

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
