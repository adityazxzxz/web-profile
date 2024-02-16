import Button from '../atoms/Button'
import Subtitle from '../atoms/Subtitle'
import HeroAvatar from '../atoms/HeroAvatar'
export default function Hero() {
    return (
        <section id='home' className='pt-32'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-15 lg:px-24 lg:w-1/2">
                        <h1 className='text-base font-semibold text-primary md:text-xl'>Hello there, I am <span className='block text-dark text-4xl lg:text-5xl'>Aditya Pratama</span></h1>
                        <Subtitle />
                        <p className='font-medium text-slate-400 mb-10 leading-relaxed'>keep learning, stay humble and stay grateful </p>
                        <Button />
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <HeroAvatar />
                    </div>
                </div>
            </div>
        </section>
    )
}