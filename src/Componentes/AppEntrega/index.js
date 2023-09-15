import ImgApp from "../../Img/app.webp"
import tw from 'tailwind-styled-components'

const CabecalhoDescription = tw.h3`
    text-orange-500  
    font-bold 
    text-2xl 
    text-center
`
const AppContainer = tw.div`
    max-w-[1240px] 
    mx-auto 
    grid 
    md:grid-cols-2
`
const Cabecalho = tw.h1`
    lg:text-3xl 
    md:text-2xl 
    sm:text-3xl 
    text-2xl 
    font-bold 
    py-2
`
const Button = tw.button`
    bg-black 
    text-[#00df9a] 
    w-[200px] 
    rounded-md 
    font-medium 
    my-6 
    mx-auto 
    md:mx-0 
    py-3
`
const Img = tw.img`
    w-[550px] 
    mx-auto 
    my-4
`
const Text = tw.p`
    text-[#00df9a] 
    font-bold 
    md:mt-6
`

const AppEntrega = () => {
    return(
        
        <div className='w-full bg-white py-16 px-4'>
            <CabecalhoDescription>Aplicativo de entrega</CabecalhoDescription>
            <AppContainer>
                <Img src={ImgApp} alt="img app"/>
                <div className='flex flex-col justify-center'>
                    <Text>Baixe o aplicativo</Text>
                    <Cabecalho>Conveniência ilimitada sob demanda</Cabecalho>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                        voluptate reprehenderit dolore autem cum ullam sed odit
                        perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <Button> Testar agora</Button>
                </div>
            </AppContainer>
        </div>

    )
}

export default AppEntrega