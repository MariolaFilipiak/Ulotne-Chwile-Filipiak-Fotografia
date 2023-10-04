import {
  Container,
  ImagesBox,
  Tile,
  Images,
  Paragraph,
  Wrapper,
} from "../Family/styled";

import photo from "../../../../common/Images/repo.png";
import { Header } from "./styled";
import { Footer } from "../../../../common/Footer";

function Reports() {
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
              Marzysz o zachowaniu najważniejszych chwil podczas wyjątkowych
              okazji? Reportaże okolicznościowe to idealny sposób na
              uwiecznienie magicznych momentów podczas ślubów, wesel, imprez
              rodzinnych, wieczorów panieńskich i innych <b>niezapomnianych</b>
              wydarzeń.
            </h2>
            <h3>Co oferuję?</h3>
            Oferta obejmuje profesjonalne reportaże okolicznościowe, które
            oddają atmosferę i emocje towarzyszące każdemu wydarzeniu. Zdjęcia
            będą opowiadać historię tego wyjątkowego dnia lub wieczoru,
            zatrzymując każdy uśmiech, łzę szczęścia, taniec i chwilę radości.
            Dzięki nam będziesz mógł wracać do tych chwil i przeżywać je na nowo
            przez lata.
            <h3>Różnorodność okazji</h3>
            Fotografuje różne okazje, takie jak śluby, wesela, jubileusze,
            chrzciny, urodziny, imprezy rodzinne, wieczory panieńskie, wieczory
            kawalerskie, oraz wiele innych. Niezależnie od tego, jaka okazja Cię
            inspiruje, jestem gotowa uchwycić jej istotę i piękno.
            <h3>Kreatywność i elastyczność</h3>
            Jestem otwarta na Twoje pomysły i sugestie. Chcę dostosować się do
            Twoich potrzeb, aby każdy reportaż był wyjątkowy i spełniał Twoje
            oczekiwania. Niezależnie od tego, czy marzysz o tradycyjnym
            reportażu, czy też bardziej kreatywnych i niekonwencjonalnych
            ujęciach, jestem gotowa zrealizować Twoją wizję.
            <h3>Cena ustalana indywidualnie</h3>
            Cena za usługi reportażowe jest ustalana indywidualnie, z
            uwzględnieniem Twoich potrzeb, rodzaju wydarzenia oraz zakresu
            usług, które wybierzesz. Jestem elastyczna i gotowa dostosować
             ofertę do Twojego budżetu, zapewniając Ci doskonałe wartości
            za konkurencyjne ceny.
          </Paragraph>
        </Tile>
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Reports;
