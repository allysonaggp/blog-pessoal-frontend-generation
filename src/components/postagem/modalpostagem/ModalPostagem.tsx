import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";
import "reactjs-popup/dist/index.css"

function ModalPostagem() {
  console.log()
  return (
    <>
      <Popup
        trigger={
          <button className="border-2 rounded px-8 py-4  hover:bg-white hover:text-indigo-800 ">Nova Postagem</button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormPostagem/>
      </Popup>
    </>
  );
}

export default ModalPostagem;
