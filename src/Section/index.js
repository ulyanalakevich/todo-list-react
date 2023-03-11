import { Content, List, Header, Tasks } from './styled';

const Section = ({ title, body, extraHeaderContent }) => (
  <Content>
    <List>
      <Header>{title}</Header>
      {extraHeaderContent}
    </List>
    <Tasks>
      {body}
    </Tasks>
  </Content>
);

export default Section;