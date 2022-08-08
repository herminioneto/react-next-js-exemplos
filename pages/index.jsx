import Title from "../src/components/title/Title"

function HomePage () {
  // Pode-se usar tanto a tag com fechamento automático quanto a normal:
  return (
    <div>
      <Title>Um Título</Title>
      <p>Parágrafo qualquer</p>
      <Title>Outro Título</Title>
      <p>Outro parágrafo qualquer</p>
    </div>
  )
}

export default HomePage