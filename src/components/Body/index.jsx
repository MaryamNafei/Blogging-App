import styled from "styled-components";
import Link from "next/link";
import Avatar from "react-avatar";
import { format } from "date-fns";
import viewport from "../../viewport";

const Wrapper = styled.div`
  @media ${viewport.sm} {
    margin: 20px 50px;
  }
  @media ${viewport.md} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px 200px;
    justify-content: center;
  }
`;

const Card = styled.div`
display: flex;
flex-direction: row;  
border: solid white 1px;
  margin: 10px;
  width: 300px
  height: Auto;
  position: relative;
  flex-basis: 30%;
  border-radius: 7px;
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.2);
`;

const StyledAvatar = styled(Avatar)`
  margin: 10px;
`;

const CardBody = styled.div`
  margin: 30px 10px;
  justify-content: space-between;
`;

const StyledAuthor = styled.div`
  font-size: 16px;
  font-weight: regular;
  margin-bottom: 7px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: arial;
  margin: 20px 0 10px 0;
`;

const LinkStyle = styled.a`
  font-size: 14px;
  color: #a85832;
  margin-right: 30px;
`;

const StyledDates = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 30px;
`;

function Body({ articles }) {
  return (
    <Wrapper>
      {articles.map((article) => {
        return (
          <Card>
            <StyledAvatar
              size={60}
              round={100}
              src={`http:${article.fields.image.fields.file.url}`}
              layout="responsive"
              objectFit="cover"
            />
            <CardBody>
              <StyledAuthor>By {article.fields.author}</StyledAuthor>
              <StyledDates>
                {format(new Date(article.fields.date), "PPPP")}
              </StyledDates>
              <StyledTitle> {article.fields.title}</StyledTitle>
              <Link href={article.fields.slug} passHref>
                <LinkStyle> Read More </LinkStyle>
              </Link>
            </CardBody>
          </Card>
        );
      })}
    </Wrapper>
  );
}
export default Body;
