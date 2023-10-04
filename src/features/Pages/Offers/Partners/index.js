import {
  Container,
  ImagesBox,
  Tile,
  Images,
  Paragraph,
  Wrapper,
} from "../Family/styled";
import { Header } from "./styled";
import photo from "../../../../common/Images/pary.png";
import { Footer } from "../../../../common/Footer";
import { Prices } from "../Prices/Prices";

function Partners() {
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
              Marzycie o uwiecznieniu Waszej <b> miłości</b> i
              <b> romantycznych chwil</b>? Sesja zdjęciowa to idealna okazja,
              aby razem spędzić
              <b> niezapomniane chwile</b> i zachować je na lata.
            </h2>
            <h3>Co oferuję?</h3>
            Moja oferta obejmuje sesje zdjęciowe dla par, które są
            <b> pełne emocji </b>i autentycznych chwil. Razem stworzymy
            <b> piękne</b>, <b> naturalne</b> i<b> romantyczne</b> fotografie,
            które będą opowiadały Waszą historię miłości. Podczas sesji stawiam
            na luźną atmosferę, gdzie możecie być sobą, wyrażać swoje uczucia i
            celebrować swoją relację. To wtedy, gdy uda się uwiecznić te
            <b> magiczne momenty</b> pełne bliskości, uśmiechu i namiętności.
            Sesje miłosne przekształcają Waszą <b> miłość</b> w sztukę, którą
            będziecie podziwiać przez całe życie.
            <h3>Lokalizacja </h3>
            Sesje odbywają się w miejscach, które są dla Was istotne. To
            może być ulubione miejsce Waszej randki, romantyczna plaża,
            malowniczy park lub Wasz dom. Chcę, abyście czuli się komfortowo i
            swobodnie, dlatego to Wy macie wpływ na wybór lokalizacji. To
            miejsce powinno odzwierciedlać Waszą <b> miłość </b>i Waszą
            historię.
            <h3>Czas trwania sesji</h3>
            Nie stawiam surowych ograniczeń czasowych. Sesja  to czas
            spędzony razem, gdzie liczy się każdy gest, każdy uśmiech i każda
            chwila. Czas sesji jest dostosowany indywidualnie do Waszych potrzeb
            i emocji, które chcecie wyrazić. Moim celem jest uchwycenie tych
            najważniejszych chwil Waszej <b>miłości</b>, bez pośpiechu i presji zegara.
            Sesja to czas, kiedy możecie skupić się tylko na sobie i na
            Waszych uczuciach.
          </Paragraph>
        </Tile>
        <Prices />
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Partners;
