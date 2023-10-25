import Image from "next/image";
export const Heroes = () => {
    return ( 
        <div className=" flex justify-center items-center ml-3">
            <Image src="/hero-1.png" alt="hero" height={700} width={700}/>
            <Image src="/hero-2.png" alt="hero" height={700} width={700}/>
        </div>
     );
}
