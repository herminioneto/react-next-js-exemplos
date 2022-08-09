import { useState } from "react"

import Head from "next/head"

import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"
import Button from "../src/components/button/Button"

function HomePage () {

  const [click, setClick] = useState(0)
  
  const handleClick = () => {
    // console.log("HANDLE CLICK")
    setClick(click + 1)
  }

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
        <Button
          onClick={handleClick}
        >
          Botão Qualquer
        </Button>
        <p>Cliques: {click}</p>
      </div>
    </>
  )
}

export default HomePage