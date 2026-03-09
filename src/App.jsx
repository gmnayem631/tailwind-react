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
import axios from "axios";
import { AwesomeButton } from "@rcaferati/react-awesome-button";

const pricingPromise = axios.get("./pricingData.json");
const membershipPromise = axios
  .get("./gymMemberShip.json")
  .then((res) => res.data);

function App() {
  return (
    <>
      <CustomNav></CustomNav>
      {/* <Navbar></Navbar> */}

      <main>
        <AwesomeButton
          type="primary"
          progress
          onPress={(next) => {
            alert("clicked");
            next();
          }}
        >
          Click
        </AwesomeButton>
        <Suspense fallback={<Loader></Loader>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultCharts></ResultCharts>
        <ResultBarChart></ResultBarChart>
        <GymMembership membershipPromise={membershipPromise}></GymMembership>
        <GymAreaChart></GymAreaChart>
      </main>
    </>
  );
}

export default App;
