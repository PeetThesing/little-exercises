// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  for (let counter = 0; counter < 5; counter++) {
    countdown();
  }
  liftoff();
  deployPayload();
}