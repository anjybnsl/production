import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";



function Cards({data, reference}) {
  return (
    <motion.div drag 
      dragConstraints={reference} 
      whileDrag={{scale:1.2}} 
      dragElastic={.1} 
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }} 
      className='relative flex-shrink-0 w-36 h-[30vh] rounded-[15px] bg-zinc-900 text-white py-5 px-6 overflow-hidden'>
        
      <FaRegFileAlt />
      <p className='text-[13.8px] mt-2.5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-5 mb-0.1'>
          <h6 className='text-[13.2px]'>{data.filesize}</h6>
          <span className='w-4 h-4 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose /> : <MdFileDownload size="1.5em" color='white' />}
            
          </span>
          
        </div>

          {/* {
            data.tag.isOpen ? (
                <div className='tag w-full py-2 bg-green-400 flex item-center justify-center'>
                    <h3 className='text-sm font-semibold'>Download Now</h3>
                </div>
            ) : null
          } */}

          {/* OTHER way to write the above */}

          {
            data.tag.isOpen && (
                <div className={`tag w-full py-1 tag bg-${data.tag.tagColor}-600 flex item-center justify-center`}>
                    <h3 className='text-[12.2px] font-medium text-black'>{data.tag.tagTitle}</h3>
                </div>
            )
          } 


      </div>
    </motion.div>
  );
}

export default Cards