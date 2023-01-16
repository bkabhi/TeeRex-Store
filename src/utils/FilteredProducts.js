export const colours = ['Red', 'Blue', 'Green'];
export const genders = ['Men', 'Women'];
export const prices = ['0-Rs250', 'Rs251-450', 'Rs 450'];
export const types = ['Polo', 'Hoodie', 'Basic'];

export const getFilterProducts = (filter, products) => {
    if (filter.length > 0) {
        // filter color, gender and type 
        let filteredData = products.filter(item =>
            filter.includes(item.color) ||
            filter.includes(item.gender) ||
            filter.includes(item.type)
        )
        // filter price range 
        if (filter.includes(prices[2]) || filter.includes(prices[1]) || filter.includes(prices[0])) {
            filteredData = products.filter(item =>
                (filter.includes(prices[2]) && filter.includes(prices[1]) && filter.includes(prices[0])
                    ? item : filter.includes(prices[1]) && filter.includes(prices[0])
                    ? item.price < 450 : filter.includes(prices[1]) && filter.includes(prices[2])
                    ? item.price > 250 : filter.includes(prices[0]) && filter.includes(prices[2])
                    ? item.price <= 250 || item.price >= 450 : filter.includes(prices[2])
                    ? item.price >= 450 : filter.includes(prices[1])
                    ? item.price > 250 && item.price < 450 : filter.includes(prices[0])
                    ? item.price <= 250 : item
                )
            )
        }
        return filteredData;
    } else {
        return products;
    }
}