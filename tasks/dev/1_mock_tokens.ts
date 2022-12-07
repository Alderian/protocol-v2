import { deployTokenFaucet } from './../../helpers/contracts-deployments';
import { task } from 'hardhat/config';
import { deployAllMockTokens } from '../../helpers/contracts-deployments';

task('dev:deploy-mock-tokens', 'Deploy mock tokens for dev enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify, pool }, localBRE) => {
    await localBRE.run('set-DRE');
    await deployTokenFaucet(verify);
    await deployAllMockTokens(pool, verify);
  });
