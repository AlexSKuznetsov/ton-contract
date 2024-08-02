import { toNano } from '@ton/core';
import { FirstContract } from '../wrappers/FirstContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const firstContract = provider.open(await FirstContract.fromInit(132356n));

    const counter = await firstContract.getCounter();
    const id = await firstContract.getId();

    const address = firstContract.address;

    console.log('counter - ', counter);
    console.log('id - ', id);
    console.log('address - ', address);

    // run methods on `firstContract`
}
