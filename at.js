const _ = require( "./stacks/_" );
const { print } = require( "./stacks/_" );

var lista = [
	item0 = "Item 0",
	item1 = "Item 1",
	item2 = "Item 2",
];

_.print( item0 );
_.print( lista[1] );
_.print( lista.at( 2 ) );

_.print( lista[-1] );       // doesn't work
_.print( lista.at( -1 ) );  // last position