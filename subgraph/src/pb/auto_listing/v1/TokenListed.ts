// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { Token } from "./Token";
import { Transaction } from "./Transaction";

export class TokenListed {
  static encode(message: TokenListed, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.timestamp);

    writer.uint32(18);
    writer.string(message.autoListing);

    const token = message.token;
    if (token !== null) {
      writer.uint32(26);
      writer.fork();
      Token.encode(token, writer);
      writer.ldelim();
    }

    const tx = message.tx;
    if (tx !== null) {
      writer.uint32(34);
      writer.fork();
      Transaction.encode(tx, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TokenListed {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TokenListed();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64();
          break;

        case 2:
          message.autoListing = reader.string();
          break;

        case 3:
          message.token = Token.decode(reader, reader.uint32());
          break;

        case 4:
          message.tx = Transaction.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  timestamp: u64;
  autoListing: string;
  token: Token | null;
  tx: Transaction | null;

  constructor(
    timestamp: u64 = 0,
    autoListing: string = "",
    token: Token | null = null,
    tx: Transaction | null = null
  ) {
    this.timestamp = timestamp;
    this.autoListing = autoListing;
    this.token = token;
    this.tx = tx;
  }
}
