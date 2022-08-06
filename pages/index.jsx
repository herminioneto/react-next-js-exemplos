import Title from "../src/components/title/Title"

function HomePage () {
  // Pode-se usar tanto a tag com fechamento automático quanto a normal:
  return (
    <div>
      <Title />
      <Title></Title>
      <h3>Hello World NextJs + ReactJs</h3>
      <h4>Atualizando Servidor</h4>
    </div>
  )
}

export default HomePage