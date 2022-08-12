

//  ============================================== 
// [ print p ]

function p( v, v1, v2 ) {
	// console.log( v, v1 );
	// var vv = ( v2 === undefined ) ? console.log( v ) : console.log( v, v2 );
    
	if( v2 !== undefined ) {
		console.log( v, "\n" + v1, "\n" + v2 );
	} else if( v1 === undefined ) {
		console.log( v );
	} else if( v1 !== undefined && v2 === undefined ) {
		console.log( v, "\n" + v1 );
	}
    
}

//  ============================================== 
// [ print table ]

function print( v, v1, v2 ) {
	// console.table( v, v1 );
	// var vv = ( v2 === undefined ) ? console.log( v ) : console.log( v, v2 );
    
	if( v2 !== undefined ) {
		console.table( v, "\n" + v1, "\n" + v2 );
	} else if( v1 === undefined ) {
		console.table( v );
	} else if( v1 !== undefined && v2 === undefined ) {
		console.table( v, "\n" + v1 );
	}
    
}

//  ============================================== 
// [ reverse String ]

function revers( v ) {
    
	const vString = String( v );
	return vString.split( "" ).reverse().join( "" );
    
}

//  ============================================== 
// [ range ]

function range( start, stop, step ) {
	if( typeof stop == "undefined" ) {
		// one param defined
		stop = start;
		start = 0;
	}
    
	if( typeof step == "undefined" ) {
		step = 1;
	}
    
	if( ( step > 0 && start >= stop ) || ( step < 0 && start <= stop ) ) {
		return [];
	}
    
	var result = [];
	for( var i = start; step > 0 ? i < stop : i > stop; i += step ) {
		result.push( i );
	}

	return result;
}





// module.exports = print;
module.exports = {
	p,          
	print,      
	revers,     
	range       
};