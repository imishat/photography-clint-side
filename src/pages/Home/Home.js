import React from 'react';

const Home = () => {
    return (
        <>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

{}
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://st2.depositphotos.com/1007499/9305/v/950/depositphotos_93058918-stock-illustration-25-years-experience-rosette.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="p-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">READ MORE</button>
    </div>
  </div>
</div>
[]
        
     <h1>CARD HERW</h1>   
        
    [] 
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-7">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
[]  

<h1>carosole start</h1>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


<h1>palns</h1>
<div className="max-w-3xl mx-auto bg-gray-100" >
    <div className="text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Pricing Table</h1>
        <h4 className="text-gray-600">This is a simple TailwindCSS pricing table.</h4>
    </div>

    <div className="flex flex-col md:flex-row px-2 md:px-0">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-lg">Base</h3>
            <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">$69</span> /Month</p>
            <p className="text-sm text-gray-600 mt-2">For most businesses that want to optimize web queries.</p>
            <div className="text-sm text-gray-600 mt-4">
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
            </div>
            <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
        </div>
        <div className="w-full md:w-1/3 text-white bg-purple-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-lg">Popular</h3>
            <p className="mt-1"><span className="font-bold text-4xl">$99</span> /Month</p>
            <p className="text-sm opacity-75 mt-2">For most businesses that want to optimize web queries.</p>
            <div className="text-sm mt-4">
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
            </div>
            <button className="w-full text-purple-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-lg">Enterprise</h3>
            <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">$299</span> /Month</p>
            <p className="text-sm text-gray-600 mt-2">For most businesses that want to optimize web queries.</p>
            <div className="text-sm text-gray-600 mt-4">
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
            </div>
            <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
        </div>
    </div>
</div>
        
        
        </>
    );
};

export default Home;