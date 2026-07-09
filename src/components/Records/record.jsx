import React from "react";

const Record = (props) => {
  return (
   
    <div className="w-1/2 h-[75vh] p-1">
      <div className="group relative w-full h-full transition-all hover:rounded-4xl overflow-hidden">
        
        <img className="h-full w-full object-cover" src={props.image} alt="" />
        
        <div className="absolute cursor-pointer top-0 left-0 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/30 transition-all">
          <h2 
            className="uppercase font-[font2] border-2 text-center text-white text-[3.5vw] tracking-tight overflow-hidden pt-4 px-10 rounded-full pb-0 leading-none">{props.hoverText}</h2>
                    
          
        </div>
      </div>
    </div>
  );
};

export default Record;