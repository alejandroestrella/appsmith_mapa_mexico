export default {
    // This function will transform the table data into the required format for the map.
    generateMarkerData: () => {
        // First, check if the table has any data to prevent errors.
        if (!Table1.tableData || Table1.tableData.length === 0) {
            return []; // Return an empty array if there's no data
        }

        // Use the .map() function to iterate over each row in the table
        // and create a new object in the desired format.
        return Table1.tableData.map(row => {
            return {
                id: row.id, // 👈 Replace 'id' with your actual column name
                name: row.name, // 👈 Replace 'name' with your actual column name
                lat: row.lat, // 👈 Replace 'lat' with your actual column name
                lng: row.lng // 👈 Replace 'lng' with your actual column name
            };
        });
    }
}