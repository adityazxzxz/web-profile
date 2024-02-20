import Image from 'next/image'
export default function BlogSection() {
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">Latest Article</h2>
                        <p className="font-medium text-medium text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis minus atque, necessitatibus asperiores cupiditate libero eligendi aut? Eligendi, laboriosam et.</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                            <img className='w-full' src="https://source.unsplash.com/360x200?programing" alt='reliance' />
                            <div className="py-8 px-6">
                                <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                                    <h3>Belajar Programing</h3>
                                </a>
                                <p className='font-medium text-secondary text-base mb-4'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nisi.
                                </p>
                                <a href="" className='font-medium text-sm bg-primary text-white py-2 px-6 rounded-md hover:opacity-80'> Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}