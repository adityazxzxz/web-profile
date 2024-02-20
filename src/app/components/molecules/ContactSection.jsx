export default function ContactSection() {
    return (
        <section id="contact" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Me</h2>
                        <p className="font-medium text-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem repellendus natus, odit ipsum unde deleniti aut consectetur numquam dolore?</p>
                    </div>
                    <form>
                        <div className="w-full lg:w-2/3 lg:mx-auto">
                            <div className="w-full mb-8 px-4">
                                <label htmlFor="name" className="text-base text-primary">Name</label>
                                <input type="text" name="" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full mb-8 px-4">
                                <label htmlFor="email" className="text-base text-primary">Email</label>
                                <input type="text" name="" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full mb-8 px-4">
                                <label htmlFor="message" className="text-base text-primary">Message</label>
                                <textarea type="text" name="" id="message" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" ></textarea>
                            </div>
                            <div className="w-full px-4"><button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}