// source: landing.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.landing.LandingRequest', null, global);
goog.exportSymbol('proto.landing.LandingResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.landing.LandingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.landing.LandingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.landing.LandingRequest.displayName = 'proto.landing.LandingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.landing.LandingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.landing.LandingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.landing.LandingResponse.displayName = 'proto.landing.LandingResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.landing.LandingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.landing.LandingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.landing.LandingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.landing.LandingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    m: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    s: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    cyLand: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    p: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    airport: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.landing.LandingRequest}
 */
proto.landing.LandingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.landing.LandingRequest;
  return proto.landing.LandingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.landing.LandingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.landing.LandingRequest}
 */
proto.landing.LandingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCyLand(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAirport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.landing.LandingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.landing.LandingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.landing.LandingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.landing.LandingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getM();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getS();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCyLand();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getP();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAirport();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional double m = 1;
 * @return {number}
 */
proto.landing.LandingRequest.prototype.getM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingRequest} returns this
 */
proto.landing.LandingRequest.prototype.setM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double S = 2;
 * @return {number}
 */
proto.landing.LandingRequest.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingRequest} returns this
 */
proto.landing.LandingRequest.prototype.setS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float Cy_land = 3;
 * @return {number}
 */
proto.landing.LandingRequest.prototype.getCyLand = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingRequest} returns this
 */
proto.landing.LandingRequest.prototype.setCyLand = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double P = 4;
 * @return {number}
 */
proto.landing.LandingRequest.prototype.getP = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingRequest} returns this
 */
proto.landing.LandingRequest.prototype.setP = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string Airport = 5;
 * @return {string}
 */
proto.landing.LandingRequest.prototype.getAirport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.landing.LandingRequest} returns this
 */
proto.landing.LandingRequest.prototype.setAirport = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.landing.LandingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.landing.LandingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.landing.LandingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.landing.LandingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vLand: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lLand: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.landing.LandingResponse}
 */
proto.landing.LandingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.landing.LandingResponse;
  return proto.landing.LandingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.landing.LandingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.landing.LandingResponse}
 */
proto.landing.LandingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVLand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLLand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.landing.LandingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.landing.LandingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.landing.LandingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.landing.LandingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVLand();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLLand();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 V_land = 1;
 * @return {number}
 */
proto.landing.LandingResponse.prototype.getVLand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingResponse} returns this
 */
proto.landing.LandingResponse.prototype.setVLand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 L_land = 2;
 * @return {number}
 */
proto.landing.LandingResponse.prototype.getLLand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.landing.LandingResponse} returns this
 */
proto.landing.LandingResponse.prototype.setLLand = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.landing);
