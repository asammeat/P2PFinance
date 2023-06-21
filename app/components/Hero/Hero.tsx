const Hero = () => {
    return ( 
        
        <div className="relative flex flex-col w-full h-full">
        
                    <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                    <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-green-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        
                    />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Artıq fiziki şəxslər daha rahat kredit ala biləcək.{' '}
                        <a href="/haqqimizda" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Davamı <span aria-hidden="true">&rarr;</span>
                        </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Borcalanlar və İnvestorlar üçün
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Qısa müddətli kiçik həcmli Borcapul krediti
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/bazar"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Borcapul istəyirəm
                        </a>
                        <a href="/elaqe" className="text-sm font-semibold leading-6 text-gray-900">
                            Necə işləyir? <span aria-hidden="true">→</span>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-black opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        
                    />
                    </div>
                </div>

            
        </div>

     );
}
 
export default Hero;