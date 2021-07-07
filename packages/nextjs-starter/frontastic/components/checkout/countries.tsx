const convertToCountryName = (code) => {
    return `${code}`
    //return intl.formatMessage({ id: `country.${code}` })    
}

const convertToStateName = (country, state) => {
    return `${country}.${state}`
    //return intl.formatMessage({ id: `state.${country}.${state}` })
}

const getCountryStates = (country) => {
    if (country === 'US') {
        return [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA',
            'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM',
            'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
            'WV', 'WI', 'WY',
        ]
    }

    if (country === 'CA') {
        return [
            'AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT',
        ]
    }

    return null
}

export { convertToCountryName, convertToStateName, getCountryStates }
