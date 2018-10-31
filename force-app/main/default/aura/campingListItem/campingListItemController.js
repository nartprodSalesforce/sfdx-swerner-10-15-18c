({
	packItem  : function(component, event, helper) {
		//var newMessage = event.getSource().get("v.label");
     //   var campingItem = component.get("v.item");
        console.log("packItem: Message: I am here" );
     //   console.log("item ': " + JSON.stringify(campingItem));
        component.set("v.item.Packed__c", "true");
        component.set("v.disabled", "true");
	}
})