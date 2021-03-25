import Header from "../src/components/Header";
import Main from "../src/components/Main";

function ArticlePage({ article }) {
  return (
    <>
      <Header header={article.header} />
      <Main article={article} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  console.log(slug);

  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "1g2jmpytazu9",
    environment: "master",
    accessToken: "9T2nT5JISm-D-71XVKJwAtNjNpHuGymNHlVwX1YR66U",
  });

  const response = await client.getEntries({
    include: 10,
    content_type: "article",
    "fields.slug": slug,
  });

  return {
    props: { article: response.items[0].fields },
  };
}

export default ArticlePage;
