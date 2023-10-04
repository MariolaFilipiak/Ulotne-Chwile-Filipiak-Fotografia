import React from "react";
import { Button, Image, Links, Text, Wrapper } from "./styled";
import photo from "../../../common/Images/fotograf.png";

export const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <Image src={photo} />
        <Text>
          <h2>Cześć jestem Mariola</h2>
          Jestem pasjonatką fotografii i programowania, a także mamą dwóch
          cudownych dziewczynek. Moje fotografie to <b>naturalne</b> i
          autentyczne odzwierciedlenie <b>miłości</b>, <b>uśmiechu</b> i
          <b>emocji</b> w rodzinie.
          <h3>Czym się zajmuję ? </h3> Specjalizuję się w
          <Links to={"/oferta/rodzinne"}> sesjach rodzinnych</Links>, gdzie
          chwytam spontaniczne momenty i tworzę pamiątki na całe życie. Wykonuję
          także <Links to={"oferta/ciążowe"}>sesje ciążowe</Links>,
          <Links to={"oferta/dziecięce"}> dziecięce</Links>, dla
          <Links to={"oferta/pary"}> par</Links> oraz
          <Links to={"oferta/indywidualne"}> indywidualne</Links>, dbając o
          unikalność każdej z nich. Tworzę <b>piękne historie</b> o miłości i
          związku podczas sesji par oraz wspaniałe pamiątki podczas
          <Links to={"oferta/reportaże"}> reportaży</Links>.
          <h3></h3>
          <Button to={"oferta"}>Poznaj szczegóły<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></Button>
        </Text>
      </Wrapper>
    </>
  );
};
