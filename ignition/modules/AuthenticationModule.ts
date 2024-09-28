// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// export default buildModule("Authenticate", (m) => {
//   const authenticate = m.contract("Authentication");


//   return { authenticate };
// });

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const LockModule = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const authentication = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { authentication };
});

export default LockModule;

// const AuthenticationModule = buildModule("AuthenticationModule", (m) => {
//   const authentication = m.contract("Authentication")

//   return {authentication}
// })

// export default AuthenticationModule;







