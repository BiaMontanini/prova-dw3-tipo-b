import { Header, Title, Logo } from "../components";
import Busca from "../components/busca";


export default function UserPage() {
  return (
    <div>
      <Header>
        <Title>Prova</Title>
        <Logo />
      </Header>
      <div style={{display: "flex", justifyContent: "center", alignContent: "center" }}>
       <Busca/>
      </div>
    </div>
  );
}
