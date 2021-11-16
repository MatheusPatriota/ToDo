import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import QRCODEPageStyles from "./styles";
import { ImQrcode } from "react-icons/im";

function QRCODEPage() {
  return (
    // isso é um fragment
    <>
      <Header />
      <QRCODEPageStyles>
        <span>Escaneie o QRCODE pra sincronizar</span>
        <div className="qrcodeContainer">
          <ImQrcode />
        </div>
      </QRCODEPageStyles>
      <Footer />
    </>
  );
}

export { QRCODEPage };
