var ref = require("ref");
var ffi = require("ffi");

// typedefs
var myobj = ref.types.void // we don't know what the layout of "myobj" looks like
var myobjPtr = ref.refType(myobj);

var MyLibrary = ffi.Library('./libmylibrary', {
  "do_some_number_fudging": [ 'double', [ 'double', 'int' ] ],
});