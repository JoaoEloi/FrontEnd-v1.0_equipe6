import "./style.scss";

export default function Reservas() {
  return (
    <>
      <div className="container_reservas">
        <h1 className="h1_da_reserva">
          Aqui é uma rota protegida somente acessada quando o usuário estiver
          logado
        </h1>
      </div>
    </>
  );
}
