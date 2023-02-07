import React from "react";
import ButtonsPage from "./pages/buttonsPage";
import Accordion from "./components/accordion";

const items = [
  {
    id: "684126515",
    label: "Section 1",
    content:
      "have a nice day learning and mastering React !!!! have a nice day learning and mastering React !!!!have a nice day learning and mastering React !!!!",
  },
  {
    id: "14985",
    label: "Section 2",
    content:
      "have a nice day learning and mastering React !!!! have a nice day learning and mastering React !!!!have a nice day learning and mastering React !!!!",
  },
  {
    id: "65146846",
    label: "Section 3",
    content:
      "have a nice day learning and mastering React !!!! have a nice day learning and mastering React !!!!have a nice day learning and mastering React !!!!",
  },
  {
    id: "5616165",
    label: "Section 4",
    content:
      "have a nice day learning and mastering React !!!! have a nice day learning and mastering React !!!!have a nice day learning and mastering React !!!!",
  },
];

const App = () => {
  return <Accordion items={items} />;
};

export default App;
