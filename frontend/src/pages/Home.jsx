import React from 'react'
import { motion } from "motion/react"

function Home() {
    return (
        <div className='bg-white text-[#0a0a0a] font-sans min-h-screen overflow-x-hidden'>
            {/* navbar */}
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.5, ease:"easeOut"}}
                className='fixed top-0 left-0 right-0 z-50 h-13 flex items-center justify-between px-5 bg-white/70 backdrop-blur-xl border-b border-black/5'>

                </motion.nav>
        </div>
    )
}

export default Home