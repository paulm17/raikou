import React from "react";
import { SegmentedControl } from "./SegmentedControl";
// import { RaikouThemeProvider } from "@raikou/core";;

export default { title: "SegmentedControl" };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <SegmentedControl
        data={["React", "Angular", "Vue", "Svelte"]}
        size="lg"
        fullWidth
      />
      <SegmentedControl
        data={["React", "Angular", "Vue", "Svelte"]}
        size="lg"
        disabled
        mt="md"
        fullWidth
      />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 0 }}>
      <SegmentedControl data={["React", "Angular", "Vue", "Svelte"]} />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl
        data={["React", "Angular", "Svelte", "Vue"]}
        fullWidth
      />
    </div>
  );
}

export function Color() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl
        data={["React", "Angular", "Svelte", "Vue"]}
        color="blue"
      />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl
        data={["React", "Angular", "Svelte", "Vue"]}
        orientation="vertical"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={["React", "Angular", "Svelte", "Vue"]} disabled />
    </div>
  );
}

// export function FocusRingAlways() {
//   return (
//     <div style={{ padding: 40 }}>
//       <RaikouThemeProvider theme={{ focusRing: "always" }} inherit>
//         <SegmentedControl data={["React", "Angular", "Svelte", "Vue"]} />
//       </RaikouThemeProvider>
//     </div>
//   );
// }
