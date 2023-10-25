import Image from 'next/image'

export const Heroes = () =>
{
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image
                        src="/hero-1.png"
                        fill
                        className="object-contain"
                        alt="Documents"
                    />
                </div>
                <div className='relative h-[400px] w-[400px] hidden md:block'>
                    <Image
                        src="/hero-2.png"
                        fill
                        className='object-contain'
                        alt='Reading'
                    />
                </div>
            </div>
        </div>
    )
}