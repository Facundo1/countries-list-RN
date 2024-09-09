# GM2 React Native Interview
Try this here:  https://ylq5nz.csb.app/

## General Rules

1.- Googling for answers is possible but copy/pasting a solution is not.

2. All questions are allowed, and even encouraged. As interviwers we can decide not to answer a question if we are evaluating on that topic, but that´s for us to decide! Ask away!
3. Code, folders and styling structure must be clean, mantainable and scalable.
4. Styling will be considered, so apply the styles you consider necessary. To avoid extra complexity implement the styles alongside the components.

Note: This exercise uses React Native for Web components. If any doubt please check the docs: https://necolas.github.io/react-native-web/docs/

## Interview instructions

In the `App.js` components in the /src folder you have a simple list with items composed by `Capital, Country`.

1.- Implement a function that will fetch the following information from a country:

- Capital
- Country Name
- Flag
- Language
- Population
- Region
  using this public API: https://restcountries.com/

2.- Render a scrollable list of the first 10 countries in the list showing a card similar `country-card.png`. Create a `Card.js` component that will be rendered with the information of the country.
3.- Once the user scroll down and arrive to almost 80% of all scrollable height render the next 10 items on the previously fetched array of countries.
4.- (Extra) Add a floating button to the end of the list that will sent you back to the top of the list.
5.- (Extra) Add a Header with a search input to find a country by name.
6.- (Extra) Add a dropdown filter to the Header that will filter the list of countries by the selected region. The possible regions are:

- Africa
- America
- Asia
- Europe
- Oceania
  See home-screen.png for a visual reference
