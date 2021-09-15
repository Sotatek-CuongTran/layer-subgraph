import { RebalancerV2Created } from "../types/Factory/Factory";
import { Factory, Rebalancer } from "../types/schema";
import { Rebalancer as RebalancerContract } from "../types/templates";

export function handleNewPool(event: RebalancerV2Created): void {
  let factory = Factory.load("1");

  // if no factory yet, set up blank initial
  if (factory == null) {
    factory = new Factory("1");
    factory.rebalancer_count = 0;
  }
  factory.rebalancer_count += 1;
  factory.save();

  let rebalancer = new Rebalancer(event.params.rebalancer.toHexString());
  rebalancer.save();

  RebalancerContract.create(event.params.rebalancer);
}
