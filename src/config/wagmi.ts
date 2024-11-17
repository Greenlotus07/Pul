import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, pulsechain } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const pulseChain = {
  ...pulsechain,
  id: 369,
  name: 'PulseChain',
  network: 'pulsechain',
  nativeCurrency: {
    name: 'Pulse',
    symbol: 'PLS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.pulsechain.com'],
    },
    public: {
      http: ['https://rpc.pulsechain.com'],
    },
  },
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, pulseChain],
  [
    alchemyProvider({ apiKey: process.env.VITE_ALCHEMY_API_KEY || '' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PulseTap',
  projectId: process.env.VITE_WALLET_CONNECT_PROJECT_ID || '',
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});