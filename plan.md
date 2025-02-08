# Countries API Plan

## Features

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle theme (dark & light mode)

## Pages

### - Main page (List)

#### Element

```js
<List>
```

#### Content

- Population: number
- Region: string
- Capital: string[]
- Flags: Objects

```js
flags: {
  png: 'url',
  svg: 'url'
}
```

### - Single page

#### Element

```js
<SinglePage country={country}>
```

#### Content

- Native name: Object

```js
nativeName: {
  eng: {
    official: 'New Zealand',
    common: 'New Zealand'
  },
  mri: {
    official: "Aotearoa",
    common: "Aotearoa"
  }
}
```

- Population: number
- Region: string
- Sub region: string
- Capital: string[]

- Top level domain: string[]
- Currencies: Object

  ```js
  currencies: {
    EUR: {
      name: 'Euro',
      symbol: '€'
    }
  }
  ```

- Languages: Object

```js
languages: {
  ara: "Arabic",
  heb: "Hebrew"
},
```

- Flags: Objects

```js
flags: {
  png: 'url',
  svg: 'url'
}
```

- Border Countries: string[]  
  Border countries array contains countries in their shortened format. E.g. "FRA" is france.
  The shortened version **might** be cca3, which is a string value

## API

- **Get all countries**
  ```js
  `https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags`;
  ```
- **Get one country**

  ```js
  `https://restcountries.com/v3.1/name/${COUNTRY_NAME}?fields=name,population,capital,region,tld,subregion,currencies,languages,borders,cca3,flags`;
  ```

- **Get country by country code** (CCA3) (with filtered values)

  ```js
  `https://restcountries.com/v3.1/alpha/${CCA3_CODE}?fields=name,currencies`;
  ```

- **Get countries of region**
  ```js
  `https://restcountries.com/v3.1/region/${REGION_NAME}`;
  ```

## Components

### **List**:

- Searchbar
- Card (country)

### **SinglePage**

No custom components

## Custom hooks

### useFetch

#### Parameters

- A function

#### Returns

- Data
- Loading
- Error
