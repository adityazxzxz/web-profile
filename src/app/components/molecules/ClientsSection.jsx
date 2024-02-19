import Image from 'next/image'
export default function ClientsSection() {
    const clients = ["reliance"]

    return (
        <section id='clients' className="pt-36 pb-32 bg-slate-700">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Our clients</h2>
                        <p className="font-medium text-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem repellendus natus, odit ipsum unde deleniti aut consectetur numquam dolore?</p>
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        {
                            clients.map((client, index) => <a href="#" key={index} className="max-w-[120px] mx-4 py-4 grayscale transition hover:grayscale-0 duration-500 lg:mx-6 xl:mx-8">
                                {/* <img src={`image/clients/reliance.svg`} alt='reliance' /> */}
                                <Image src={`image/clients/reliance.svg`} alt='reliance' width={500} height={500} />
                            </a>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}