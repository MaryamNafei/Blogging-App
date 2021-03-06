import Header from "../src/components/Header";
import Body from "../src/components/Body";

function Home({ articles, entryTitle, header }) {
  return (
    <>
      <Header header={header} />

      <Body articles={articles} />
    </>
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
    content_type: "blog",
  });

  return {
    props: response.items[0].fields,
  };
}

export default Home;
