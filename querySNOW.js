// Create a GlideRecord query for the Discovery table
var grDiscovery = new GlideRecord('discovery');

// Add a condition to filter the imported discoveries from Wiz
grDiscovery.addQuery('source', 'Wiz');

// Query the Discovery table
grDiscovery.query();

// Iterate over the query results and print the discovered items
while (grDiscovery.next()) {
  gs.print('Discovered Item: ' + grDiscovery.getValue('name'));
}