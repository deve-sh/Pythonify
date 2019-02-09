/*
	PYTHONIFY JAVASCRIPT
	
	Let's add Python Functionality to JavaScript. Because Why Not?
	Just a silly project to streamline stuff that otherwise takes a little getting used to.

	Note : Arrow Functions have been used wherever convinient.
*/

// ----------------------------------
//          Array Functions
// ----------------------------------

// Append Function

Array.prototype.append = function(args) {	// Append Function
	if(!args)
	{
		throw new Error("append() expects more than one argument. 0 given.");
	}
	
	if(Array.isArray(args)){
		this.push(...args);
	}	
	else{
		this.push(args);
	}		
};

// Remover Function

Array.prototype.remove = function(arg){
	if(Array.isArray(arg) || !arg){		// Checking if the arguments provided is an array or is not one at all.
		throw new Error("remove() takes exactly one argument. " + args.length + " given.");
	}
	
	for(let i=0;i<this.length;i++){		// Removing first instance.
		if(this[i]===arg){
			this.splice(i,1);
			return;
		}
	}
}

Array.prototype.insert = function(elements=[],position=0){	// Function to insert elements in a position.
	if(Array.isArray(elements))
		return (JSON.parse("["+(list.slice(0,2)+"," + `${[...elements]}` + ","+list.slice(2,list.length)).toString()+"]"));
	else
		return (JSON.parse("["+(list.slice(0,2)+","+elements+","+list.slice(2,list.length)).toString()+"]"));
}

Array.prototype.clear = function(){		// Function to remove all the elements from an array and "clear" it.
	this.splice(0,this.length);
	return this;
}

Array.prototype.count = function(el){
		let c=0;
		for(let i in this)
		{
			if(this[i]===el)
				c++;
		}
		return c;
}

// ---------------------------
//      String Functions
// ---------------------------

String.prototype._split = function(string=""){	// Split Function. Just a slight change as the use of split inside split will result in a Call Stack Exceed.
	return string.toString().split(this);
}

String.prototype.find = function(substr=""){		// Find Function, returns the index of the substring.
	return this.indexOf(substr.toString());		// Returns -1 if not found.
}

String.prototype.index = function(substr=""){		// Same as find function. Except returns a ValueError in case substring is not found.
	if(this.indexOf(substr.toString())!=-1){
		return this.indexOf(substr.toString());
	}
	else{
		throw new Error("ValueError: substring not found");
	}		// Returns -1 if not found.
}

String.prototype.isdigit = function(){return !isNaN(Number(this));}

String.prototype.islower = function(){return (this.toLowerCase() === this.toString());}

String.prototype.isupper = function(){return (this.toUpperCase()===this.toString());}

String.prototype.lower = function(){return (this.toLowerCase());}

String.prototype.upper = function(){return (this.toUpperCase());}

String.prototype.startswith = function(str=""){return this.startsWith(str.toString());}

String.prototype.endswith = function(str=""){return this.endsWith(str.toString());}

// ---------------------------
//     Standard Functions
// ---------------------------

var print = (string="",end="\n") => {console.log(string.toString()+`${end}`);return string.toString()+`${end}`};

var str = (element="") => element.toString();

var len = (element="") => (typeof element === "object" || typeof element === "string")?element.length:console.log(new Error("Element is not iterable."));

var input = (string="") => prompt(string.toString());

var abs = (number=0) => Math.abs(Number(number));

var type = (element) => typeof element;