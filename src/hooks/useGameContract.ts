import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { GAME_CONTRACT_ABI, GAME_CONTRACT_ADDRESS } from '../config/contracts';
import { parseEther } from 'viem';

export function useGameContract() {
  const { config: startGameConfig } = usePrepareContractWrite({
    address: GAME_CONTRACT_ADDRESS,
    abi: GAME_CONTRACT_ABI,
    functionName: 'startGame',
    value: parseEther('0.01'),
  });

  const { write: startGame, isLoading: isStarting } = useContractWrite(startGameConfig);

  const { config: submitScoreConfig } = usePrepareContractWrite({
    address: GAME_CONTRACT_ADDRESS,
    abi: GAME_CONTRACT_ABI,
    functionName: 'submitScore',
  });

  const { write: submitScore, isLoading: isSubmitting } = useContractWrite(submitScoreConfig);

  return {
    startGame,
    submitScore,
    isStarting,
    isSubmitting,
  };
}