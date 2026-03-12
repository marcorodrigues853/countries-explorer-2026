import { useRef, useState } from "react";

function ContadorSecreto() {
  const [teste, setTeste] = useState(0);
  const clickCountRef = useRef(0);

  const handleClick = () => {
    clickCountRef.current += 1;
  };

  const showCount = () => {
    console.log(clickCountRef.current);
    setTeste(0);
  };

  return (
    <div>
      <p>Contagem de cliques: {clickCountRef?.current}</p>

      <button onClick={handleClick}>
        <strong>Clique Aqui! vai somar 1</strong>
      </button>
      <button onClick={showCount}>Mostrar Contagem na Consola</button>
    </div>
  );
}

export default ContadorSecreto;
