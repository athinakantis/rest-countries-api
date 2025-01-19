import { Currency } from '../services/types';

export const formatLanguages = (languages: object) => {
  return <p><span>Languages: </span>{Object.values(languages).join(', ')}</p>
}

export const formatCurrencies = (currencies: Currency) => {
  let formattedCurrencies = []
  for (let i = 0; i < Object.keys(currencies).length; i++) {
    formattedCurrencies.push(Object.values(currencies)[i]['name'])
  }
  return <p><span>Currencies: </span>{formattedCurrencies.join(', ')}</p>
}

export const formatTLD = (tld: string[]) => {
  return <p><span>Top Level Domain: </span>{tld.join(', ')}</p>
}