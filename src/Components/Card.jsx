import produtos from '../mock/produto.json'
import generos from '../mock/genero.json'
import funcionarios from '../mock/funcionario.json'
import clientes from '../mock/cliente.json'
import admins from '../mock/admin.json'
import vendas from '../mock/venda.json'
import QuantidadeVendida from './QuantiaVendida'
import ValorPorMes from './ValorPorMes'
import { useEffect, useState } from 'react'

const insereGenero = (json) => {
  const lista = [];
  for (let i = 0; i < json.length; i += 1) {
    lista.push({
      ...json[i],
      genero: generos[json[i].genero - 1].genero
    })
  }
  return lista
}

const tabelaVenda = () => {
  const vendidos = [];
  for (let i = 0; i < vendas.length; i += 1) {
    vendidos.push({
      cliente: clientes[vendas[i].cliente - 1].nome,
      produto: produtos[vendas[i].cliente - 1].nome,
      vendedor: funcionarios[vendas[i].cliente - 1].nome,
      mes: vendas[i].mes,
      ano: vendas[i].ano,
    })
  }
  return vendidos
}

const vendaPorMes = () => {
  const listaMes = []
  const meses = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0};
  const listaVendas = tabelaVenda().filter((ano) => ano.ano === 2021);
  listaVendas.forEach((item) => meses[item.mes] += 1)
  for (let i = 0; i < 12; i += 1 ) { listaMes.push({mes: i + 1, quantia: meses[i + 1]})}
  return listaMes
}

const valorPorMes = () => {
  const listaMes = [];
  const meses = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0};
  const listaProdutos = produtos
  vendas.forEach((item) => meses[item.mes] += listaProdutos[item.produto - 1].preco)
  for (let i = 0; i < 12; i += 1 ) { listaMes.push({mes: i + 1, reais: meses[i + 1]})}
  return listaMes
}

export default function Card() {
  const [vendapm, setVendapm] = useState(vendaPorMes())
  const [valorpm, setValorpm] = useState(valorPorMes())

  useEffect(() => {
      setInterval(() => {
        setVendapm(vendaPorMes())
        setValorpm(valorPorMes())
      }, 5000)
  }, [setValorpm, setVendapm])
  return(
    <main style={{display: 'flex'}}>
      {console.log(valorPorMes())}
      <QuantidadeVendida data={vendapm} />
      <ValorPorMes data={valorpm} />
    </main>
  )
}