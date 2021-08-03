import { createContext, useState, useEffect } from "react";
import { advisorsList, leadsList } from "./data";

const AdvisorContext = createContext(null);
const LeadContext = createContext({});

const AdvisorContextProvider = ({ children }) => {
  const [advisors, setAdvisors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setAdvisors(advisorsList);
    setIsLoading(false);
  }, []);

  return (
    <AdvisorContext.Provider value={{ advisors, isLoading, setAdvisors }}>
      {children}
    </AdvisorContext.Provider>
  );
};

const LeadContextProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setLeads(leadsList);
    setIsLoading(false);
  }, []);

  return (
    <LeadContext.Provider value={{ leads, isLoading, setLeads }}>
      {children}
    </LeadContext.Provider>
  );
};

export {
  AdvisorContext,
  AdvisorContextProvider,
  LeadContext,
  LeadContextProvider,
};
