var message;
function test(){ 
	message=" ok"
}
test()

console.log(message);

var person = new Object();
person.name="yuyu";
console.log(person.name);

var person = "yuyu";
person.age = "12";
console.log(person.age);

var obj1 = new Object();
var obj2=obj1;

obj1.name="yuyu";
console.log(obj2.name);

obj1.name="yuyuha";
console.log(obj2.name);

obj2.name="我改过了";
console.log(obj1.name);


function addTen(num){
	num+=num
	return num;
}

var count = 20
var result = addTen(count);
console.log(count);
console.log(result);

function setName(obj){
	obj.name="yuyuyu";
	obj = new Object();
	obj.name="hahaha";
}

var person = new Object();
setName(person);
console.log(person.name);

var color = "blue";
changeColor();
function changeColor(){
	if(color == "blue"){
		color = "red";
	}else{
		color = "blue";
	}
}


console.log("color is"+color);

var color="blue";

function changeColor(){
	var anotherColor="red";

	function swapColors(){
		var tempColor = anotherColor;
		anotherColor=color
		color = tempColor;

		console.log("1"+color);
		console.log("1"+anotherColor);
		console.log("1"+tempColor);
	}

	swapColors();
	console.log("2"+color);
		console.log("2"+anotherColor);
		console.log("2"+tempColor);
}

changeColor();
console.log("3"+color);
console.log("3"+anotherColor);
console.log("3"+tempColor);


function add(num1,num2){
	sum=num1+num2;
	return sum;
}

var result=add(10,20);
console.log(sum);

var color="blue";
var color="red";
function getColor(){
	return color;
}

console.log(getColor());

function createPerson(name){
	var localPerson = new Object();
	localPerson.name = name;
	return localPerson.name;
}

var aaa = createPerson("123333");


aaa=null;
console.log(aaa);

function displayInfo(args){
	var output="";

	if(typeof args.name == "string"){
		output +="Name"+ args.name+"\n";
	}

	if(typeof args.age == "number"){
		output += "Age"+args.age+"\n";
	}

	console.log(output);
}

displayInfo({
	name:"yuyuy",
	age:30
});

displayInfo({
	age:09,
	name:"uuuuuu"
});


displayInfo({
	name:"uuuuuu"
});

var colors =["red","blue","yellow"];
colors.length=2;
console.log(colors.length);

colors.length=4;
console.log(colors);

colors[80]=3;
console.log(colors);


var person1={
	toLocaleString:function(){
		return "heheda";
	},
	toString:function(){
		return "huhuha";
	}
};

var person2={
	toLocaleString:function(){
		return "huhahuha";
	},

	toString:function(){
		return "lalalhe";
	}
};

var person=[person1,person2];
console.log(person);
console.log(person.toString());
console.log(person.toLocaleString());

var colors =["red","blue","yellow"];
console.log(colors.join(","));
console.log(colors.join("||"));

var colors = new Arrary();
var color_div=colors.push("red","blue");
console.log(color_div);

color_div = colors.push("black");
console.log(color_div);

color_div =colors.pop();
console.log(color_div);
console.log(color_div.length);

var colors =["red","green","blue"];
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);

removed = colors.splice(1,0,"yellow","orange");
console.log(colors);
console.log(removed);
removed = colors.splice(1,1,"red","purple");
console.log(colors);
console.log(removed);


var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
	return (item>2);
});

console.log(everyResult);

var someResult = numbers.some(function(item,index,array){
	return (item>2);
});
console.log(someResult);

var filterResult = numbers.filter(function(item, index,array){
	return (item>2);
});
console.log(filterResult);

var mapResult = numbers.map(function(item,index,array){
	return item*2;
});
console.log(mapResult);

var values =[1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
	return prev+cur;
});

console.log(sum);

var sum = values.reduceRight(function(prev,cur,index,array){
	return prev+cur;
});

function sum(num1,num2){
	return num1+num2;
}

console.log(sum(10,20));

var anothersum = sum;
console.log(anothersum(90,20));

sum=null;
console.log(anothersum(90,50));

function callSomeFunction(someFuction,someArgument){
	return someFuction(someArgument);
}

function add10(num){
	return num+10;
}

var result1 = callSomeFunction(add10,10);
console.log(result1);

function getGreeting(name){
	return "Hello," +name;
}

var result2 = callSomeFunction(getGreeting,"Nicholas");
console.log(result2);


function createComparisonFunction(propertyName){
	return function(Object1,Object2){
		var value1=Object1[propertyName];
		var value2=Object2[propertyName];

		if(value1<value2){
			return -1;
		}else if(value1>value2){
			return 1;
		}else{
			return 0;
		}
	};
}

var data =[{name:"ddddd",age:230},{name:"yyyyy",age:29}];

data.sort(createComparisonFunction("name"));
console.log(data[0].name);

data.sort(createComparisonFunction("age"));
console.log(data[0].name);

var s1=new String("some text");
console.log(s1);
var s2=s1.substring(2);
console.log(s2);
s1=null;
console.log(s1);

var s1="some text";
console.log(s1);
s1.color = "red";
console.log(s1);
console.log(s1.color);


var obj= new Object("some text");
console.log(obj instanceof String);

var value = "25";
var number = Number(value);
console.log(typeof number);

var obj = new Number(value);
console.log(typeof obj);

var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result);

var falseValue = false;
result = falseValue && true;
console.log(result);

console.log(typeof falseObject);
console.log(typeof falseValue);
console.log(falseObject instanceof Boolean);
console.log(falseValue instanceof Boolean);

var stringValue = "hello world";
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
console.log(stringValue[1]);

var stringValue = "hello world";
console.log(stringValue.slice(3));
console.log(stringValue.substring(3));
console.log(stringValue.substr(3));
console.log(stringValue.slice(3,7));
console.log(stringValue.substr(3,7));
console.log(stringValue.substring(3,7));

var stringValue = "hello world";
console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.slice(3,-4));
console.log(stringValue.substr(3,-4));
console.log(stringValue.substring(3,-4));

var stringValue="Lorem ipsum dolor sit amet,consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");

while(pos>-1){
	positions.push(pos);
	pos = stringValue.indexOf("e",pos+1);
}
console.log(positions);


function createPerson(name,age,job){
	var o = new Object();
	o.name=name;
	o.age=age;
	o.job=job;

	o.sayName = function(){
		console.log(this.name);
	};
	return o;
}

var person1 = createPerson("uuuuuuu",29,"yyyyyyy");
var person2 = createPerson("uuu2222",29,"yyy4444");

function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.sayName = sayName;
}

function sayName(){
	console.log(this.name);
}

var person1 = new Person("uuuuuuu",29,"yyyyyyy");
var person2 = new Person("uuu2222",29,"yyy4444");


function Person(){

}

Person.prototype.name="heheda";
Person.prototype.age=29;
Person.prototype.job="heheda job";
Person.prototype.sayName=function(){
	alert(this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

alert(person1.sayName == person1.sayName);


function Person(){

}

Person.prototype.name="heheda";
Person.prototype.age=29;
Person.prototype.job="heheda job";
Person.prototype.sayName=function(){
	alert(this.name);
};

var person1 = new Person();


var person2 = new Person();
person1.name ="Greg";
delete person1.name;
alert(person1.name);


function Person(){

}

Person.prototype.name="heheda";
Person.prototype.age=29;
Person.prototype.job="heheda job";
Person.prototype.sayName=function(){
	alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty("name"));
person1.name ="Greg";
alert(person1.name);
alert(person1.hasOwnProperty("name"));

alert(person2.name);
alert(person2.hasOwnProperty("name"));

delete person1.name;
alert(person1.name);
alert(person1.hasOwnProperty("name"));

function hasPrototypeProperty(object,name){
	return !Object.hasOwnProperty(name)&&(name in object);
}

function Person(){

}

Person.prototype.name="heheda";
Person.prototype.age=29;
Person.prototype.job="heheda job";
Person.prototype.sayName=function(){
	alert(this.name);
};

var person = new Person();
alert(hasPrototypeProperty(person,"name"));

person.name="xxx";
alert(hasPrototypeProperty(person,"name"));

String.prototype.startsWith = function(text){
	return this.indexOf(text)==0;
};

var msg = "hello world";
alert(msg.startsWith("hello"));

var name ="This Window";

var object = {
	name : "My Object",

	getNameFunc : function(){
		return function(){
			return this.name;
		};
	}
};

alert(object.getNameFunc()());

var msg = "hello world";
alert(msg.startsWith("hello"));

var name ="This Window";

var object = {
	name : "My Object",

	getNameFunc : function(){
		var that = this;
		return function(){
			return that.name;
		};
	}
};

alert(object.getNameFunc()());

function outputNumbers(counts){
	for(var i=0;i<count;i++){
		alert(i);
	}

	alert(i);
}

function Person(name){
	this.getName = function(){
		return name;
	};

	this.setName = function(value){
		name=value;
	}
}

var person = new Person("Nicholas");
alert(person.getName());
person.setName("Greg");
alert(person.getName());



(function(){
	var name ="";

	Person = function(value){
		name=value;
	};

	Person.prototype.getName =function(){
		return name;
	}

	Person.prototype.setName=function(value){
		name=value;
	};
})();

var person1 = new Person("Nicholas");
console.log(person1.getName());
person1.setName("Greg");
console.log(person1.getName());

var person2 = new Person("Michael");
console.log(person1.getName());
console.log(person2.getName());
