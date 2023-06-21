import Image from 'next/image'
import Team from './Team';
import Cta from './Cta';
const About = () => {
    return (
        <>
            <section className="pt-40 pb-24 bg-gradient-to-r from-green-100 to-green-100 justify-center items-center text-center ">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-700 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-500">Haqqımızda
                </span> Ətraflı</h1>
            </section>
            <section className="bg-white dark:bg-gray-900"></section>
            <hr className="border-gray-400"/>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Haqqımızda</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Azərbaycanda ən qısa zamanda Borcapul alacağınız və ya əlavə gəlir qazana biləcəyiniz platforma</p>
                <Image src='/images/about.png' alt='about' className='mx-auto w-full' width='1024' height='512' />
            </div>
            
            <div className="py-8 lg:py-16 px-4 mx-auto w-full bg-gray-100">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Missiyamız</h2>
                <div className='flex flex-row justify-center'>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl ">Hər kəsin həyatını asandlaşdıracaq və hüquqi çətinliklərdən qoruya biləcək mühit yaratmaq</p>

                </div>
                <div className='flex flex-col md:flex-row py-8 rounded-t rounded-b bg-slate-700 left-0 top-0 md:divide-x-2 lg:py-16 px-4 mx-auto w-full'>
                    <div className='w-full md:w-1/2 h-96 my-auto'>
                        <Image src='/images/imkan.png' alt='about' className='mx-auto p-0' width='400' height='400' />
                    </div>
                    <div className='w-full md:w-1/2 h-96 md:h-72 my-auto'>
                        <p className="max-w-[90%] md:max-w-[50%] mx-auto my-auto lg:my-auto text-center text-yellow-500 dark:text-gray-400 text-5xl lg:text-6xl font-semibold">Tam şəffaf şəraitdə borcalıb vermək imkanı.</p>
                    </div>
                </div>
                <hr className="border-gray-400"/>
                <div className="py-8 lg:py-16 px-4 mx-auto w-full">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Bizim Komandamız</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Sizə P2P maliyəni əlçatan edən komandamız</p>
                    <Team/>
                    <Cta/>
                </div>

            </div>
        </>
    );
}
 
export default About;