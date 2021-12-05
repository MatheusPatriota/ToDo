import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import QRCODEPageStyles, { MacAddressInputStyles } from "./styles";
import Qr from "qrcode.react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import IsConnected from "../../utils/IsConnected";
function QRCODEPage() {
  const [macaddress, setMacaddress] = useState(IsConnected || "");
  const [redirect, setRedirect] = useState(false);

  async function saveMacaddress() {
    if (macaddress === "") {
      alert("macaddress invalido!");
    } else {
      await localStorage.setItem("@todo/macaddress", macaddress);
      // window.location.reload();
      setRedirect(true);
    }
  }
  useEffect(() => {}, [IsConnected]);

  return (
    <>
      {redirect && <Navigate to="/" />}
      <Header />
      <QRCODEPageStyles>
        <span>Capture o QRCODE com o APP</span>
        <p>Suas atividades serão sincronziadas com as do Celular</p>
        <div className="qrcodeContainer">
          <Qr value="getmacaddress" size={350} />
        </div>
        <MacAddressInputStyles>
          <p>Informe o MacAddress que apareceu no Celular</p>
          <input
            type="text"
            name="macaddress"
            id="mac"
            onChange={(e) => setMacaddress(e.target.value)}
            value={macaddress}
          />
          <button type="button" onClick={saveMacaddress}>
            Sincronizar
          </button>
        </MacAddressInputStyles>
      </QRCODEPageStyles>
      <Footer />
    </>
  );
}

export { QRCODEPage };
