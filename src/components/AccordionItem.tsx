import { TypeAccordionItem } from "../types/TypeAccordionItem";

const AccordionItem = ({
  title,
  body,
  isOpen,
  setIsOpen,
}: TypeAccordionItem) => {
  return (
    <div className="flex flex-col w-96 m-2">
      <div
        className="flex items-center justify-between bg-red-400 cursor-pointer px-4 py-3 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold text-white">{title}</h2>
        <button
          className={`transform transition-transform duration-500 text-white ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
        >
          {">"}
        </button>
      </div>
      <div
        className={`transition-all duration-1000 ease-in-out opacity-0 h-0 bg-red-100 rounded-md ${
          isOpen && "opacity-100 h-[100px] px-4 py-3"
        }`}
      >
        {body}
      </div>
    </div>
  );
};

export default AccordionItem;
