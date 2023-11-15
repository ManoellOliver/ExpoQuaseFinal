import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let saveItems = [];
    const response = AsyncStorage.getItem ('items');
    if (response) saveItems = JSON.parse(response);
saveItems.push(listItem);
return AsyncStorage.setItem('Items', JSON.stringify(saveItems));

}

function getItems(){
    return AsyncStorage.getItem('items')
        .then(response =>{
            if(response)
            return Promise.resolve(JSON.parse(response));
        else
            return Promise.resolve([]);
        })

        async function getItem(id){

            const saveItem = await getItems();
            return saveItem.find(item => item.id === id);
        }

}
module.exports = {

    saveItem,
    getItems,
    getItem
}
