// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";

export class ListingContractUpdated {
  static encode(message: ListingContractUpdated, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.autoListing);

    writer.uint32(18);
    writer.string(message.name);

    writer.uint32(26);
    writer.string(message.url);

    writer.uint32(34);
    writer.string(message.owner);

    writer.uint32(42);
    writer.bytes(message.meta);

    writer.uint32(48);
    writer.uint64(message.timestamp);
  }

  static decode(reader: Reader, length: i32): ListingContractUpdated {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ListingContractUpdated();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoListing = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.url = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.meta = reader.bytes();
          break;

        case 6:
          message.timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  autoListing: string;
  name: string;
  url: string;
  owner: string;
  meta: Uint8Array;
  timestamp: u64;

  constructor(
    autoListing: string = "",
    name: string = "",
    url: string = "",
    owner: string = "",
    meta: Uint8Array = new Uint8Array(0),
    timestamp: u64 = 0
  ) {
    this.autoListing = autoListing;
    this.name = name;
    this.url = url;
    this.owner = owner;
    this.meta = meta;
    this.timestamp = timestamp;
  }
}
