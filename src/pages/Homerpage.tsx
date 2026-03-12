import Card from "../components/Card/Card";
import Chip from "../components/Chip/Chip";
import ContadorSecreto from "../components/ContadorSecreto";
import InfoCard from "../components/InfoCard/InfoCard";
import Languages from "../components/Languages/Languages";
import TimeZones from "../components/Timezones/Timezones";

function Homepage() {
  return (
    <ContadorSecreto />
    // <Card>
    //   ola home!
    //   <Chip label="ola" variant="primary" />
    //   <Chip label="ola" variant="secondary" />
    //   <Chip label="ola" variant="terciary" />
    //   <InfoCard label={"population"} value={"234234,324,32,432423"} />
    //   <InfoCard label={"area"} value={"234234 m2"} />
    //   <Languages
    //     languages={{
    //       fra: "French",
    //       gsw: "Swiss German",
    //       ita: "Italian",
    //       roh: "Romansh",
    //     }}
    //   />
    //   <TimeZones timezones={["teste", "4234"]} />
    // </Card>
  );
}

export default Homepage;
