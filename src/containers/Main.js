import Container from "@material-ui/core/Container";
import AdvisorCreate from "./AdvisorCreate";
import AdvisorUpdate from "./AdvisorUpdate";
import AdvisorList from "./AdvisorList";
import LeadList from "./LeadList";

const Main = () => {
  return (
    <Container>
      <section>
        <h1>Onboard advisor</h1>
        <AdvisorCreate />
      </section>
      <section>
        <h1>Update advisor</h1>
        <AdvisorUpdate />
      </section>
      <section>
        <h1>Advisors</h1>
        <AdvisorList />
      </section>
      <section>
        <h1>Leads</h1>
        <LeadList />
      </section>
    </Container>
  );
};

export default Main;
