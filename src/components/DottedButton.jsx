const DottedButton = ({ className, text }) => {
  return (
    <button
      className={`${className ?? ''} rounded-xl border-2 border-dashed mt-5 cursor-pointer
       border-[#eed1ac] bg-[#d6e0ff] px-6 py-3 
        uppercase text-black 
       transition-all duration-300 hover:translate-x-[-4px] 
       hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#d6e0ff] 
       active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}
    >
      {text}
    </button>
  );
};

export default DottedButton;
