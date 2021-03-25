import styled from "styled-components";
import Avatar from "react-avatar";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 50px 300px;
  justify-content: center;
`;

const Titling = styled.div`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.1px;
  margin-bottom: 20px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleAvatar = styled(Avatar)`
  margin-right: 10px;
`;
const ByAuthor = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.6px;
  margin: 40px 0;
  text-align: left;
`;

function Main({ article }) {
  return (
    <PageWrapper>
      <Titling>{article.title}</Titling>
      <AvatarWrapper>
        <StyleAvatar
          size={45}
          round={100}
          src={`http:${article.image.fields.file.url}`}
          layout="responsive"
          objectFit="cover"
        />
        <ByAuthor>By {article.author}</ByAuthor>
      </AvatarWrapper>
      <Paragraph>{article.paragraph}</Paragraph>
    </PageWrapper>
  );
}

export default Main;
