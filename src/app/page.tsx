import Image from "next/image";
import Logo from "./components/Logo";
import { VscMenu } from "react-icons/vsc";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <p className="py-4 text-center">Bem-vindo ao seu espaço!</p>
      <div className="flex items-center justify-center gap-4">
        <button>
          <VscMenu className="text-4xl" />
        </button>
        <Logo />
      </div>

      <div>
        <p>
          Nosso ambiente,
          <br />
          seguro e acolhedor, proporcionando a oportunidade de compartilhamento
          e troca. Aqui, se encontra liberdade para falar, permitindo-se ouvir e
          ser ouvido. Através de uma abordagem colaborativa, almejo que este
          espaço viabilize a construção de uma nova perspectiva diante dos
          desafios.
        </p>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronUp />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronUp />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
