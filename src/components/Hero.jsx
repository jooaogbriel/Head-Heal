'use client'

import Image from "next/image"
import { hero } from "@/assets"

const Hero = () => {

    return (
        <div className=" relative ">
            <div className=" absolute items-center w-1/2 ">
                <h1 className=" text-6xl mt-48 ml-20 mb-10">25% Off Shoower Essentials</h1>
                <p className="ml-20">Refresh your bodycare routine with 25% OFF our Body Wash + Body Lotion and customize both to your unique skin type and fragrance</p>
            </div>
            <Image src={hero} alt="Hero" className="" />
        </div>
    )
}
export default Hero