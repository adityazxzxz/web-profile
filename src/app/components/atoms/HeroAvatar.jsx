export default function HeroAvatar() {
    return (
        <div className="relative mt-10 lg:mt-9 lg:right-0">
            <img src={`/avatar/avatar.png`} alt={'Avatar'} className='max-w-full mx-auto' />
            <span className='absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 md:scale-125'>
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#14b8a6" d="M34.6,-43.4C48.7,-37.3,66.8,-32.4,71.5,-22.2C76.1,-12.1,67.3,3.5,55.7,11.5C44,19.6,29.6,20.2,19.8,23.3C10.1,26.4,5,32,-4.2,37.7C-13.3,43.5,-26.7,49.3,-34.4,45.5C-42.1,41.7,-44.2,28.4,-45.8,16.5C-47.3,4.7,-48.3,-5.7,-47.4,-17.5C-46.5,-29.4,-43.7,-42.9,-35.5,-50.9C-27.3,-59,-13.6,-61.7,-1.7,-59.4C10.2,-57,20.4,-49.6,34.6,-43.4Z" transform="translate(100 100) scale(1.2)" />
                </svg>
            </span>
        </div>
    )
}