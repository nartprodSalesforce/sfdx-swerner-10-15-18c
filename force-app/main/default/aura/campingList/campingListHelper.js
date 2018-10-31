({
    createitem: function(component, item) {
        console.log("in createitem helper");
        console.log("passed item "+ JSON.stringify(item));
        var theitems = component.get("v.items"); //clone of the  collection in view  
        
        // Copy the item to a new object
        // Clone the item 
        var newitem = JSON.parse(JSON.stringify(item));  //data from the form 
        
        console.log("items before 'create': " + JSON.stringify(theitems));
        theitems.push(newitem);
        component.set("v.items", theitems);
        console.log("items after 'create': " + JSON.stringify(theitems));
    }
})