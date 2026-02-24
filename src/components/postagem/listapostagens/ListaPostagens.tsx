import { useNavigate } from "react-router-dom";
import CardPostagem from "../cardpostagem/CardPostagem";
import { useState } from "react";

function ListaPostagens() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postagens, setPostagens] = useState<Postagens[]>([]);
  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-4"
          >
            <CardPostagem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
