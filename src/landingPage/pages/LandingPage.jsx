import { useState, useRef } from "react"
import { Navbar } from "../components/Navbar"
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const testimonials = [
    {"customer_id":1,
        "customer_name": 'Emily Sanchez',
        "position": 'Owner of Emily’s Boutique', 
        "testimonial_text":"Nova Web Design transformed my business. I run a small boutique, and within days of launching the website, I noticed an increase in foot traffic and online orders."},
    {"customer_id":2,
        "customer_name": 'Mark Williams',
        "position": 'Café Corner', 
        "testimonial_text":"As a local café owner, I struggled to get the word out online. Nova Web Design not only built me a beautiful website but also helped me with social media promotions. My customer base has grown significantly, and it was all at a price I could afford!"},
    {"customer_id":3,
        "customer_name": 'Sophia Lee',
        "position": 'Owner of Lee’s Crafts', 
        "testimonial_text":"I had no idea where to start with promoting my small shop online. Nova Web Design made the whole process easy. They created an amazing website that showcases my products perfectly, and I’ve gained so many new customers through their social media strategies!"},
    {"customer_id":4,
        "customer_name": 'Sarah Bennett',
        "position": 'Bookstore Owner', 
        "testimonial_text":"Their team built a beautiful, easy-to-navigate website for my bookstore. Now my customers can find us online and even order through the site. It’s made a huge difference for my business"},]

export const LandingPage = () => {

    const [current, setCurrent] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const contactRef = useRef(null)
    const pricingRef = useRef(null)
    const ourWorkRef = useRef(null)
    const servicesRef = useRef(null)
    const HowHelpRef = useRef(null)

    const handleNext = () => {
        console.log(current)
        current !== (testimonials.length - 1) ? setCurrent(current + 1) : setCurrent(0)
    }

    const handlePrev = () => {
        current !== (0) ? setCurrent(current - 1) : setCurrent(testimonials.length - 1) 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const serviceId = 'service_88w0j9y'
        const publicKey = 'ck0YSZd0ghm2syNVl'
        const templateId = 'template_c65txgm'

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'Patroncito'
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
            toast.success('Email sent successfully')
            setName('')
            setEmail('')
            setMessage('')
        }).catch((e) => {
            toast.error('Error enviando el email ',e)
        })
      };

      const scrollToSectionContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const scrollToSectionPricing = () => {
        pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const scrollToSectionServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const scrollToSectionHowHelpYou = () => {
        HowHelpRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const scrollToSectionWork = () => {
        ourWorkRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <IconContext.Provider value={ {size: '3rem'}}  >
    <Toaster 
        position="top-center"
    />
    <header className="mb-3">
    <Navbar />
    </header>
    <main>

    <section className="mx-6 flex flex-col justify-center text-center md:mt-10 md:text-start md:mx-16">
        <div className="flex flex-col justify-center gap-4 md:hidden">
            <h2 className="text-[2.5rem] font-headings">Navigating the <em className="not-italic">web</em> to success your business</h2>
            <img src="/images/landing-page/nova-hero.png" alt="" />
            <p className="font-headings text-xl">At Nova Web Design, we specialize in creating simple, functional, and affordable websites for small businesses. We understand how important it is to stand out in the digital world, which is why we offer personalized solutions at a price that fits your budget.</p>
            <button onClick={scrollToSectionContact} className="w-full bg-[#404040] h-[3rem] rounded-lg my-3 text-white">
                Ask for our services
            </button>
        </div>
        <div className="hidden md:flex md:justify-between">
            <div className="md:justify-around md:flex md:flex-col md:w-[45%] md:gap-5">
            <h2 className="font-headings md:text-[2.5rem] md:font-semibold">Navigating the <em className="not-italic">web</em> to success your business</h2>
            <p className="md:font-headings md:text-[1.5rem] md:w-[80%]">At Nova Web Design, we specialize in creating simple, functional, and <em className="not-italic">affordable websites</em> for small businesses. We understand how important it is to stand out in the digital world, which is why we offer personalized solutions at a price that fits your budget.</p>
            <button onClick={scrollToSectionContact}  className="md:w-[80%] bg-[#404040] md:rounded-lg my-3 text-white md:h-[3.5rem] hover:bg-black hover:scale-105 transition-all duration-500">
                Ask for our services
            </button>
            </div>
            <img className="md:w-[50%]" src="/images/landing-page/nova-hero.png" alt="" />
        </div>
    </section>

    <section className="lg:mx-16" ref={HowHelpRef}>
        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start mx-6 md:mx-16 lg:mx-0">
                <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] p-1 rounded-lg">How We Boost Your Business</h2>
                <p className="font-headings md:w-[70%]">Discover how our tailored web design and strategic online marketing solutions help small businesses establish a strong digital. Explore through Real-Life Examples.</p>
        </header>
        <main>
           {/* Display for small devices */}
            <div className="flex gap-1 overflow-x-scroll overflow-y-clip over h-[15rem] lg:hidden">
            <div className="bg-[#404040] w-[25rem] m-2 flex-shrink-0 flex items-center justify-center rounded-[3rem] p-8">
                <p className="text-white w-[70%]">A local bakery wanted a modern, professional online presence to showcase their menu and location. With a beautifully designed website, they were able to attract more foot traffic and improve their brand perception, giving customers a place to learn more about their offerings.</p>
            </div>
            <div className="bg-[#404040] w-[25rem] m-2 flex-shrink-0 flex items-center rounded-[3rem] p-8">
                <p className="text-white">A small boutique had limited visibility in their community. By having a stylish website that reflects their brand, they now have a platform to share updates, promotions, and store information. The site serves as a digital business card, helping them attract more walk-in customers.</p>
            </div>
            <div className="bg-[#404040] w-[25rem] m-2 flex-shrink-0 flex items-center rounded-[3rem] p-8">
                <p className="text-white">A fitness studio needed a simple, well-designed website to highlight their class schedule, trainers, and location. With an eye-catching design, the site helps convey professionalism and credibility, encouraging new clients to visit or call for more information.</p>
            </div>
            </div>

            {/* Display for big devices */}
            <div className="hidden bg-[#404040] w-full lg:flex lg:rounded-xl lg:h-[20rem] lg:p-10">

                <div className="flex w-[35%]">
                    <p className="text-white">A local bakery wanted a modern, professional online presence to showcase their menu and location. With a beautifully designed website, they were able to attract more foot traffic and improve their brand perception, giving customers a place to learn more about their offerings.</p>
                    <div className="bg-white w-2 rounded-full mx-4"></div>
                </div>
                <div className="flex w-[35%]">
                    <p className="text-white">A small boutique had limited visibility in their community. By having a stylish website that reflects their brand, they now have a platform to share updates, promotions, and store information. The site serves as a digital business card, helping them attract more walk-in customers.</p>
                    <div className="bg-white w-2 rounded-full mr-4"></div>
                </div>
                <div className="flex w-[35%]">
                    <p className="text-white">A fitness studio needed a simple, well-designed website to highlight their class schedule, trainers, and location. With an eye-catching design, the site helps convey professionalism and credibility, encouraging new clients to visit or call for more information.</p>
                </div>

            </div> 

        </main>
    </section>



    <section className="mx-6 md:mx-16" ref={servicesRef}>
        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start">
            <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] p-1 rounded-lg">Services</h2>
            <p className="font-headings md:w-[70%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </header>

        <main>

        <div className=" md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">
                <h3 className="text-3xl bg-[#F2DFD8] w-[13rem] my-4 ml-4 rounded-xl p-1 md:w-[15rem] md:text-3xl lg:w-[22rem]">Web development and design</h3>
                <div className="flex justify-between items-baseline">
                
                <div className="hover:scale-125 transition-all delay-100">
                <BsArrowUpRightCircleFill color="#404040" />
                </div>
                <img className="h-[70%]" src="images/landing-page/service-4.svg" alt="" />
                </div>
            </div>
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">
                <h3 className="text-3xl bg-[#F2DFD8] w-[13rem] my-4 ml-4 rounded-xl p-1">Web advertising strategies</h3>
                <div className="flex justify-between items-baseline">
                
                <div className="hover:scale-125 transition-all delay-100">
                <BsArrowUpRightCircleFill color="#404040" />
                </div>
                <img className="h-[70%]" src="images/landing-page/service-3.svg" alt="" />
                </div>
            </div>
        </div> 
        <div className=" md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">
                <h3 className="text-3xl bg-[#F2DFD8] w-[13rem] my-4 ml-4 rounded-xl p-1">Social media advertising</h3>
                <div className="flex justify-between items-baseline">
                
                <div className="hover:scale-125 transition-all delay-100">
                <BsArrowUpRightCircleFill color="#404040" />
                </div>
                <img className="h-[70%]" src="images/landing-page/service-2.svg" alt="" />
                </div>
            </div>
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">
                <h3 className="text-2xl bg-[#F2DFD8] w-[13rem] my-4 ml-4 rounded-xl p-1 md:w-[15rem] md:text-3xl lg:w-[22rem]">Online presence without hassle or high costs</h3>
                <div className="flex justify-between items-baseline">
                
                <div className="hover:scale-125 transition-all delay-100">
                <BsArrowUpRightCircleFill color="#404040" />
                </div>
                <img className="h-[70%]" src="images/landing-page/service-1.svg" alt="" />
                </div>
            </div>
        </div> 

        </main>
    </section>

    <section className="mx-6 md:mx-16" ref={ourWorkRef}>
        <header className="flex flex-col items-center text-center my-8 gap-4 md:text-start md:flex-row">
            <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] p-1 rounded-lg">Some of our work</h2>
            <p className="font-headings w-[70%]">Explore a gallery of our completed projects and see how we’ve helped small businesses create stunning, professional websites:</p>
        </header>

        <main>    
            <div className="md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">                
                <img className="w-full h-[80%] rounded-xl" src="/images/landing-page/proyect-emily.jpeg" alt="" />
                <p className="font-headings text-center">a clean, user-friendly website for Emily&apos;s Boutique, a small retail business specializing in fashion</p>
            </div>        
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">                
                <img className="w-full h-[80%] rounded-xl"  src="/images/landing-page/project-retail-store.jpeg" alt="" />
                <p className="font-headings text-center">For Fresh Mart Grocery, a local food retailer, we developed a modern website. The site includes a product catalog and a presentation of the store</p>
            </div>        
            </div>
            <div className="md:flex md:justify-between">
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">                
                <img className="w-full h-[80%] rounded-xl" src="/images/landing-page/project-coffe-shop.jpeg" alt="" />
                <p className="font-headings text-center">we crafted a sleek, inviting website that reflects the cozy atmosphere of the café.The site is fully responsive, ensuring a seamless experience across all devices</p>
            </div>        
            <div className="bg-[#F3F3F3] rounded-xl h-[20rem] shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.75)] mb-10 p-5 flex flex-col justify-between border-2 border-[#404040] md:w-[47%]">                
                <img className="w-full h-[80%] rounded-xl" src="/images/landing-page/project-book-store.jpeg" alt="" />
                <p className="font-headings text-center">a local shop specializing in rare and second-hand books. The site features a searchable catalog, allowing customers to find the perfect book</p>
            </div>        
            </div>
        </main>
    </section>

    <section className="mx-6 md:mx-16" ref={pricingRef}>
        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start">
            <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] p-1 rounded-lg">Pricing</h2>
            <p className="font-headings md:w-[70%]">Get a professional, custom-designed website and online marketing solutions without breaking the bank. Our pricing is tailored to fit the budget of small businesses, helping you grow your online presence at an affordable cost.:</p>
        </header>

        <main className="flex flex-col gap-4 md:flex-row md:justify-evenly">
             <div className="rounded-xl mx-2 bg-[#404040] px-3 py-2 flex flex-col gap-3 font-headings text-white md:justify-between md:w-[25%] hover:scale-105 transition-all ease-in-out duration-500">
                <h3 className="text-2xl">Base</h3>
                <ul className="list-none text-center gap-3 flex flex-col">
                    <li>
                        <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of web design
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of full web page
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    Upload to the internet
                    </li>
                </ul>
                <div className="flex flex-col justify-center">

                    <p className="mb-2">Between 70$ - 250$ CAD</p>
                    <button onClick={scrollToSectionContact} className="bg-white border-black border-2 text-[#404040] rounded-lg w-[80%] p-2 self-center">Contact Us</button>
                </div>
             </div>
             
             <div className="rounded-xl mx-2 bg-[#F2DFD8] px-3 py-2 flex flex-col gap-3 font-headings md:justify-between md:w-[25%] hover:scale-105 transition-all ease-in-out duration-500">
                <h3 className="text-2xl">Special</h3>
                <ul className="list-none text-center gap-3 flex flex-col">
                    <li>
                        <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of web design
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of web full page
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    Upload to the internet
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    SEO and web promotion
                    </li>
                </ul>
                <div className="flex flex-col justify-center">
                    <p className="mb-2">Between 250$ - 300$ CAD</p>
                    <button onClick={scrollToSectionContact} className="bg-[#404040] text-white rounded-lg w-[80%] p-2 self-center">Contact Us</button>
                </div>
             </div>
             <div className="rounded-xl mx-2 bg-[#F2DFD8] px-3 py-2 flex flex-col gap-3 font-headings md:justify-between md:w-[25%] hover:scale-105 transition-all ease-in-out duration-500">
                <h3 className="text-2xl">Full</h3>
                <ul className="list-none text-center gap-3 flex flex-col">
                    <li>
                        <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of web design
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                        Creation of full web page
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    Upload to the internet
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    SEO and web promotion
                    </li>
                    <li>
                    <FaCheck size='1rem' style={{display: 'inline', marginRight: '2px'}} />
                    Social media promotion
                    </li>
                </ul>
                <div className="flex flex-col justify-center">
                    <p className="mb-2">Between 300$ - 350$ CAD</p>
                    <button onClick={scrollToSectionContact} className="bg-[#404040] text-white rounded-lg w-[80%] p-2 self-center">Contact Us</button>
                </div>
             </div>
        </main>

    </section>


    <section className="mx-6 md:mx-16" id="testimonials">

        <header className="flex flex-col items-center text-center my-8 gap-4 md:flex-row md:text-start">
            <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] p-1 rounded-lg">Testimonials</h2>
            <p className="font-headings md:w-[70%]">Hear from our satisfied clients and discover how our web design and marketing services have helped their businesses grow and stand out in the digital space:</p>
        </header>

        <main className="bg-[#404040] flex items-center flex-col rounded-xl">
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
                <div className="relative max-w-xs p-4 h-[80%] border-2 border-[#F2DFD8] text-white rounded-lg md:max-w-2xl md:flex md:justify-center md:items-center">
                <p className="font-headings md:w-1/2 md:text-[1.2rem]">
                    {testimony.testimonial_text}
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-[7rem] translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#F2DFD8]"></div>
                </div>
            </div>
            ))}
            </div>
        </div>
        <div>
            <p className="font-headings text-white text-center">
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
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill={i===current ? '#e6c3b6' : 'white'}/>
                            </svg>
                </button>
                ))}
            </div>
            <button onClick={() => handleNext()}><img src="/images/landing-page/carrousel-right-arrow.svg" alt="" /></button>
        </div>
        </main>
    </section>
    
    <section className="mx-6 flex flex-col items-center my-10 md:mx-16" ref={contactRef}>

        <header className="flex flex-col items-center md:flex-row md:justify-start w-full md:gap-4 my-8">
            <h2 className="font-headings text-3xl bg-[#F2DFD8] text-center w-fit font-[600] rounded-lg p-1">Contact Us</h2>
            <p className="font-headings my-3 text-center">Connect with us; let&apos;s make your web page</p>
        </header>

        <form onSubmit={handleFormSubmit} className="bg-[#F3F3F3] rounded-xl p-4 flex flex-col gap-4 w-full">
            <div className="flex flex-col">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                className="border-2 border-[#404040] rounded-lg h-[2.5rem] p-1" 
                type="text" 
                id="nombre" 
                name="nombre" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="email">Correo Electrónico:</label>
                <input 
                className="border-2 border-[#404040] rounded-lg h-[2.5rem] p-1" 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea 
                className="border-2 border-[#404040] rounded-lg p-1" 
                id="mensaje" 
                name="mensaje" 
                rows="5" 
                cols="33" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            
            <div>
                <button className="w-full h-[3rem] rounded-lg bg-[#404040] text-white hover:bg-black transition-all duration-700" type="submit">Send Message</button>
            </div>
        </form>

    </section>



    </main>

    <footer className="bg-[#404040] flex flex-col items-center gap-10 py-5 text-center">
        <div className="flex w-full items-center justify-center">
            <img src="/images/logo-nova.png" className="w-10" alt="" />
            <h4 className="text-white">Nova Web Design</h4>
        </div>

        <div>
            <ul className="list-none gap-4 flex flex-col text-white">
                <li className="cursor-pointer" onClick={scrollToSectionHowHelpYou}>How We Can Help You</li>
                <li className="cursor-pointer" onClick={scrollToSectionServices}>Services</li>
                <li className="cursor-pointer" onClick={scrollToSectionPricing}>Pricing</li>
                <li className="cursor-pointer" onClick={scrollToSectionWork}>Our Work</li>
            </ul>
        </div>

        <div className="text-white text-center flex flex-col items-center gap-4">
            <h6 className="bg-[#F2DFD8] w-fit text-[#404040] rounded-lg p-1">Contact information:</h6>
            <p>Email: <a href="mailto:juanarieda@gmail.com">novawebclients@gmail.com</a></p>
            <p>Phone: +1-236-339-6339</p>
        </div>

        <div className="text-white">
            <hr />
            &copy; 2024 <em>Nova Web Design</em>. All Rights Reserved.
        </div>

    </footer>

    </IconContext.Provider>
  )
}
