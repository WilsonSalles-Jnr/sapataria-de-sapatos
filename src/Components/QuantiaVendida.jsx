import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

export default function QuantidadeVendida({data}) {
  return(
    <article className='resultBox'>
      <h1>Quantidade Vendida Por Mês</h1>
      <LineChart
        width={650}
        height={150}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey='quantia'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='mes'/>
        <Legend />
      </LineChart>
    </article>
      )

}