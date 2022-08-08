// Exemplo de componente react usando props(atributos):

function Subtitle (props) {
  return (
    <h3>{props.text}</h3>
  )
}

Subtitle.defaultProps = {
  text: 'Default'
}

export default Subtitle

/*
  Podemos também usar o destructor, deixando o código um pouco mais clean:

  function Subtitle ({ text }) {
  return (
    <h3>{ text }</h3>
  )
}

*/