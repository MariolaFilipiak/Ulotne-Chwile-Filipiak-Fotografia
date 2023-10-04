import {
  Container,
  ImagesBox,
  Tile,
  Images,
  Paragraph,
  Wrapper,
} from "../Family/styled";
import photo from "../../../../common/Images/ciąża.png";
import { Header } from "./styled";
import { Prices } from "../Prices/Prices";
import { Footer } from "../../../../common/Footer";

function Pregnat() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Tile>
          <ImagesBox>
            <Images src={photo} />
          </ImagesBox>
          <Paragraph>
            <h2>
              Przygotowując się do sesji ciążowych, marzysz o zachowaniu
              niezapomnianych chwil oczekiwania na swoje maleństwo? Moja oferta
              sesji ciążowych pozwoli Ci uwiecznić te <b> magiczne momenty</b> w
              sposób wyjątkowy i pełen miłości.
            </h2>
            <h3>Co oferuję?</h3>
            Oferuję elastyczność w wyborze pakietu sesji zawierającego 10,15
            lub 20 zdjęć, które stworzą prawdziwą opowieść o Waszej rodzinie,
            której centralnym punktem jest szczęście i miłość. Podczas sesji
            stawiam na luźną atmosferę, gdzie każdy może być sobą, bez
            sztuczności czy wymuszania póz. To wtedy, gdy uchwycamy
            <b>najpiękniejsze</b> i <b>niepowtarzalne</b> momenty pełne miłości,
            <b> spontaniczności</b>, <b>uśmiechu</b> i<b> emocji</b>. Dzięki
            sesji ciążowej będziesz mogła podziwiać te <b>piękne wspomnienia</b>{" "}
            przez lata.
            <h3>Sesja z partnerem i dziećmi</h3>
            Jeśli chcesz, możesz zaprosić swojego partnera oraz inne dzieci na
            sesję, aby razem stworzyć <b> niezapomniane chwile</b> oczekiwania
            na nowego członka rodziny. Sesja ciążowa jest doskonałą okazją do
            uwiecznienia
            <b> miłości</b> i jedności Waszej rodziny w tym wyjątkowym okresie.
            <h3>Sukienki ciążowe na sesję</h3>
            Jeśli chcesz podkreślić swoją naturalną urodę i blask w trakcie
            sesji, mam dla Ciebie wybór sukienek ciążowych. Sukienki są zarówno
            stylowe, jak i wygodne, co sprawi, że będziesz czuć się pewnie i
            komfortowo podczas sesji. Za korzystanie z sukienek ciążowych
            pobierana jest <b>dodatkowa opłata</b> w wysokości 50 zł do
            wybranego pakietu sesji.
            <h3>Plener czy dom? </h3>
            Sesje ciążowe mogą odbywać się na świeżym powietrzu, w <b>plenerze</b>, lub
            w Twoim <b>domu</b>. To Ty decydujesz, gdzie czujesz się najbardziej
            swobodnie, abym mogła uwiecznić Waszą rodzinę i historię w
            najpiękniejszy sposób.
            <h3>Czas trwania sesji</h3>
            Nie stawiam surowych ograniczeń czasowych podczas sesji ciążowych.
            Rozumiem, że każda ciąża jest inna, a te <b> wyjątkowe chwile</b> nie
            powinny być liczone co do minuty. Dlatego czas trwania sesji jest
            dostosowany indywidualnie do Twoich potrzeb i momentów, które chcesz
            uwiecznić. Moim celem jest uchwycenie <b>najważniejszych</b> chwil
            Twojego życia bez pośpiechu i presji zegara.
          </Paragraph>
        </Tile>
        <Prices />
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Pregnat;
