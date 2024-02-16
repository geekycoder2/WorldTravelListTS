// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again
// • Reverse the order of your list. Print the array to show that its order has changed
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Step 1:Five places to visit
let travelDestinations: string[]=["Makkah","Madina","Turkey","London","Canada"];
// Step 2:print array in original oder
console.log(travelDestinations)
// Step 3:Alphabetical oder
console.log("/n alphabetical order")
console.log([...travelDestinations].sort())
// Step 4:show Array is still in its original oder
console.log("/nShowing Array is still in its original order")
console.log(travelDestinations)
// Step 5:Reverse the order of your list. Print the array to show that its order has changed
console.log("/n Reserved alphabetical order")
console.log([...travelDestinations].sort().reverse())
// Step 6:Show that your array is still in its original order by printing it again
console.log("/nShowing Array is still in its original order")
console.log(travelDestinations)
// Step 7:Reverse the order of your list. Print the array to show that its order has changed
console.log("/n Reserved Order")
travelDestinations.reverse()
console.log(travelDestinations)
// Step 8:Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("/n Back to Original")
travelDestinations.reverse()
console.log(travelDestinations)
// Step 9:Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("/n Alphabetical order")
travelDestinations.sort()
console.log(travelDestinations)

// Step 10:Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("/n Reverse Alphabetical order")
travelDestinations.sort().reverse()
console.log(travelDestinations)
