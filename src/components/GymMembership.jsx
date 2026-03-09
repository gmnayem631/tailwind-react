import React, { use } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const GymMembership = ({ membershipPromise }) => {
  // const gymMemberShip = [
  //   { plan: "Basic", members: 40 },
  //   { plan: "Standard", members: 65 },
  //   { plan: "Premium", members: 35 },
  //   { plan: "Elite", members: 20 },
  // ];
  const gymMemberShipData = use(membershipPromise);
  // const gymMemberShipData = membershipResponse.data;
  console.log(gymMemberShipData);
  return (
    <div>
      <PieChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
      >
        <Pie
          data={gymMemberShipData}
          dataKey={"members"}
          cx="50%"
          cy="50%"
          //   outerRadius={120}
          fill="#8884d8"
          isAnimationActive={true}
          label
          nameKey={"plan"}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default GymMembership;
