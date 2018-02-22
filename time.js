//If you don't mind, can I have the time?//
var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (HOUR=="8" && MINUTE=="50" && PERIOD=="AM")
{
   console.log("Its almost 9 in the morning")
}
else
{
    console.log("Its just after 7 in the evening")
}
// using 7.15 PM//

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (HOUR=="8" && MINUTE=="50" && PERIOD=="AM")
{
   console.log("Its almost 9 in the morning")
}
else
{
    console.log("Its just after 7 in the evening")
}
//30 minute challenge//

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

var str="It's";

if (MINUTE > 30) {
    str+=" almost " + (HOUR+1)
}
else {
    str+=" just after" + HOUR
}
if (PERIOD=="PM") {
    str+=" in the evening."
}
else {
    str+=" in the morning."
}    
console.log (str)


