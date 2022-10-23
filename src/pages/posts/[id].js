import Layout from "components/Layout";
import Head from "next/head";
import utilStyles from 'styles/utils.module.css';
import { getAllPostIds, getPostData } from 'lib/posts';
import Date from "components/Date";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export default function Post({ postData, preview }) {
  console.log(`>>>>>${preview}`)
  const router = useRouter();
  if(router.isFallback) {
    return <div>loading...</div>
  }
  return (
    <>
        <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}
