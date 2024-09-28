import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    scrollSepolia: {
      url: "https://scroll-sepolia.g.alchemy.com/v2/WJQ0AcNn8zI77k8_pZYRKHIiPPIY3PhK", // Replace with your Alchemy URL
      accounts: ["fc14b41f7b03683de2fd8af45549e704793eb8f31d80025f09fb1e3abefefa86"] // Add your MetaMask private key here
    }
  }
};

export default config;
