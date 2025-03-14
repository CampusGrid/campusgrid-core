import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "#fff",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

function Faqs() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="mx-auto  w-full md:w-[70%] p-3 flex flex-col">
      <div className="heading text-center flex flex-col">
        <span className="block text-2xl font-bold">
          FAQs on School Management System Software - Campus Flow ERP
        </span>
        <span className="text-[16px] mt-2">
          Check out this School ERP FAQs section and discover the School
          Management Software common
        </span>
        <span className="text-[16px]">
          questions and answers on ERP School Software Features, Costs &
          Implementation:
        </span>
      </div>
      <div className="faqs  my-4">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">
              <span className="font-bold">
                1. Which software is best for school?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A robust and innovative ERP software for schools is the best
              educational system for managing and reducing school management
              workload. School ERP systems benefit administrators, educators,
              parents, and students by enhancing school management and learning
              experiences.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="span">
              <span className="font-bold">
                2. Is School ERP Software affordable?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ERP for schools software can be affordable, depending on various
              factors. The cost of the school management ERP system differs
              depending on the school's needs. In India, the price of ERP School
              Software ranges from Rs. 5 per student/month to Rs. 50 per
              student/month, depending on the selected features and
              service-support model.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span">
              <span className="font-bold">
                3. What School ERP features make school management best?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              School ERP Software features like Automation, Customization,
              Robustness, Innovative, AI-based solutions, and Cost-effectiveness
              help manage school administration and resources effortlessly.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
