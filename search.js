class SearchSuggestionSystem {
    constructor(products) {
        // Sort products lexicographically
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        let result = [];
        let prefix = '';

        for (let char of searchWord) {
            prefix += char;

            // Filter products that start with the current prefix
            let matchingProducts = this.products.filter(product => product.startsWith(prefix));

            // Take only the first 3 suggestions
            result.push(matchingProducts.slice(0, 3));
        }

        return result;
    }
}

// Example:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const searchSystem = new SearchSuggestionSystem(products);
console.log(searchSystem.getSuggestions(searchWord));

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
