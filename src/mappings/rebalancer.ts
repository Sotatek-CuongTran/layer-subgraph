import { Transfer } from "./../types/Factory/Pool";
import { Amount } from "../types/schema";
import { BigInt, log } from "@graphprotocol/graph-ts";

export function handleTransfer(event: Transfer): void {
  log.info("xxx", ["xxx"]);
  let senderId = event.params.from.toHex();
  let recipientId = event.params.to.toHex();
  let amoutTransfer = event.params.value;
  let rblAddress = event.address.toHex();
  let sender = Amount.load(senderId + rblAddress);
  let recipient = Amount.load(recipientId + rblAddress);
  if (!sender) {
    sender = new Amount(senderId);
    sender.amount = BigInt.fromI32(0);
    sender.user_addess = event.params.from.toString();
    sender.rebalancer_address = event.address.toString();
  }
  if (!recipient) {
    recipient = new Amount(recipientId);
    recipient.amount = BigInt.fromI32(0);
    recipient.user_addess = event.params.to.toString();
    recipient.rebalancer_address = event.address.toString();
  }

  sender.save();
  recipient.save();
}
