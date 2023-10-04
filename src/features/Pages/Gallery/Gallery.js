import photo1 from "./Family/family(1).JPG";
import photo2 from "./Family/family(2).JPG";
import photo3 from "./Family/family(3).JPG";
import photo4 from "./Family/family(4).jpg";
import photo5 from "./Family/family(5).jpg";
import photo6 from "./Family/family(6).jpg";
import photo7 from "./Family/family(7).jpg";
import photo8 from "./Family/family(8).jpg";
import photo9 from "./Individual/individual(1).jpg";
import photo10 from "./Individual/individual(2).jpg";
import photo11 from "./Individual/individual(3).jpg";
import photo12 from "./Individual/individual(4).jpg";
import photo13 from "./Individual/individual(5).jpg";
import photo14 from "./Individual/individual(6).jpg";
import photo15 from "./Individual/individual(7).jpg";
import photo16 from "./Individual/individual(8).jpg";
import photo17 from "./Kids/Kids(1).jpg";
import photo18 from "./Kids/Kids(2).jpg";
import photo19 from "./Kids/Kids(3).jpg";
import photo20 from "./Kids/Kids(4).jpg";
import photo21 from "./Kids/Kids(5).JPG";
import photo22 from "./Kids/Kids(6).jpg";
import photo23 from "./Kids/Kids(7).jpg";
import photo24 from "./Kids/Kids(8).jpg";
import photo25 from "./Kids/Kids(9).jpg";
import photo26 from "./Kids/Kids(10).jpg";
import photo27 from "./Kids/Kids(11).jpg";
import photo28 from "./Kids/Kids(12).jpg";
import photo29 from "./Kids/Kids(13).jpg";
import photo30 from "./Kids/Kids(14).jpg";
import photo31 from "./Kids/Kids(15).jpg";
import photo32 from "./Kids/Kids(16).jpg";
import photo33 from "./Partners/Partners(1).jpg";
import photo34 from "./Partners/Partners(2).jpg";
import photo35 from "./Partners/Partners(3).jpg";
import photo36 from "./Partners/Partners(4).jpg";
import photo37 from "./Partners/Partners(5).jpg";
import photo38 from "./Partners/Partners(6).jpg";
import photo39 from "./Partners/Partners(7).jpg";
import photo40 from "./Partners/Partners(8).JPG";
import photo41 from "./Partners/Partners(9).JPG";
import photo42 from "./Partners/Partners(10).JPG";
import photo43 from "./Partners/Partners(11).JPG";
import photo44 from "./Partners/Partners(12).jpg";
import photo45 from "./Partners/Partners(13).jpg";
import photo46 from "./Partners/Partners(14).jpg";
import photo47 from "./Partners/Partners(15).jpg";
import photo48 from "./Partners/Partners(16).jpg";
import photo72 from "./Partners/Partners(17).jpg";
import photo49 from "./Partners/Partners(18).jpg";
import photo50 from "./Partners/Partners(19).JPG";
import photo51 from "./Partners/Partners(20).jpg";
import photo52 from "./Pregnats/pregnat(1).jpg";
import photo53 from "./Pregnats/pregnat(2).jpg";
import photo54 from "./Pregnats/pregnat(3).jpg";
import photo55 from "./Pregnats/pregnat(4).jpg";
import photo56 from "./Pregnats/pregnat(5).jpg";
import photo57 from "./Pregnats/pregnat(6).jpg";
import photo58 from "./Pregnats/pregnat(7).jpg";
import photo59 from "./Pregnats/pregnat(8).jpg";
import photo60 from "./Pregnats/pregnat(9).jpg";
import photo61 from "./Pregnats/pregnat(10).jpg";
import photo62 from "./Pregnats/pregnat(11).jpg";
import photo63 from "./Pregnats/pregnat(12).jpg";
import photo64 from "./Pregnats/pregnat(13).jpg";
import photo65 from "./Pregnats/pregnat(14).jpg";
import photo66 from "./Reports/reports (1).JPG";
import photo67 from "./Reports/reports (2).JPG";
import photo68 from "./Reports/reports (3).JPG";
import photo69 from "./Reports/reports (4).JPG";
import photo70 from "./Reports/reports (5).JPG";
import { Images, Wrapper } from "./styled";

export const Gallery = () => {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23,
    photo24,
    photo25,
    photo26,
    photo27,
    photo28,
    photo29,
    photo30,
    photo31,
    photo32,
    photo33,
    photo34,
    photo35,
    photo36,
    photo37,
    photo38,
    photo39,
    photo40,
    photo41,
    photo42,
    photo43,
    photo44,
    photo45,
    photo46,
    photo47,
    photo48,
    photo49,
    photo50,
    photo51,
    photo52,
    photo53,
    photo54,
    photo55,
    photo56,
    photo57,
    photo58,
    photo59,
    photo60,
    photo61,
    photo62,
    photo63,
    photo64,
    photo65,
    photo66,
    photo67,
    photo68,
    photo69,
    photo70,
    photo72,
  ];
  return (
    <>
      <Wrapper>
        {photos.map((photo, index) => (
          <Images key={index} src={photo} />
        ))}
      </Wrapper>
    </>
  );
};
