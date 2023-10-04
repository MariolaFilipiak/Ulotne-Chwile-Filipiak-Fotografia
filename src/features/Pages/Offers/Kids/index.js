import {
  Container,
  ImagesBox,
  Tile,
  Images,
  Paragraph,
  Wrapper,
} from "../Family/styled";
import photo from "../../../../common/Images/dziecko.png";
import { Header } from "./styled";
import { Footer } from "../../../../common/Footer";
import { Prices } from "../Prices/Prices";

function Kids() {
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
              Oferuję sesje zdjęciowe dla dzieci, które pozostaną
              <b> piękną pamiątką na lata</b>. Sesje te to nie tylko okazja do
              uwiecznienia uroku i niewinności dzieciństwa, ale także szansa na
              stworzenie
              <b> magicznych wspomnień</b> dla Waszej rodziny.
            </h2>
            <h3>Co oferuję?</h3>
            Moja oferta obejmuje sesje zdjęciowe, które są elastyczne i
            dostosowane do Waszych potrzeb. Możecie wybrać pakiet sesji
            zawierający 10,15 lub 20 zdjęć, które będą opowiadać historię
            Waszego dziecka. Podczas sesji stawiam na luźną atmosferę, gdzie
            dzieci mogą <b>być sobą</b>, swobodnie wyrażać siebie i cieszyć się
            chwilą. To wtedy, gdy uda się uwiecznić te{" "}
            <b>niepowtarzalne momenty</b> pełne radości, ciekawości i uśmiechu.
            Sesje dziecięce przekształcają te chwile w <b>piękne wspomnienia</b>
            , które będziecie podziwiać przez lata.
            <h3>Plener czy dom? </h3>
            Sesje zdjęciowe dla dzieci odbywają się w <b>plenerze</b> lub w{" "}
            <b>domu</b>. Chcę, abyście czuli się komfortowo i swobodnie, dlatego
            to Wy macie wpływ na wybór lokalizacji. To miejsce powinno
            odzwierciedlać charakter Waszego dziecka i Waszej rodziny, tworząc
            unikalne tło dla sesji.
            <h3>Czas trwania sesji</h3>
            Nie stawiam surowych ograniczeń czasowych. Rozumiem, że każde
            dziecko jest inne, ma swoje tempo i potrzeby. Dlatego czas sesji
            jest dostosowany do Waszych potrzeb i chwil, które chcecie
            uwiecznić. Moim celem jest uchwycenie tych <b>najważniejszych</b> chwil
            Waszego dziecka, bez pośpiechu i presji zegara. Sesje dziecięce to
            czas spędzony w miłej atmosferze, gdzie liczy się każdy uśmiech i
            każdy szczegół.
          </Paragraph>
        </Tile>
        <Prices />
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Kids;
