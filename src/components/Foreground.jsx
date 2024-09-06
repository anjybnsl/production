import React, {useRef} from 'react';
import Cards from './Cards';


function Foreground() {

    const ref = useRef(null);

  const data = [
    {
      desc: "This is the final product, upload it now.",
      filesize: "25 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "cyan"},
    },

    {
      desc: "This is work in progress..",
      filesize: "8.9 MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },

    {
      desc: "Hi! new task assigned, download the required files.",
      filesize: "12 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },

    {
      desc: "Here is the new task, download the required files.",
      filesize: "15 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "purple"},
    },

    {
      desc: "Share progress with team.",
      filesize: "7.2 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Share", tagColor: "pink"},
    },
    
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      {/* <Cards /> */}
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
     </div>
  )
}

export default Foreground