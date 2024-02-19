export default function PortfolioSection() {
    return (
        <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">Latest Project</h2>
                        <p className="font-medium text-medium text-secondary">In my Latest Project section, you'll find information about my most recent completed projects, showcasing my latest work and achievements.</p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={`/image/reliance.png`} alt="Reliance Life" className="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                            Reliance-life.co.id
                        </h3>
                        <p className="font-medium text-base text-secondary">
                            Our latest project is a web landing page focused on providing information about Reliance-Life, featuring informative blog articles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}