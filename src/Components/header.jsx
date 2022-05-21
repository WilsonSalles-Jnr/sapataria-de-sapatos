export default function Header() {
  return (
    <header className="cabecalho">
      <h1>Sapataria de Sapatos</h1>
      <label htmlFor="filtro">Filtro: 
      <input type={'text'} placeholder="data" name="filtro" id="filtro"/>
      </label>
    </header>
  )
}