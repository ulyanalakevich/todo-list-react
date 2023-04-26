import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Ulyana Lakevich"
      body={
        <>
          <p>
            Mam na imię Ulyana. Jestem z Białorusi, ale już 6 lat mieszkam w Warszawie. Od wielu lat robię desery i słodycze.
            Niedawno otworzyłam swoją online cukiernię <strong>Macarulio</strong>. Przygotowuję desery na zamówienie. Specjalizuję się na <b>makaronikach</b>. W wolnym czasie pracuję jako modelka.
          </p>
          <p>
            Bardzo lubię zwierzęta. Mieszkam razem ze swoim psem Toffee i papugą Archi.
          </p>
          <p>
            Lubię planować, konstruować i tworzyć tabele. Dlatego ta strona została stworzona przeze mnie, dla takich ludzi jak ja.
          </p>
          <p>
            Moje zainteresowania to taniec, gra na instrumentach muzycznych oraz uprawianie sportu.
            Przez całe życie uważałam że jestem <strong>introwertykiem</strong>. Ale ostatnio pracuję nad komunikatywnością i zaczynam kochać poznawanie nowych ludzi.
            Myślę, że aby coś osiągnąć, musisz iść naprzeciw swoim lękom.
            Jestem osobą, która nie szuka łatwych sposobów na osiągnięcie celu, więc zdecydowałam się pójść na programowanie.
            Teraz uczę się programowania jako <strong>Frontend Developer</strong> w YouCode.
          </p>
        </>
      }
    />
  </Container>
);