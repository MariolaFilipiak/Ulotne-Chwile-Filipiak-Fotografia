import {
  Button,
  Container,
  Images,
  Paragraph,
  Title,
  Wrapper,
} from "./styled";

import photo9 from "../../../common/Images/photo9.jpg";
import photo6 from "../../../common/Images/photo6.jpg";
import photo17 from "../../../common/Images/photo17.jpg";
import photo7 from "../../../common/Images/photo7.jpg";
import photo16 from "../../../common/Images/photo16.jpg";
import photo14 from "../../../common/Images/photo14.jpg";
import photo18 from "../../../common/Images/photo18.jpg";

export const Content = () => (
  <Wrapper>
    <Container>
      <Paragraph>
        <Title>Sesje rodzinne</Title>
        Sesje rodzinne wykonuję w plenerze i w Waszych domach. Dzieci w każdym
        wieku mogą brać udział w sesji. A może sesja pokoleniowa? Nie ma
        problemu!
        <Button>Zobacz więcej</Button>
      </Paragraph>
      <Images src={photo9} alt="sesje rodzinne" />
    </Container>
    <Container>
      <Images src={photo6} alt="sesje ciążowe" />
      <Paragraph>
        <Title>Sesje ciążowe</Title>
        Sesje ciązowe są niezapomnianą pamiątką zarówno dla przyszłych rodziców
        jak i dla dziecka.Zapraszam Was - zarówno Mamy jak i Waszych partnerów/
        mężów na niezapomniane przeżycie jakim jest sesja ciążowa. A jeśli
        posiadacie już pociechy to zapraszam razem z nimi.
        <Button>Zobacz więcej</Button>
      </Paragraph>
    </Container>
    <Container>
      <Paragraph>
        <Title>Sesje noworodkowe lifestyle</Title>
        Sesje noworodkowe najlepiej wykonać do pierwszego miesiąca życia
        maluszka, jednak sesje lifestalowe dla mnie nie mają takiego
        ograniczenia. Zdjęcia wykonuję w Waszym domu, gdzie maluch czuje się
        najlepiej.
        <Button>Zobacz więcej</Button>
      </Paragraph>
      <Images src={photo17} alt="sesje noworodkowe" />
    </Container>
    <Container>
      <Images src={photo7} alt="sesje dziecięce" />
      <Paragraph>
        <Title>Sesje dziecięce</Title>
        Sesje dziecięce wykonuję w plenerze. Dzieci tak szybko dorastają,
        dlatego zdjęcia są jedyną formą która pozwala nam wracać do wspomnień
        tego pięknego okresu dzieciństwa. Razem stworzymy pamiątkę zarówno dla
        Was rodziów jak i dla dzieci gdy już dorosną.
        <Button>Zobacz więcej</Button>
      </Paragraph>
    </Container>
    <Container>
      <Paragraph>
        <Title>Sesje par</Title>
        Miłość, ah miłość. Uczucia warto uwieczniać na fotografiach. Zapraszam
        Was w plener lub spotykamy się w Waszych czterech kątach. Podczas sesji
        uwiecznię wszystko co najpiękniejsze w miłości!
        <Button>Zobacz więcej</Button>
      </Paragraph>
      <Images src={photo14} alt="photo14.jpg" />
    </Container>
    <Container>
      <Images src={photo16} alt="sesje indywidualne" />
      <Paragraph>
        <Title>Sesje indywidualne</Title>
        Oczywiście każdy z nas czasem potrzebuje zdjęć z samym sobą. Zdjęcia do
        portfolio,cv czy na socjalmedia to idelna okazja do wspólnego wyjścia w
        plener.
        <Button>Zobacz więcej</Button>
      </Paragraph>
    </Container>
    <Container>
      <Paragraph>
        <Title>Reportaże okolicznościowe</Title>
        Ślub , chrzest dziecka, wieczór panieński a może urodziny? Chętnie
        uwiecznie te niezapomniane chwile właśnie dla Was. Poniższy cennik nie
        dotyczy reportaży. Cenę ustalamy indywidualnie
        <Button>Zobacz więcej</Button>
      </Paragraph>
      <Images src={photo18} alt="reportaże okolicznościowe" />
    </Container>
  </Wrapper>
);
