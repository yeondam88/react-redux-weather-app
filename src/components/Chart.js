import React from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export const Chart = props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines data={data} width={180} height={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        Average: {average(data)} {units}
      </div>
    </div>
  );
};
