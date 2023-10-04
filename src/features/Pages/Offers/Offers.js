import { Footer } from "../../../common/Footer";
import { Container, Header } from "./styled";
import {
  Button,
  Content,
  Paragraph,
  Title,
  Wrapper,
} from "./styled";

export const Offers = () => (
  <Container>
    <Header />
    <Wrapper>
      <Content>
      <Paragraph>
        <Title>Sesje rodzinne</Title>
          Tętniące życiem sesje rodzinne, uwiecznione w najpiękniejszy sposób.
          Oferta obejmuje autentyczne i naturalne sesje zdjęciowe, które oddają
          prawdziwą atmosferę Twojej rodziny. Specjalizuję się w uchwyceniu
          spontanicznych chwil, pełnych miłości, uśmiechu i emocji.
        </Paragraph>
        <Button to="rodzinne">Poznaj szczegóły</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje ciążowe</Title>
          Sesje ciążowe to niezapomniane chwile, uwiecznione w najpiękniejszy
          sposób. Przeżyj magię oczekiwania na swoje maleństwo, będąc w
          otoczeniu natury i pięknych pejzaży. Uchwycę na zdjęciach emocje,
          bliskość i piękno tego wyjątkowego okresu w Twoim życiu.
        </Paragraph>
        <Button to="ciążowe">Poznaj szczegóły</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje dziecięce</Title>
          Specjalizuję się w uchwyceniu dziecięcej spontaniczności, ciekawości i
          uroku. Moje sesje pozwalają maluchom być sobą, co przekłada się na
          wyjątkowe, pełne emocji zdjęcia. Pozwól mi uwiecznić te niezapomniane
          chwile, które staną się skarbem na długie lata.
        </Paragraph>
        <Button to="dziecięce">Poznaj szczegóły</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje par</Title>
          Fotografie to nie tylko obrazy, to opowieść o Waszej miłości i
          związku, która będziecie mogli zachować na zawsze. Ze mną możecie być
          sobą i spędzić wspólny czas w pięknych, naturalnych sceneriach,
          podczas których uwiecznię Wasze unikalne połączenie. Odkryjcie razem
          ze mną siłę emocji i zapiszcie je w pięknych fotografiach."
        </Paragraph>
        <Button to="pary">Poznaj szczegóły</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Sesje indywidualne</Title>
          Moje sesje indywidualne to wyjątkowa okazja do uwiecznienia Twojej
          wyjątkowości. Jako doświadczony fotograf indywidualny, moim celem jest
          stworzenie dla Ciebie niezapomnianych fotografii, które oddadzą Twój
          niepowtarzalny styl i osobowość. Niezależnie od tego, czy marzysz o
          profesjonalnych portretach, artystycznych ujęciach czy innowacyjnych
          fotografiach, jestem tu, by pomóc Ci osiągnąć to, czego potrzebujesz.
        </Paragraph>
        <Button to="indywidualne">Poznaj szczegóły</Button>
      </Content>
      <Content>
        <Paragraph>
          <Title>Reportaże okolicznościowe</Title>
          Jestem tam, gdzie dzieje się coś wyjątkowego, gotowa uchwycić emocje,
          spontaniczność i magię chwili. Moje zdjęcia opowiedzą historię pełną
          życia i uczuć. Niezależnie od tego, czy jest to uroczystość rodzinna,
          jubileusz czy inna ważna okazja, moje obrazy zachowają te
          niezapomniane momenty na zawsze. Pozwól mi opowiedzieć Twoją historię
          w fotografii.
        </Paragraph>
        <Button to="reportaże">Poznaj szczegóły</Button>
      </Content>
    </Wrapper>
    <Footer />
  </Container>
);
