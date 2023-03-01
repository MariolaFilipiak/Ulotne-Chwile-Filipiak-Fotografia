import {
  Button,
  Paragraph,
  Title,
  Wrapper,
  Container,
  Content,
  Header,
} from "./styled";

import photo9 from "../../../common/Images/photo116.jpg";
import photo6 from "../../../common/Images/photo21.jpg";
import photo17 from "../../../common/Images/photo11.jpg";
import photo7 from "../../../common/Images/photo13.jpg";
import photo16 from "../../../common/Images/photo27.jpg";
import photo14 from "../../../common/Images/photo123.JPG";
import photo18 from "../../../common/Images/photo18.jpg";
import photo8 from "../../../common/Images/photo8.jpg";

export const ContentPage = () => (
  <Container>
    <Wrapper>
      <Content>
        <Paragraph>
          <Title>Sesje rodzinne</Title>
          Sesje rodzinne wykonuję w plenerze i w Waszych domach. Dzieci w każdym
          wieku mogą brać udział w sesji. A może sesja pokoleniowa? Nie ma
          problemu!
        </Paragraph>
        <Button to="/rodzinne">Zobacz więcej</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje ciążowe</Title>
          Sesje ciązowe są niezapomnianą pamiątką zarówno dla przyszłych
          rodziców jak i dla dziecka.Zapraszam Was - zarówno Mamy jak i Waszych
          partnerów/ mężów na niezapomniane przeżycie jakim jest sesja ciążowa.
          A jeśli posiadacie już pociechy to zapraszam razem z nimi.
        </Paragraph>
        <Button to="ciążowe">Zobacz więcej</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje dziecięce</Title>
          Sesje dziecięce wykonuję w plenerze. Dzieci tak szybko dorastają,
          dlatego zdjęcia są jedyną formą która pozwala nam wracać do wspomnień
          tego pięknego okresu dzieciństwa. Razem stworzymy pamiątkę zarówno dla
          Was rodziów jak i dla dzieci gdy już dorosną.
        </Paragraph>
        <Button to="dziecięce">Zobacz więcej</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje par</Title>
          Miłość, ah miłość. Uczucia warto uwieczniać na fotografiach. Zapraszam
          Was w plener lub spotykamy się w Waszych czterech kątach. Podczas
          sesji uwiecznię wszystko co najpiękniejsze w miłości!
        </Paragraph>
        <Button to="pary">Zobacz więcej</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje indywidualne</Title>
          Oczywiście każdy z nas czasem potrzebuje zdjęć z samym sobą. Zdjęcia
          do portfolio,cv czy na socjalmedia to idelna okazja do wspólnego
          wyjścia w plener.
        </Paragraph>
        <Button to="indywidualne">Zobacz więcej</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Reportaże okolicznościowe</Title>
          Ślub , chrzest dziecka, wieczór panieński a może urodziny? Chętnie
          uwiecznie te niezapomniane chwile właśnie dla Was. Poniższy cennik nie
          dotyczy reportaży. Cenę ustalamy indywidualnie
        </Paragraph>
        <Button to="reportaże">Zobacz więcej</Button>
      </Content>
    </Wrapper>
  </Container>
);
