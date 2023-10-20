import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import tw from 'tailwind-styled-components'

const FooterContainer = tw.div`
    m-auto 
    px-4 
    py-1 
    bg-[#e2e2e2]
`
const SubContainer = tw.div`
    py-3 
    px-4 
    grid 
    lg:grid-cols-3 
    gap-8 
    text-black-300
`
const Cabecalho = tw.h1`
    w-full 
    text-3xl
    font-serif 
    font-black
    text-orange-500
`
const Span = tw.span`
    block 
    text-sm 
    sm:text-center 
    dark:text-black-400
`
const Footer = () => {
    return(

        <FooterContainer>
            <SubContainer>
                <div>
                    <Cabecalho>YumFood</Cabecalho>
            
                    <div className="flex justify-start md:w-[75%] my-3">
                        <FaLinkedin className="cursor-pointer" size={30} />
                        <FaGithubSquare className="cursor-pointer mx-2" size={30} />
                        <FaInstagram className="cursor-pointer" size={30} />
                    </div>
                </div>

            </SubContainer>
            <Span>© 2023 Desenvolvido por Nathan Silva</Span>
        </FooterContainer>

    )
}

export default Footer