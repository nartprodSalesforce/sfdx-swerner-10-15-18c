({
    clickCreateItem : function(component, event, helper) {
        alert("Andres is here!");
        debugger;
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new item
            var newItem = component.get("v.newItem");
            console.log("campingListController.js valid item Create item: " + JSON.stringify(newItem));
            helper.createitem(component, newItem);
            /*
            
            var theitems = component.get("v.items"); //clone of the  collection in view  
            
            // Copy the item to a new object
            // Clone the item 
            var newitem = JSON.parse(JSON.stringify(item));  //data from the form 
            
            console.log("items before 'create': " + JSON.stringify(theitems));
            theitems.push(newitem);
            component.set("v.items", theitems);
            console.log("items after 'create': " + JSON.stringify(theitems));
            */
            
            
        }
    }
})