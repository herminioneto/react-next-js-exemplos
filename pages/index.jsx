import Head from "next/head"

import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function HomePage () {
  // Pode-se usar tanto a tag com fechamento automático quanto a normal:
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Title>Um Título</Title>
        <Subtitle text="Um subtítulo" />
        <Title>Outro Título</Title>
        <Subtitle />
        <p>Um parágrafo qualquer</p>
      </div>
    </>
  )
}

export default HomePage