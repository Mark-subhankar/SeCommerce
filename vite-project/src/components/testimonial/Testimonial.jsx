import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'

function Testimonial() {
    const context = useContext(MyContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto" style={{paddingTop : "4.5rem"}}>
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <div style={{margin : "auto"}} className="h-1 w-20 bg-blue-600 rounded"></div>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://smilequestdental.com/wp-content/uploads/2016/11/test24-4.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Absolutely love the variety and quality of products on this grocery e-commerce platform! From the Edison bulbs to the retro vibes, it's a unique shopping experience. The user-friendly interface makes it a breeze to find and order everything I need. 5 stars!</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Koustav Manna</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.istockphoto.com/id/1406447835/photo/portrait-on-a-man-in-his-40s.jpg?s=612x612&w=0&k=20&c=xdSE5VWh4Q79nqYs8nZqMIPa-0fCuKTg3eM27h-ksEg=" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">As a fan of all things trendy, this grocery e-commerce site hits the mark. The eclectic mix of products, from cloud bread to taiyaki, is a delightful surprise. Quick delivery and top-notch service make it my go-to for all grocery needs. Highly recommend</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Esrafil Mallick</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJzJUCo-RpJB0V8hJcNhjHSbddEkvk5hZJw&usqp=CAU" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">In a world of mundane grocery shopping, this platform stands out with its curated selection. The 90's vibes and artisanal products like cronuts and adaptogens make it a joy to explore. Efficient service and a seamless checkout process keep me coming back.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ankita das</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial