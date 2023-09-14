import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import {TbTruckReturn} from 'react-icons/tb'
import { FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'
import tw from 'tailwind-styled-components'

const HeaderContainer = tw.div`
    max-w-[1520px] 
    mx-auto 
    flex 
    justify-between 
    itens-center 
    p-4
`
const Delivery = tw.div`
    hidden 
    lg:flex 
    tems-center 
    bg-gray-200 
    rounded-full 
    p-1 
    text-[14px]
`
const Inputpesquisa = tw.div`
    bg-gray-200
    rounded-full 
    flex 
    items-center 
    px-2 
    w-[200px] 
    sm:w-[400px] 
    lg:w-[500px]
`
const CarrinhoBtn = tw.button`
    bg-orange-700 
    text-white 
    hidden 
    md:flex 
    items-center 
    py-2 
    rounded-full
`

const Header = () => {

    const [sidenav, setSidenav] = useState(false)

    return(
        <HeaderContainer>

            <div className='flex items-center'>

                <div onClick={() => setSidenav(!sidenav) } className="cursor-pointer">
                    <AiOutlineMenu size={25}/> 
                </div>
 
                <h1 className='text-2xl sm:text-2xl lg:text-3xl px-2 '>Yum 
                    <span className='font-bold'>Food</span>
                </h1>
               
                <Delivery>
                    <p className="bg-orange-700 text-white rounded-full p-2 text-bold">Free</p>
                    <p className="p-2 text-bold">Delivery</p>
                </Delivery>
            </div>

            <Inputpesquisa>
                <AiOutlineSearch size={25} />
                <input
                className="bg-transparent p-2 w-full focus:outline-none"
                type="text"
                placeholder="Pesquise sua comida..."
                />
             </Inputpesquisa>

            <CarrinhoBtn>
                <BsFillCartFill size={20} /> Carrinho
            </CarrinhoBtn>

            {
                sidenav ? (
                    <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" 
                    onClick={() => setSidenav(!sidenav) }> </div>
                    
                ) : ("")
            }

            {/*Menu lateral*/}
            <section className={sidenav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" } >

                <AiOutlineClose onClick={() => setSidenav(!sidenav)} size={25} className='absolute right-4 top-4 cursor-pointer'/>
                
                <h2 className='text-2xl p-4'>Yum <span className='text-orange-700 font-bold'>Food</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-900">
                    <li className="text-xl py-4 flex">
                        <BsPerson size={25}
                        className='mr-4 text-white bg-black rounded-full'
                        />
                        Minha conta
                    </li>
                    <li className="text-xl py-4 flex">
                        <TbTruckReturn size={25}
                        className='mr-4 text-white bg-black rounded-full'
                        />
                        Delivery
                    </li>
                    <li className="text-xl py-4 flex">
                        <MdOutlineFavorite size={25}
                        className='mr-4 text-white bg-black rounded-full'
                        />
                        Meus favoritos
                    </li>
                    <li className="text-xl py-4 flex">
                        <FaGoogleWallet size={25}
                        className='mr-4 text-white bg-black rounded-full'
                        />
                        Minha carteira
                    </li>
                    <li className="text-xl py-4 flex">
                        <MdHelp size={25}
                        className='mr-4 text-white bg-black rounded-full'
                        />
                        Ajuda
                    </li>
                    </ul>
                </nav>

            </section>

        </HeaderContainer>
    )
}

export default Header