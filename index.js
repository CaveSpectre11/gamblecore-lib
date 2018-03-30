'use strict';

var gamblecore = module.exports;

// module information
gamblecore.version = 'v' + require('./package.json').version;
gamblecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of gamblecore-lib found. ' +
      'Please make sure to require gamblecore-lib and check that submodules do' +
      ' not also include their own gamblecore-lib dependency.';
    throw new Error(message);
  }
};
gamblecore.versionGuard(global._garlicore);
global._garlicore = gamblecore.version;

// crypto
gamblecore.crypto = {};
gamblecore.crypto.BN = require('./lib/crypto/bn');
gamblecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
gamblecore.crypto.Hash = require('./lib/crypto/hash');
gamblecore.crypto.Random = require('./lib/crypto/random');
gamblecore.crypto.Point = require('./lib/crypto/point');
gamblecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
gamblecore.encoding = {};
gamblecore.encoding.Base58 = require('./lib/encoding/base58');
gamblecore.encoding.Base58Check = require('./lib/encoding/base58check');
gamblecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
gamblecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
gamblecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
gamblecore.util = {};
gamblecore.util.buffer = require('./lib/util/buffer');
gamblecore.util.js = require('./lib/util/js');
gamblecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
gamblecore.errors = require('./lib/errors');

// main bitcoin library
gamblecore.Address = require('./lib/address');
gamblecore.Block = require('./lib/block');
gamblecore.MerkleBlock = require('./lib/block/merkleblock');
gamblecore.BlockHeader = require('./lib/block/blockheader');
gamblecore.HDPrivateKey = require('./lib/hdprivatekey.js');
gamblecore.HDPublicKey = require('./lib/hdpublickey.js');
gamblecore.Networks = require('./lib/networks');
gamblecore.Opcode = require('./lib/opcode');
gamblecore.PrivateKey = require('./lib/privatekey');
gamblecore.PublicKey = require('./lib/publickey');
gamblecore.Script = require('./lib/script');
gamblecore.Transaction = require('./lib/transaction');
gamblecore.URI = require('./lib/uri');
gamblecore.Unit = require('./lib/unit');

// dependencies, subject to change
gamblecore.deps = {};
gamblecore.deps.bnjs = require('bn.js');
gamblecore.deps.bs58 = require('bs58');
gamblecore.deps.Buffer = Buffer;
gamblecore.deps.elliptic = require('elliptic');
gamblecore.deps.scryptsy = require('scryptsy');
gamblecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
gamblecore.Transaction.sighash = require('./lib/transaction/sighash');
