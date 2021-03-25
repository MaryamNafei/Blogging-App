import Header from "../src/components/Header";
import Body from "../src/components/Body";

function Featured({ header, entryTitles, articles }) {
  return (
    <div>
      <Header header={header} />
      <Body articles={articles} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "1g2jmpytazu9",
    environment: "master",
    accessToken: "9T2nT5JISm-D-71XVKJwAtNjNpHuGymNHlVwX1YR66U",
  });
  const response = await client.getEntries({
    include: 10,
    content_type: "featuredArticles",
  });

  return {
    props: response.items[0].fields,
  };
}

export default Featured;
