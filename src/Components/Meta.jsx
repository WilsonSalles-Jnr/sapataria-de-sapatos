export default function Meta({meta, total}) {
  return(
    <article className={meta > total ? "metabox bg-green" : "metabox bg-red" }>
      <h1>Meta:</h1>
      <h1>R$ {meta},00</h1>
      <h3>Total:</h3>
      <h3>R$ {total},00</h3>
      {meta > total ? <p>A meta ainda não foi atingida</p> : <p>Parabéns, a meta foi atingida</p>}
    </article>
  )
}