import React from 'react';
import Illustration from './components/Illustration';
import Delivery from './assets/illustrations/delivery.png';
import Sun from './assets/illustrations/sunsertao.png';

function App() {
  return (
    <>
      <Illustration
        illustrate={Delivery}
        alt="Ilustração de uma mão entregando um pacote amarelo do Pega! a outra mão"
        title="Entrega facilitada"
        content="Receba sua encomenda em mãos, com o vendedor."
      />
      <Illustration
        illustrate={Sun}
        alt="Ilustração de uma mão entregando um pacote amarelo do Pega! a outra mão"
        title="Nós vendemos no Sertão Central!"
        content="O Pega! foi criado para vender no Sertão Central, aproximando vendedores e compradores da região."
      />
    </>
  );
}

export default App;
