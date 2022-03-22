import logo from '../../assets/logo.png';
import draven from '../../assets/Skins/draven.png';
import jarvan from '../../assets/Skins/jarvan.png';
import leona from '../../assets/Skins/leona.png';
import pyke from '../../assets/Skins/pyke.png';
import sett from '../../assets/Skins/sett.png';

const Carrinho= {
    topo:{
        titulo: "Loja de Skins"
    },
    detalhes:{
        nome:"Carrinho de Skins",
        logoEmpresa: logo,
        nomeEmpresa:"RIOT",
        descricao:"Uma empresa que visa sempre a diversão e qualidade para os joadores.",
        preco:"R$ 50,00",
        botao:"Comprar"

    },
    
    itens: {
        titulo: "Skins na Loja",
        lista: [
          {
            nome: "Draven",
            imagem: draven,
          },
          {
            nome: "Jarvan",
            imagem: jarvan,
          },
          {
            nome: "Leona",
            imagem: leona,
          },
          {
            nome: "Pyke",
            imagem: pyke,
          },
          {
            nome: "Sett",
            imagem: sett,
          }
        ]
      }
    }
 

export default Carrinho;    