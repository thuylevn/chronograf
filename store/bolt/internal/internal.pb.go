// Code generated by protoc-gen-gogo.
// source: internal.proto
// DO NOT EDIT!

/*
Package internal is a generated protocol buffer package.

It is generated from these files:
	internal.proto

It has these top-level messages:
	Exploration
*/
package internal

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

type Exploration struct {
	ID        int64  `protobuf:"varint,1,opt,name=ID,json=iD,proto3" json:"ID,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=Name,json=name,proto3" json:"Name,omitempty"`
	UserID    int64  `protobuf:"varint,3,opt,name=UserID,json=userID,proto3" json:"UserID,omitempty"`
	Data      string `protobuf:"bytes,4,opt,name=Data,json=data,proto3" json:"Data,omitempty"`
	CreatedAt int64  `protobuf:"varint,5,opt,name=CreatedAt,json=createdAt,proto3" json:"CreatedAt,omitempty"`
	UpdatedAt int64  `protobuf:"varint,6,opt,name=UpdatedAt,json=updatedAt,proto3" json:"UpdatedAt,omitempty"`
}

func (m *Exploration) Reset()                    { *m = Exploration{} }
func (m *Exploration) String() string            { return proto.CompactTextString(m) }
func (*Exploration) ProtoMessage()               {}
func (*Exploration) Descriptor() ([]byte, []int) { return fileDescriptorInternal, []int{0} }

func init() {
	proto.RegisterType((*Exploration)(nil), "internal.Exploration")
}

func init() { proto.RegisterFile("internal.proto", fileDescriptorInternal) }

var fileDescriptorInternal = []byte{
	// 166 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xe2, 0xe2, 0xcb, 0xcc, 0x2b, 0x49,
	0x2d, 0xca, 0x4b, 0xcc, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x80, 0xf1, 0x95, 0x66,
	0x32, 0x72, 0x71, 0xbb, 0x56, 0x14, 0xe4, 0xe4, 0x17, 0x25, 0x96, 0x64, 0xe6, 0xe7, 0x09, 0xf1,
	0x71, 0x31, 0x79, 0xba, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x30, 0x07, 0x31, 0x65, 0xba, 0x08, 0x09,
	0x71, 0xb1, 0xf8, 0x25, 0xe6, 0xa6, 0x4a, 0x30, 0x29, 0x30, 0x6a, 0x70, 0x06, 0xb1, 0xe4, 0x25,
	0xe6, 0xa6, 0x0a, 0x89, 0x71, 0xb1, 0x85, 0x16, 0xa7, 0x16, 0x79, 0xba, 0x48, 0x30, 0x83, 0xd5,
	0xb1, 0x95, 0x82, 0x79, 0x20, 0xb5, 0x2e, 0x89, 0x25, 0x89, 0x12, 0x2c, 0x10, 0xb5, 0x29, 0x89,
	0x25, 0x89, 0x42, 0x32, 0x5c, 0x9c, 0xce, 0x45, 0xa9, 0x89, 0x25, 0xa9, 0x29, 0x8e, 0x25, 0x12,
	0xac, 0x60, 0xe5, 0x9c, 0xc9, 0x30, 0x01, 0x90, 0x6c, 0x68, 0x41, 0x0a, 0x54, 0x96, 0x0d, 0x22,
	0x5b, 0x0a, 0x13, 0x48, 0x62, 0x03, 0x3b, 0xd6, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x64, 0xd7,
	0x3d, 0xfe, 0xbe, 0x00, 0x00, 0x00,
}
