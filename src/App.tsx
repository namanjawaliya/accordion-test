import { useState } from "react";
import "./App.css";
import AccordionItem from "./components/AccordionItem";

type AccordionData = {
  title: string;
  body: string;
};

const data = [
  { title: "Item 1", body: "Body 1" },
  { title: "Item 2", body: "Body 2" },
  { title: "Item 3", body: "Body 3" },
  { title: "Item 4", body: "Body 4" },
  { title: "Item 5", body: "Body 5" },
];

function App() {
  const [isOpenIdx, setIsOpenIdx] = useState<number | null>(null);

  return (
    <section className="select-none">
      <h2 className="font-bold">Accordion</h2>
      {data.map((item: AccordionData, idx: number) => (
        <AccordionItem
          key={item.title + idx}
          title={item.title}
          body={item.body}
          isOpen={idx === isOpenIdx}
          setIsOpen={() => setIsOpenIdx(idx === isOpenIdx ? null : idx)}
        />
      ))}
    </section>
  );
}

export default App;
