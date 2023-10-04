import React from "react";
import {
  Container,
  Header,
  Images,
  ImagesBox,
  Paragraph,
  Tile,
  Wrapper,
} from "./styled";
import photo2 from "../../../../common/Images/rodzinne.png";
import { Footer } from "../../../../common/Footer";
import { Prices } from "../Prices/Prices";

export const Family = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Tile>
          <ImagesBox>
            <Images src={photo2} />
          </ImagesBox>
          <Paragraph>
            <h2>
              Marzysz o zachowaniu najpiękniejszych chwil z życia swojej
              rodziny? Sesja rodzinna to idealny sposób na to, by uwiecznić te
              <b> niezapomniane momenty</b>.
            </h2>
            <h3>Co oferuję ?</h3>
            Oferuję elastyczność w wyborze pakietu sesji zawierającego 10, 15
            lub 20 zdjęć, które stworzą prawdziwą opowieść o Waszej rodzinie.
            Podczas sesji stawiam na luźną atmosferę, gdzie każdy może być
            sobą, bez sztuczności czy wymuszania pozów. To wtedy, gdy uchwycamy{" "}
            <b>najpiękniejsze</b> i <b>niepowtarzalne</b> momenty pełne miłości,
            <b> spontaniczności</b>, <b>uśmiechu</b> i<b> emocji</b>. Sesje
            rodzinne przekształcają te chwile w piękne <b>wspomnienia</b>, które
            będziecie podziwiać przez lata.
            <h3>Plener czy dom ? </h3>
            Sesje rodzinne odbywają się w <b>plener</b>ze, w miejscu ustalonym
            wspólnie z klientem <b>lub</b> w <b>dom</b>u u klienta. Chcę,
            abyście czuli się komfortowo i swobodnie, dlatego daję Wam możliwość
            wyboru lokalizacji, która najlepiej odzwierciedla Waszą rodzinę i
            Waszą historię.
            <h3>Czas trwania sesji</h3>
            Co do czasu trwania sesji, nie stawiam na surowe ograniczenia
            czasowe. Rozumiem, że każda rodzina jest inna, a sesje rodzinne nie
            powinny być liczony co do minuty. Dlatego czas sesji jest
            dostosowany indywidualnie do Waszych potrzeb i dynamicznych
            momentów, które chcecie uwiecznić.Moim celem jest
            <b> uchwycenie najważniejszych chwil Waszego życia</b>, bez
            pośpiechu i presji zegara.
          </Paragraph>
        </Tile>
        <Prices />
      </Wrapper>
      <Footer />
    </Container>
  );
};
