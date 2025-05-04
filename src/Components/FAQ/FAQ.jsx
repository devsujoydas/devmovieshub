
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


const FAQ = () => {


  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="md:mx-40 md:py-20 mx-5 py-5">
      <div className="flex justify-between items-center md:flex-row flex-col gap-5">
        <div className="space-y-6">
          <h1 className="md:text-4xl text-3xl">Frequently Asked Questions</h1>
          <p className="text-zinc-400 md:text-lg font-light">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
        </div>
        <div>
          <button className="px-4 py-3 md:px-7 md:py-4 rounded-sm md:rounded-md bg-[#ff0101] cursor-pointer hover:bg-[#ff5555] active:scale-95 transition-all">Ask a Questions</button>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-8 md:gap-20  mt-10">
        <div className="grid gap-8 md:gap-10 ">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}> <span className="md:text-2xl text-sm cursor-zoom-out">What is StreamVibe??</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}> <span className="md:text-2xl text-sm cursor-pointer">How much does StreamVibe cost??</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}> <span className="md:text-2xl text-sm cursor-pointer">What content is available on StreamVibe?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}> <span className="md:text-2xl text-sm cursor-pointer">How can I watch StreamVibe?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>
        </div>

        <div className="grid gap-8 md:gap-10 ">
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}> <span className="md:text-2xl text-sm cursor-pointer">How do I sign up for StreamVibe?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(6)}> <span className="md:text-2xl text-sm cursor-pointer">What is the StreamVibe free trial?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(7)}> <span className="md:text-2xl text-sm cursor-pointer">How do I contact StreamVibe customer support?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(8)}> <span className="md:text-2xl text-sm cursor-pointer">What are the StreamVibe payment methods?</span></AccordionHeader>
            <AccordionBody className={"text-zinc-300 mt-2"}>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </AccordionBody>
          </Accordion>
        </div>

      </div>




    </div>
  )
}

export default FAQ