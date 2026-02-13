import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/Home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>
          <div className="flex gap-4">
            <p>Postagens</p>
            <p>Temas</p>
            <p>Cadastrar</p>
            <p>TemasPerfil</p>
            <p>Sair</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
