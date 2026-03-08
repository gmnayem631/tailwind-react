import { Suspense } from "react";
import "./App.css";
import CustomNav from "./components/CustomNav";
import Navbar from "./components/Navbar";
import PricingOptions from "./components/PricingOptions";
import Loader from "./components/Loader";
import ResultCharts from "./components/ResultCharts";
import ResultBarChart from "./components/ResultBarChart";
import GymMembership from "./components/GymMembership";
import GymAreaChart from "./components/GymAreaChart";

const pricingPromise = fetch("./pricingData.json").then((response) =>
  response.json(),
);

function App() {
  return (
    <>
      <CustomNav></CustomNav>
      {/* <Navbar></Navbar> */}

      <main>
        <Suspense fallback={<Loader></Loader>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultCharts></ResultCharts>
        <ResultBarChart></ResultBarChart>
        <GymMembership></GymMembership>
        <GymAreaChart></GymAreaChart>
      </main>
    </>
  );
}

export default App;
