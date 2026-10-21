import React from 'react'
import { FiX } from "react-icons/fi";
import { motion } from 'motion/react';
import { FcGoogle } from "react-icons/fc";
import { SiFirebase } from "react-icons/si";

function Login({onClose}) {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4'>
            <div className='relative w-full max-w-sm bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)]'>
                <div className='absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-transparent pointer-events-none' />

                <div className="relative p-7">
                    <button onClick={onClose} className='absolute top-4 right-4 text-white/40 hover:text-white transition-colors'>
                        <FiX size={16} />
                    </button>
                    <h2 className='text-lg font-bold text-center mb-2 text-white'>
                        Sign In to {" "} <span className='font-extrabold text-lg tracking-tight text-white'>InerPlyAi</span>
                    </h2>
                    <p className='text-white/45 text-center text-xs'>Continue Your AI interview journey</p>

                    <div className='mt-7'>
                        <motion.button
                            whileHover={{scale:1.04}}
                            whileDrag={{scale:0.97}}
                            className='w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md hover:border-white/25 hover:bg-white/[0.14] shadow-inner transition-all'
                        >
                            <FcGoogle size={18}/>
                            <span className='text-white font-medium text-sm'>
                                Continue with Google
                            </span>
                        </motion.button>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-1 relative border-t border-white/10 bg-black/30 p-4 text-center'>
                    <p className='text-white/30 text-xs'>Secured authentication powered by Firebase</p>
                    <SiFirebase color="white" size={15}/> 
                </div>
            </div>

        </div>
    )
}

export default Login