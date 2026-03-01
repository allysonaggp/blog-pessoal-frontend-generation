import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-x1">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <div>
                <ModalPostagem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
