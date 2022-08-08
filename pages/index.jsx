import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function HomePage () {
  // Pode-se usar tanto a tag com fechamento automático quanto a normal:
  return (
    <div>
      <Title>Um Título</Title>
      <Subtitle text="Um subtítulo" />
      <Title>Outro Título</Title>
      <Subtitle />
    </div>
  )
}

export default HomePage