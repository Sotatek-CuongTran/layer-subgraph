// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pool__depositV2LPInputParamsStruct extends ethereum.Tuple {
  get pair(): Address {
    return this[0].toAddress();
  }

  get liquidityToMigrate(): BigInt {
    return this[1].toBigInt();
  }
}

export class Pool__openPositionResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: i32;
  value5: i32;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: i32,
    value5: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromI32(this.value4));
    map.set("value5", ethereum.Value.fromI32(this.value5));
    return map;
  }
}

export class Pool__withdrawResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  ADMIN(): Bytes {
    let result = super.call("ADMIN", "ADMIN():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADMIN(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADMIN", "ADMIN():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  BASE_DECIMALS(): i32 {
    let result = super.call("BASE_DECIMALS", "BASE_DECIMALS():(uint8)", []);

    return result[0].toI32();
  }

  try_BASE_DECIMALS(): ethereum.CallResult<i32> {
    let result = super.tryCall("BASE_DECIMALS", "BASE_DECIMALS():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  BONE(): BigInt {
    let result = super.call("BONE", "BONE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_BONE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("BONE", "BONE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BPOW_PRECISION(): BigInt {
    let result = super.call("BPOW_PRECISION", "BPOW_PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_BPOW_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BPOW_PRECISION",
      "BPOW_PRECISION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MAX_BPOW_BASE(): BigInt {
    let result = super.call("MAX_BPOW_BASE", "MAX_BPOW_BASE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_BPOW_BASE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_BPOW_BASE",
      "MAX_BPOW_BASE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_BPOW_BASE(): BigInt {
    let result = super.call("MIN_BPOW_BASE", "MIN_BPOW_BASE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_BPOW_BASE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_BPOW_BASE",
      "MIN_BPOW_BASE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  REBALANCE_ROLE(): Bytes {
    let result = super.call("REBALANCE_ROLE", "REBALANCE_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REBALANCE_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REBALANCE_ROLE",
      "REBALANCE_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deposit(
    _recipient: Address,
    _token0Amount: BigInt,
    _token1Amount: BigInt
  ): BigInt {
    let result = super.call(
      "deposit",
      "deposit(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromUnsignedBigInt(_token0Amount),
        ethereum.Value.fromUnsignedBigInt(_token1Amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_deposit(
    _recipient: Address,
    _token0Amount: BigInt,
    _token1Amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposit",
      "deposit(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromUnsignedBigInt(_token0Amount),
        ethereum.Value.fromUnsignedBigInt(_token1Amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositV2LP(
    params: Pool__depositV2LPInputParamsStruct,
    _recipient: Address
  ): BigInt {
    let result = super.call(
      "depositV2LP",
      "depositV2LP((address,uint256),address):(uint256)",
      [ethereum.Value.fromTuple(params), ethereum.Value.fromAddress(_recipient)]
    );

    return result[0].toBigInt();
  }

  try_depositV2LP(
    params: Pool__depositV2LPInputParamsStruct,
    _recipient: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositV2LP",
      "depositV2LP((address,uint256),address):(uint256)",
      [ethereum.Value.fromTuple(params), ethereum.Value.fromAddress(_recipient)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositV3NFT(_tokenId: BigInt, _recipient: Address): BigInt {
    let result = super.call(
      "depositV3NFT",
      "depositV3NFT(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_recipient)
      ]
    );

    return result[0].toBigInt();
  }

  try_depositV3NFT(
    _tokenId: BigInt,
    _recipient: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositV3NFT",
      "depositV3NFT(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_recipient)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): i32 {
    let result = super.call("fee", "fee():(uint24)", []);

    return result[0].toI32();
  }

  try_fee(): ethereum.CallResult<i32> {
    let result = super.tryCall("fee", "fee():(uint24)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonces(owner: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  openPosition(): Pool__openPositionResult {
    let result = super.call(
      "openPosition",
      "openPosition():(uint256,uint128,uint256,uint256,int24,int24)",
      []
    );

    return new Pool__openPositionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toI32()
    );
  }

  try_openPosition(): ethereum.CallResult<Pool__openPositionResult> {
    let result = super.tryCall(
      "openPosition",
      "openPosition():(uint256,uint128,uint256,uint256,int24,int24)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__openPositionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32(),
        value[5].toI32()
      )
    );
  }

  posNFT(): Address {
    let result = super.call("posNFT", "posNFT():(address)", []);

    return result[0].toAddress();
  }

  try_posNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("posNFT", "posNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  positionManager(): Address {
    let result = super.call(
      "positionManager",
      "positionManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_positionManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "positionManager",
      "positionManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stage(): i32 {
    let result = super.call("stage", "stage():(uint8)", []);

    return result[0].toI32();
  }

  try_stage(): ethereum.CallResult<i32> {
    let result = super.tryCall("stage", "stage():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  swapRouter(): Address {
    let result = super.call("swapRouter", "swapRouter():(address)", []);

    return result[0].toAddress();
  }

  try_swapRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapRouter", "swapRouter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  token0(): Address {
    let result = super.call("token0", "token0():(address)", []);

    return result[0].toAddress();
  }

  try_token0(): ethereum.CallResult<Address> {
    let result = super.tryCall("token0", "token0():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  token1(): Address {
    let result = super.call("token1", "token1():(address)", []);

    return result[0].toAddress();
  }

  try_token1(): ethereum.CallResult<Address> {
    let result = super.tryCall("token1", "token1():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalAmount0(): BigInt {
    let result = super.call("totalAmount0", "totalAmount0():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalAmount0(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalAmount0", "totalAmount0():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalAmount1(): BigInt {
    let result = super.call("totalAmount1", "totalAmount1():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalAmount1(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalAmount1", "totalAmount1():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uniswapV3Pool(): Address {
    let result = super.call("uniswapV3Pool", "uniswapV3Pool():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapV3Pool(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapV3Pool",
      "uniswapV3Pool():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdraw(_recipient: Address, _liquidity: BigInt): Pool__withdrawResult {
    let result = super.call(
      "withdraw",
      "withdraw(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromUnsignedBigInt(_liquidity)
      ]
    );

    return new Pool__withdrawResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_withdraw(
    _recipient: Address,
    _liquidity: BigInt
  ): ethereum.CallResult<Pool__withdrawResult> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_recipient),
        ethereum.Value.fromUnsignedBigInt(_liquidity)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__withdrawResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _nft(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _swapRouter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveNFTCall extends ethereum.Call {
  get inputs(): ApproveNFTCall__Inputs {
    return new ApproveNFTCall__Inputs(this);
  }

  get outputs(): ApproveNFTCall__Outputs {
    return new ApproveNFTCall__Outputs(this);
  }
}

export class ApproveNFTCall__Inputs {
  _call: ApproveNFTCall;

  constructor(call: ApproveNFTCall) {
    this._call = call;
  }
}

export class ApproveNFTCall__Outputs {
  _call: ApproveNFTCall;

  constructor(call: ApproveNFTCall) {
    this._call = call;
  }
}

export class ApproveSwapRouterCall extends ethereum.Call {
  get inputs(): ApproveSwapRouterCall__Inputs {
    return new ApproveSwapRouterCall__Inputs(this);
  }

  get outputs(): ApproveSwapRouterCall__Outputs {
    return new ApproveSwapRouterCall__Outputs(this);
  }
}

export class ApproveSwapRouterCall__Inputs {
  _call: ApproveSwapRouterCall;

  constructor(call: ApproveSwapRouterCall) {
    this._call = call;
  }
}

export class ApproveSwapRouterCall__Outputs {
  _call: ApproveSwapRouterCall;

  constructor(call: ApproveSwapRouterCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token0Amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _token1Amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get liquidity(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositV2LPCall extends ethereum.Call {
  get inputs(): DepositV2LPCall__Inputs {
    return new DepositV2LPCall__Inputs(this);
  }

  get outputs(): DepositV2LPCall__Outputs {
    return new DepositV2LPCall__Outputs(this);
  }
}

export class DepositV2LPCall__Inputs {
  _call: DepositV2LPCall;

  constructor(call: DepositV2LPCall) {
    this._call = call;
  }

  get params(): DepositV2LPCallParamsStruct {
    return this._call.inputValues[0].value.toTuple() as DepositV2LPCallParamsStruct;
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositV2LPCall__Outputs {
  _call: DepositV2LPCall;

  constructor(call: DepositV2LPCall) {
    this._call = call;
  }

  get liquidity(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositV2LPCallParamsStruct extends ethereum.Tuple {
  get pair(): Address {
    return this[0].toAddress();
  }

  get liquidityToMigrate(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositV3NFTCall extends ethereum.Call {
  get inputs(): DepositV3NFTCall__Inputs {
    return new DepositV3NFTCall__Inputs(this);
  }

  get outputs(): DepositV3NFTCall__Outputs {
    return new DepositV3NFTCall__Outputs(this);
  }
}

export class DepositV3NFTCall__Inputs {
  _call: DepositV3NFTCall;

  constructor(call: DepositV3NFTCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositV3NFTCall__Outputs {
  _call: DepositV3NFTCall;

  constructor(call: DepositV3NFTCall) {
    this._call = call;
  }

  get liquidity(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class RebalanceCall extends ethereum.Call {
  get inputs(): RebalanceCall__Inputs {
    return new RebalanceCall__Inputs(this);
  }

  get outputs(): RebalanceCall__Outputs {
    return new RebalanceCall__Outputs(this);
  }
}

export class RebalanceCall__Inputs {
  _call: RebalanceCall;

  constructor(call: RebalanceCall) {
    this._call = call;
  }

  get tickLower(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tickUpper(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get token0Share(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get token1Share(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RebalanceCall__Outputs {
  _call: RebalanceCall;

  constructor(call: RebalanceCall) {
    this._call = call;
  }
}

export class SetNFTManagerCall extends ethereum.Call {
  get inputs(): SetNFTManagerCall__Inputs {
    return new SetNFTManagerCall__Inputs(this);
  }

  get outputs(): SetNFTManagerCall__Outputs {
    return new SetNFTManagerCall__Outputs(this);
  }
}

export class SetNFTManagerCall__Inputs {
  _call: SetNFTManagerCall;

  constructor(call: SetNFTManagerCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNFTManagerCall__Outputs {
  _call: SetNFTManagerCall;

  constructor(call: SetNFTManagerCall) {
    this._call = call;
  }
}

export class SetSwapRouterCall extends ethereum.Call {
  get inputs(): SetSwapRouterCall__Inputs {
    return new SetSwapRouterCall__Inputs(this);
  }

  get outputs(): SetSwapRouterCall__Outputs {
    return new SetSwapRouterCall__Outputs(this);
  }
}

export class SetSwapRouterCall__Inputs {
  _call: SetSwapRouterCall;

  constructor(call: SetSwapRouterCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSwapRouterCall__Outputs {
  _call: SetSwapRouterCall;

  constructor(call: SetSwapRouterCall) {
    this._call = call;
  }
}

export class StopRebalanceCall extends ethereum.Call {
  get inputs(): StopRebalanceCall__Inputs {
    return new StopRebalanceCall__Inputs(this);
  }

  get outputs(): StopRebalanceCall__Outputs {
    return new StopRebalanceCall__Outputs(this);
  }
}

export class StopRebalanceCall__Inputs {
  _call: StopRebalanceCall;

  constructor(call: StopRebalanceCall) {
    this._call = call;
  }
}

export class StopRebalanceCall__Outputs {
  _call: StopRebalanceCall;

  constructor(call: StopRebalanceCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _liquidity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}
