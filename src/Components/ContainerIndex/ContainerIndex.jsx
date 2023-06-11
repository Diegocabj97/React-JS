
import "./ContainerIndex.css";

const ContainerIndex = () => {
  return (
    <div className="containerIndex">
      <div style={{ width: "30%" }}>
        <span>
          <i className="fa-solid fa-calendar"></i> <strong>HORARIOS</strong>
        </span>
        

        <p>Lunes a Viernes de 9:30hs. a 18:30hs.</p>
      </div>

      <div style={{ width: "30%" }}>
        <span>
          <i className="fa-solid fa-envelope"></i> <strong>ESCRIBINOS</strong>
        </span>
        <p>diegojadrian97@gmail.com.ar</p>
      </div>
      <div style={{ width: "30%" }}>
        <span>
          <i className="fa-brands fa-whatsapp"></i>
          <strong>WHATSAPP</strong>
        </span>
        <p>+54 9 11-5914-8462</p>
      </div>
    </div>
  );
};

export default ContainerIndex;
