import styled from "styled-components";
import Avatar from "react-avatar";
import { format } from "date-fns";
import viewport from "../../viewport";

const PageWrapper = styled.div`
  @media ${viewport.sm} {
    margin: 20px 50px;
  }
  @media ${viewport.md} {
    margin: 20px 100px;
  }
  @media ${viewport.lg} {
    margin: 20px 200px;
  }
  @media ${viewport.xl} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 50px 300px;
    justify-content: center;
  }
`;

const Titling = styled.div`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.1px;
  margin-bottom: 50px;
  color: #2e2e2e;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleAvatar = styled(Avatar)`
  margin-right: 15px;
`;
const ByAuthor = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledDate = styled.div`
  color: gray;
  font-size: 13px;
`;

const Paragraph = styled.div`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.6px;
  margin: 25px 0;
  text-align: left;
`;

function Main({ article }) {
  return (
    <PageWrapper>
      <Titling>{article.title}</Titling>
      <AvatarWrapper>
        <StyleAvatar
          size={55}
          round={100}
          src={`http:${article.image.fields.file.url}`}
          layout="responsive"
          objectFit="cover"
        />
        <DateWrapper>
          <ByAuthor>By {article.author}</ByAuthor>
          <StyledDate>{format(new Date(article.date), "PPPP")}</StyledDate>
        </DateWrapper>
      </AvatarWrapper>
      <Paragraph>{article.paragraph}</Paragraph>
      <ByAuthor>By {article.author}</ByAuthor>
    </PageWrapper>
  );
}

export default Main;
