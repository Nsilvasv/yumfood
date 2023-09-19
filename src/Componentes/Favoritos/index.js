import { Splide, SplideSlide } from '@splidejs/react-splide';
import { favoritos } from "../../data/data";
import '@splidejs/react-splide/css';
import tw from 'tailwind-styled-components'

const Cabecalho = tw.h1`
    text-orange-500 
    font-bold 
    text-2xl 
    text-center 
    py-2
`
const FavContainer = tw.div`
    lg:flex 
    max-w-[1520px] 
    m-auto 
    py-2 
    px-2
`
const Img = tw.img`
    h-[200px] 
    w-full 
    object-cover 
    rounded-3xl 
    cursor-pointer 
    hover:scale-105  
    ease-out 
    duration-300
`
const Button = tw.button`
    border-dotted 
    border-white 
    text-white 
    mx-2 
    absolute 
    bottom-4
`
const DivInfo = tw.div`
    absolute 
    w-full 
    h-full 
    bg-black/50 
    rounded-3xl 
    text-white
`

const Favoritos = () => {
    return(
        <>
            <Cabecalho> Favoritos </Cabecalho>

            <FavContainer>
                <Splide options={{ perPage: 3, gap: "1.5rem", grag: "free", arrows: false }}>
                    {favoritos.map((item) => {
                        return (
                            <SplideSlide key={item.id}>
                                <div className="rounded-3xl relative">
                                    <DivInfo>
                                        <p className="px-2 pt-4 font-bold text-2xl ">
                                            {item.title}
                                        </p>
                                        <p className="px-2">{item.preco}</p>
                                        <Button> Adicionar ao Card </Button>
                                    </DivInfo>
                                    <Img src={item.img} alt={item.title} />
                                </div>
                            </SplideSlide>
                        );
                    })}   
                </Splide>
            </FavContainer>

        </>
    )
}

export default Favoritos