import fetch from 'node-fetch';

const getFoodBankApi= async(location: string) => {
    try {
        let url = `https://www.givefood.org.uk/api/2/foodbanks/?${location}/`;
        const response = await fetch(url)
        const responseJson = await response.json();
        return responseJson.data;
    } catch {(error) => {
        console.log("something went wrong with the food bank api call", error);
    }}
}