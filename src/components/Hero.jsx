'use client'

import Image from "next/image"
import { hero } from "@/assets"

const Hero = () => {

    return (
        <div>
            <Image src={hero} alt="Hero" />
        </div>
    )
}
export default Hero