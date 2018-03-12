
/******************************************************************************
 * 
 * File:
 *   server.js
 *
 * Description:
 *   Node server file for Beta Sig Webpage
 *
 *****************************************************************************/

var express = require( 'express' );
var app = express();
var path = require( 'path' );

let PORT = 8080;

app.set( 'port', PORT );
app.use( express.static( path.join( __dirname, 'public' )));

var server = app.listen( app.get( 'port' ), function() {

  var port = server.address().port;
  console.log( "Frat on port: " + port );

});