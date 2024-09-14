import { useState } from "react"
import { Navbar } from "../components/Navbar"

const testimonials = [
    {"customer_id":1,
        "customer_name": 'Gabriel Aristizabal ',
        "position": 'Owner of business', 
        "testimonial_text":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."},
    {"customer_id":2,
        "customer_name": 'Gabriel Aristizabal 2',
        "position": 'Influencer', 
        "testimonial_text":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."},
    {"customer_id":3,
        "customer_name": 'Gabriel Aristizabal 3',
        "position": 'Owner of street cart', 
        "testimonial_text":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."},
    {"customer_id":4,
        "customer_name": 'Gabriel Aristizabal 4',
        "position": 'Owner of business', 
        "testimonial_text":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."},
    {"customer_id":5,
        "customer_name": 'Gabriel Aristizabal 5',
        "position": 'Owner of business', 
        "testimonial_text":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit lorem200amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."}]

export const LandingPage = () => {

    const [current, setCurrent] = useState(0)

    const handleNext = () => {
        console.log(current)
        current !== (testimonials.length - 1) ? setCurrent(current + 1) : setCurrent(0)
    }

    const handlePrev = () => {
        current !== (0) ? setCurrent(current - 1) : setCurrent(testimonials.length - 1) 
    }

  return (
    <>
    <header className="mb-3">
    <Navbar />
    </header>
    <main>

    <section className="mx-6 flex flex-col justify-center text-center md:mt-10 md:text-start md:mx-16">
        <div className="md:hidden">
            <h2 className="text-3xl">Navigating the <em className="not-italic">web</em> to success your business</h2>
            <img src="/images/landing-page/hero.svg" alt="" />
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="w-full bg-[#191A23] h-[3rem] rounded-lg my-3 text-white">
                Ask for a web page
            </button>
        </div>
        <div className="hidden md:flex md:justify-between">
            <div className="md:flex md:flex-col md:justify-between md:w-[45%] md:gap-5">
            <h2 className="md:text-[2.5rem] md:font-semibold">Navigating the <em className="not-italic">web</em> to success your business</h2>
            <p className="text-[1rem]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="md:w-[80%] bg-[#191A23] md:rounded-lg my-3 text-white md:h-[3.5rem]">
                Ask for a web page
            </button>
            </div>
            <img className="md:w-[50%]" src="/images/landing-page/hero.svg" alt="" />
        </div>
    </section>

    <section className="mx-6 md:mx-16">
        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start">
            <h2 className="text-3xl bg-[#B9FF66] text-center w-fit font-[600] p-1 rounded-lg">Services</h2>
            <p className="md:w-[70%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </header>

        <main>

        <div className=" md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">
                <h3 className="text-3xl bg-[#B9FF66] w-[12rem] my-4 ml-4">Search engine optimization</h3>
                <div className="flex justify-between items-baseline">
                <img src="images/landing-page/right-arrow.svg" className="hover:scale-[1.5] transition-all delay-100" alt="" />
                <img src="images/landing-page/service-1.svg" alt="" />
                </div>
            </div>
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">
                <h3 className="text-3xl bg-[#B9FF66] w-[12rem] my-4 ml-4">Search engine optimization</h3>
                <div className="flex justify-between items-baseline">
                <img src="images/landing-page/right-arrow.svg" className="hover:scale-[1.5] transition-all delay-100" alt="" />
                <img src="images/landing-page/service-1.svg" alt="" />
                </div>
            </div>
        </div> 
        <div className=" md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">
                <h3 className="text-3xl bg-[#B9FF66] w-[12rem] my-4 ml-4">Search engine optimization</h3>
                <div className="flex justify-between items-baseline">
                <img src="images/landing-page/right-arrow.svg" className="hover:scale-[1.5] transition-all delay-100" alt="" />
                <img src="images/landing-page/service-1.svg" alt="" />
                </div>
            </div>
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">
                <h3 className="text-3xl bg-[#B9FF66] w-[12rem] my-4 ml-4">Search engine optimization</h3>
                <div className="flex justify-between items-baseline">
                <img src="images/landing-page/right-arrow.svg" className="hover:scale-[1.5] transition-all delay-100" alt="" />
                <img src="images/landing-page/service-1.svg" alt="" />
                </div>
            </div>
        </div> 

        </main>
    </section>

    <section className="mx-6 md:mx-16">
        <header className="flex flex-col items-center text-center my-8 gap-4 md:text-start md:flex-row">
            <h2 className="text-3xl bg-[#B9FF66] text-center w-fit font-[600] p-1 rounded-lg">Some of our work</h2>
            <p className="w-[70%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </header>

        <main>    
            <div className="md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">                
                <img className="w-full h-[10rem] rounded-xl" src="/images/landing-page/project-3.png" alt="" />
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam beatae quidem sed omnis odiasdasd</p>
            </div>        
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">                
                <img className="w-full h-[10rem] rounded-xl" src="/images/landing-page/project-3.png" alt="" />
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam beatae quidem sed omnis odiasdasd</p>
            </div>        
            </div>
            <div className="md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">                
                <img className="w-full h-[10rem] rounded-xl" src="/images/landing-page/project-3.png" alt="" />
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam beatae quidem sed omnis odiasdasd</p>
            </div>        
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#191A23] md:w-[47%]">                
                <img className="w-full h-[10rem] rounded-xl" src="/images/landing-page/project-3.png" alt="" />
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam beatae quidem sed omnis odiasdasd</p>
            </div>        
            </div>
        </main>
    </section>


    <section className="mx-6 md:mx-16" id="testimonials">

        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start">
            <h2 className="text-3xl bg-[#B9FF66] text-center w-fit font-[600] p-1 rounded-lg">Testimonials</h2>
            <p className="md:w-[70%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </header>

        <main className="bg-[#191A23] flex items-center flex-col rounded-xl">
        <div className="w-full overflow-hidden relative">
            <div
            className="flex transition ease-out duration-700 h-[15rem] md:h-[25rem]"
            style={{transform: `translateX(-${current * 100}%)`}}
            >
            {testimonials.map((testimony) => (
            <div
                className={`w-full justify-center flex items-center flex-shrink-0`}
                key={testimony.customer_id}
                >
                <div className="relative max-w-xs p-4 h-[80%] border-2 border-[#B9FF66] text-white rounded-lg md:max-w-2xl md:flex md:justify-center md:items-center">
                <p className="md:w-1/2 md:text-[1.5rem]">
                    {testimony.testimonial_text}
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-[7rem] translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#B9FF66]"></div>
                </div>
            </div>
            ))}
            </div>
        </div>
        <div>
            <p className="text-white">
                {testimonials[current].customer_name} <br />
                {testimonials[current].position}
            </p>
        </div>
        <div className="w-full flex justify-between p-4 lg:w-[80%]">
            <button onClick={() => handlePrev()}><img src="/images/landing-page/carrousel-left-arrow.svg" alt="" /></button>
            <div className="flex gap-4">
                {testimonials.map((_,i) => (
                <button onClick={() => {
                            setCurrent(i)
                        }} key={`item-${i}`}>
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill={`${i === current ? '#B9FF66' : 'white'}`}/>
                        </svg>
                </button>
                ))}
            </div>
            <button onClick={() => handleNext()}><img src="/images/landing-page/carrousel-right-arrow.svg" alt="" /></button>
        </div>
        </main>
    </section>
    
    <section className="mx-6 flex flex-col items-center my-10 md:mx-16">

        <header className="flex flex-col items-center md:flex-row md:justify-start w-full md:gap-4 my-8">
            <h2 className="text-3xl bg-[#B9FF66] text-center w-fit font-[600] rounded-lg p-1">Contact Us</h2>
            <p className="my-3 text-center">Connect with us; let&apos;s make your web page</p>
        </header>

        <form className="bg-[#F3F3F3] rounded-xl p-4 flex flex-col gap-4 w-full">
            <div className="flex flex-col">
                <label htmlFor="nombre">Nombre:</label>
                <input className="border-2 border-[#191A23] rounded-lg h-[2.5rem]" type="text" id="nombre" name="nombre" required />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="email">Correo Electrónico:</label>
                <input className="border-2 border-[#191A23] rounded-lg h-[2.5rem]" type="email" id="email" name="email" required />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea className="border-2 border-[#191A23] rounded-lg" id="mensaje" name="mensaje" rows="5" cols="33" required></textarea>
            </div>
            
            <div>
                <button className="w-full h-[3rem] rounded-lg bg-[#191A23] text-white" type="submit">Send Message</button>
            </div>
        </form>

    </section>



    </main>

    <footer className="bg-[#191A23] flex flex-col items-center gap-10 py-5 text-center">
        <div className="flex w-full items-center justify-center">
            <img src="/images/logo-nova.png" className="w-10" alt="" />
            <h4 className="text-white">Nova Web Design</h4>
        </div>

        <div>
            <ul className="list-none gap-4 flex flex-col text-white">
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className="text-white text-center flex flex-col items-center gap-4">
            <h6 className="bg-[#B9FF66] w-fit text-[#191A23] rounded-lg p-1">Contact information:</h6>
            <p>Email: &nbsp; <a href="mailto:juanarieda@gmail.com">juanarieda@gmail.com</a></p>
            <p>Phone: 555-550-0959</p>
        </div>

        <div className="text-white">
            <hr />
            &copy; 2024 <em>Nova Web Design</em>.All Rights Reserved.
        </div>

    </footer>

    </>
  )
}
