import { createContext, useState, useEffect } from "react";
import { advisors, leads } from "./data";

const AdvisorContext = createContext(null);
const LeadContext = createContext({});

const AdvisorContextProvider = ({ children }) => {
  const [advisorsById, setAdvisorsById] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Load from database
    setAdvisorsById(advisors);
    setIsLoading(false);
  }, []);

  return (
    <AdvisorContext.Provider
      value={{ advisorsById, isLoading, setAdvisorsById }}
    >
      {children}
    </AdvisorContext.Provider>
  );
};

const LeadContextProvider = ({ children }) => {
  const [leadsById, setLeadsById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Load from database
    setLeadsById(leads);
    setIsLoading(false);
  }, []);

  return (
    <LeadContext.Provider value={{ leadsById, isLoading, setLeadsById }}>
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
