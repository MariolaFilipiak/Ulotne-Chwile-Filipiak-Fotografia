import {
  Container,
  ImagesBox,
  Tile,
  Images,
  Paragraph,
  Wrapper,
} from "../Family/styled";
import photo from "../../../../common/Images//ind.png";
import { Header } from "./styled";
import { Footer } from "../../../../common/Footer";
import { Prices } from "../Prices/Prices";

function Individual() {
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
              Marzysz o wyrażeniu <b>siebie</b> i uwiecznieniu <b> swojej </b> 
               osobowości w niepowtarzalny sposób? Sesja zdjęciowa indywidualna
              to doskonała okazja, aby pokazać <b>swoją</b> autentyczną stronę i
              zachować ją na zawsze.
            </h2>
            <h3>Co oferuję ?</h3>
            Moja oferta obejmuje sesje zdjęciowe, które są indywidualnie
            dostosowane do <b>Ciebie</b> i <b>Twojej</b> osobowości. Razem
            stworzymy fotografie, które będą oddawały Twój <b> charakter</b>,
            <b> pasje </b> i <b> unikalność </b>. Podczas sesji stawiam na luźną i
            przyjazną atmosferę, gdzie możesz być sobą, swobodnie wyrażać siebie
            i eksperymentować. To wtedy, gdy uda się uchwycić Twoją prawdziwą
            esencję, Twoją energię i Twoją
            <b> wyjątkowość</b>. Sesje indywidualne pozwalają Ci być sobą przed
            obiektywem, bez żadnych ograniczeń.
            <h3>Lokalizacja </h3>
            Sesje indywidualne mogą odbywać się w miejscach, które są dla Ciebie
            ważne. To może być ulubione miejsce, które kojarzy się z Twoimi
            pasjami, oryginalna sceneria w mieście lub w przyrodzie. Możesz
            także wybrać sesję w studio, gdzie będziesz mieć pełną kontrolę nad
            światłem i tłem lub w Twoim domu. Wybór lokalizacji zależy tylko od
            Ciebie i od tego, co najlepiej odda Twoją osobowość.
            <h3>Czas trwania sesji</h3>
            Nie stawiam surowych ograniczeń czasowych. Sesja indywidualna to
            czas spędzony na odkrywaniu siebie i wyrażaniu siebie, dlatego nie
            spieszymy się. Czas sesji jest dostosowany indywidualnie do Twoich
            potrzeb i kreatywnych momentów, które chcesz uwiecznić. Moim celem
            jest uchwycenie Twojej autentyczności, <b>bez pośpiechu</b> i presji
            zegara. Sesja indywidualna to czas, kiedy możesz być w pełni sobą i
            <b> wyrazić siebie</b> w wyjątkowy sposób.
          </Paragraph>
        </Tile>
        <Prices />
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Individual;
