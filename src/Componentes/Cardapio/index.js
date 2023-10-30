import { useState } from "react"
import { cardapio } from "../../data/data"
import { BsArrowRightShort } from "react-icons/bs"
import tw from 'tailwind-styled-components'

const ContainerCardapio = tw.div`
    m-auto 
    p-4 
    mt-10
`
const Cabecalho = tw.h1`
    text-orange-500 
    font-bold 
    text-2xl 
    text-center 
    py-2
` 
const Button = tw.button`
    m-1 
    border-orange-700 
    text-white 
    bg-orange-700 
    hover:bg-white 
    hover:text-orange-700 
    hover:border-orange-700
`
const Container = tw.div`
    grid 
    md:grid-cols-2 
    sm:grid-cols-1 
    lg:grid-cols-4 
    gap-6  
    py-4
`
const DivInfo = tw.div`
    border-none 
    hover:scale-105 
    duration-300
`
const Img = tw.img`
    w-full 
    h-[200px] 
    object-cover 
    rounded-lg
`
const TextoPreco = tw.p`
    bg-orange-700 
    h-18 
    w-18 
    rounded-full 
    -mt-10 
    text-white 
    py-4 
    px-2 
    border-8 
    border-white 
    font-bold
`
const TextoVejaMais = tw.p`
    flex 
    items-center 
    text-indigo-600
`

const Cardapio = () => {

    const [comida, setComida ] = useState(cardapio)

    const filtraCategoria = (categoria) => {
        setComida(cardapio.filter( item => {
            return item.categoria === categoria
        }))
    }

    return(
        <ContainerCardapio>
            <Cabecalho> Cardapio </Cabecalho>

            <div className="flex flex-col lg:flex-row justify-center mb-9">
                <div className="flex justify-center md:justify-center">

                    <Button onClick={() => setComida(cardapio)} > 
                        todas
                    </Button>
                    <Button onClick={() => filtraCategoria("pizza")} > 
                        pizza
                    </Button>
                    <Button onClick={() => filtraCategoria("chicken")} > 
                        frango
                    </Button>
                    <Button onClick={() => filtraCategoria("salad")} > 
                        salada
                    </Button>

                </div>
            </div>

            <Container>

                {comida.map( (item) => (
                    <DivInfo key={item.id}>

                        <Img src={item.image}  alt={item.name}/>

                        <div className="flex justify-between py-2 px-2">
                            <p className="font-bold ">{item.name}</p>
                            <TextoPreco>  {item.preco} </TextoPreco>
                        </div>

                        <div className="pl-2 py-4 -mt-7">
                            <TextoVejaMais> Veja mais <BsArrowRightShort className="w-5 ml-2" /> </TextoVejaMais>
                        </div>

                    </DivInfo>
                ))}

            </Container>

        </ContainerCardapio>
    )
}

export default Cardapio