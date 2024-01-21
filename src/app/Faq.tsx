"use client";

import data from "@/lib/data.json";
import { workSans } from "@/lib/font";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function Faq() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div
      className={clsx(
        workSans.className,
        "bg-secondary text-white px-14 py-10 pb-20",
      )}
    >
      <div className="mb-12">
        <h1 className="text-primary">FAQ</h1>
        <div className="bg-primary-light w-28 h-[6px]"></div>
        <h2 className="font-extrabold text-2xl mt-2">Principais Dúvidas</h2>
        <p>Abaixo respondemos as dúvidas mais frequentes</p>
      </div>

      {data.faq.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          className={clsx(
            "bg-secondary text-white shadow-none overflow-hidden",
            !(expanded === index) && "border-b border-white",
          )}
          onChange={() => {
            setExpanded(index);
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronUp className="text-white" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails className="border-white border-t">
            {" "}
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
