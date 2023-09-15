import { useState } from "react"
import { BsChevronCompactLeft,  BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import tw from 'tailwind-styled-components'

const SliderContainer = tw.div`
    max-w-[1540px] 
    h-[500px] 
    w-full 
    m-auto 
    py-4 
    px-4 
    relative 
    group
`
const ImgSlider = tw.div`
    w-full 
    h-full 
    rounded-2xl 
    bg-center 
    bg-cover 
    duration-700
`
const BtnPrev = tw.div`
    hidden 
    group-hover:block 
    absolute 
    top-[50%] 
    -translate-x-0 
    translate-y-[-50%] 
    left-5 
    text-2xl 
    rounded-full 
    p-2 
    bg-orange-700 
    text-white 
    cursor-pointer
`
const BtnNext = tw.div`
    hidden 
    group-hover:block 
    absolute 
    top-[50%] 
    -translate-x-0 
    translate-y-[-50%] 
    right-5 
    text-2xl 
    rounded-full 
    p-2 
    bg-orange-700 
    text-white 
    cursor-pointer
`
const CursorPointer =tw.div`
    flex 
    top-4 
    justify-center 
    py-2
`

const Slider = () =>{

    const sliders = [

        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },         
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }  
       
    const nextSlider = () => {
        const isLastSlide  = currentIndex === sliders.length -1
        const newIndex = isLastSlide  ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

    return(
        <SliderContainer>

            <ImgSlider style={{backgroundImage: `url(${sliders[currentIndex].url})`}}> </ImgSlider>

            <BtnPrev>
                <BsChevronCompactLeft onClick={prevSlider}/>
            </BtnPrev>             

            <BtnNext>
                <BsChevronCompactRight onClick={ nextSlider}/>
            </BtnNext>

            <CursorPointer>
             {
                sliders.map((sliderItems, slideIndex)=>(

                   <div key={slideIndex} onClick={() => moveToNextSlide (slideIndex)} className=" text-2xl cursor-pointer">
                        <RxDotFilled/>
                   </div>
                ))
             }
            </CursorPointer>

        </SliderContainer>
    )
}

export default Slider