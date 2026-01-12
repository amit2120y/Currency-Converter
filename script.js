const API_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const currencies = [
    { code: 'AED', name: 'United Arab Emirates', flag: '🇦🇪', symbol: 'د.إ' },
    { code: 'AFN', name: 'Afghanistan', flag: '🇦🇫', symbol: '؋' },
    { code: 'ALL', name: 'Albania', flag: '🇦🇱', symbol: 'L' },
    { code: 'AMD', name: 'Armenia', flag: '🇦🇲', symbol: '֏' },
    { code: 'ANG', name: 'Netherlands Antilles', flag: '🇨🇼', symbol: 'ƒ' },
    { code: 'AOA', name: 'Angola', flag: '🇦🇴', symbol: 'Kz' },
    { code: 'ARS', name: 'Argentina', flag: '🇦🇷', symbol: '$' },
    { code: 'AUD', name: 'Australia', flag: '🇦🇺', symbol: '$' },
    { code: 'AWG', name: 'Aruba', flag: '🇦🇼', symbol: 'ƒ' },
    { code: 'AZN', name: 'Azerbaijan', flag: '🇦🇿', symbol: '₼' },
    { code: 'BAM', name: 'Bosnia and Herzegovina', flag: '🇧🇦', symbol: 'KM' },
    { code: 'BBD', name: 'Barbados', flag: '🇧🇧', symbol: '$' },
    { code: 'BDT', name: 'Bangladesh', flag: '🇧🇩', symbol: '৳' },
    { code: 'BGN', name: 'Bulgaria', flag: '🇧🇬', symbol: 'лв' },
    { code: 'BHD', name: 'Bahrain', flag: '🇧🇭', symbol: '.د.ب' },
    { code: 'BIF', name: 'Burundi', flag: '🇧🇮', symbol: 'Fr' },
    { code: 'BMD', name: 'Bermuda', flag: '🇧🇲', symbol: '$' },
    { code: 'BND', name: 'Brunei', flag: '🇧🇳', symbol: '$' },
    { code: 'BOB', name: 'Bolivia', flag: '🇧🇴', symbol: 'Bs.' },
    { code: 'BRL', name: 'Brazil', flag: '🇧🇷', symbol: 'R$' },
    { code: 'BSD', name: 'Bahamas', flag: '🇧🇸', symbol: '$' },
    { code: 'BTN', name: 'Bhutan', flag: '🇧🇹', symbol: 'Nu.' },
    { code: 'BWP', name: 'Botswana', flag: '🇧🇼', symbol: 'P' },
    { code: 'BYN', name: 'Belarus', flag: '🇧🇾', symbol: 'Br' },
    { code: 'BZD', name: 'Belize', flag: '🇧🇿', symbol: '$' },
    { code: 'CAD', name: 'Canada', flag: '🇨🇦', symbol: '$' },
    { code: 'CDF', name: 'Congo (DRC)', flag: '🇨🇩', symbol: 'Fr' },
    { code: 'CHF', name: 'Switzerland', flag: '🇨🇭', symbol: 'Fr' },
    { code: 'CLP', name: 'Chile', flag: '🇨🇱', symbol: '$' },
    { code: 'CNY', name: 'China', flag: '🇨🇳', symbol: '¥' },
    { code: 'COP', name: 'Colombia', flag: '🇨🇴', symbol: '$' },
    { code: 'CRC', name: 'Costa Rica', flag: '🇨🇷', symbol: '₡' },
    { code: 'CUP', name: 'Cuba', flag: '🇨🇺', symbol: '$' },
    { code: 'CVE', name: 'Cape Verde', flag: '🇨🇻', symbol: '$' },
    { code: 'CZK', name: 'Czech Republic', flag: '🇨🇿', symbol: 'Kč' },
    { code: 'DJF', name: 'Djibouti', flag: '🇩🇯', symbol: 'Fr' },
    { code: 'DKK', name: 'Denmark', flag: '🇩🇰', symbol: 'kr' },
    { code: 'DOP', name: 'Dominican Republic', flag: '🇩🇴', symbol: '$' },
    { code: 'DZD', name: 'Algeria', flag: '🇩🇿', symbol: 'د.ج' },
    { code: 'EGP', name: 'Egypt', flag: '🇪🇬', symbol: '£' },
    { code: 'ERN', name: 'Eritrea', flag: '🇪🇷', symbol: 'Nfk' },
    { code: 'ETB', name: 'Ethiopia', flag: '🇪🇹', symbol: 'Br' },
    { code: 'EUR', name: 'Eurozone', flag: '🇪🇺', symbol: '€' },
    { code: 'FJD', name: 'Fiji', flag: '🇫🇯', symbol: '$' },
    { code: 'FKP', name: 'Falkland Islands', flag: '🇫🇰', symbol: '£' },
    { code: 'FOK', name: 'Faroe Islands', flag: '🇫🇴', symbol: 'kr' },
    { code: 'GBP', name: 'United Kingdom', flag: '🇬🇧', symbol: '£' },
    { code: 'GEL', name: 'Georgia', flag: '🇬🇪', symbol: '₾' },
    { code: 'GGP', name: 'Guernsey', flag: '🇬🇬', symbol: '£' },
    { code: 'GHS', name: 'Ghana', flag: '🇬🇭', symbol: '₵' },
    { code: 'GIP', name: 'Gibraltar', flag: '🇬🇮', symbol: '£' },
    { code: 'GMD', name: 'Gambia', flag: '🇬🇲', symbol: 'D' },
    { code: 'GNF', name: 'Guinea', flag: '🇬🇳', symbol: 'Fr' },
    { code: 'GTQ', name: 'Guatemala', flag: '🇬🇹', symbol: 'Q' },
    { code: 'GYD', name: 'Guyana', flag: '🇬🇾', symbol: '$' },
    { code: 'HKD', name: 'Hong Kong', flag: '🇭🇰', symbol: '$' },
    { code: 'HNL', name: 'Honduras', flag: '🇭🇳', symbol: 'L' },
    { code: 'HRK', name: 'Croatia', flag: '🇭🇷', symbol: 'kn' },
    { code: 'HTG', name: 'Haiti', flag: '🇭🇹', symbol: 'G' },
    { code: 'HUF', name: 'Hungary', flag: '🇭🇺', symbol: 'Ft' },
    { code: 'IDR', name: 'Indonesia', flag: '🇮🇩', symbol: 'Rp' },
    { code: 'ILS', name: 'Israel', flag: '🇮🇱', symbol: '₪' },
    { code: 'IMP', name: 'Isle of Man', flag: '🇮🇲', symbol: '£' },
    { code: 'INR', name: 'India', flag: '🇮🇳', symbol: '₹' },
    { code: 'IQD', name: 'Iraq', flag: '🇮🇶', symbol: 'ع.د' },
    { code: 'IRR', name: 'Iran', flag: '🇮🇷', symbol: '﷼' },
    { code: 'ISK', name: 'Iceland', flag: '🇮🇸', symbol: 'kr' },
    { code: 'JEP', name: 'Jersey', flag: '🇯🇪', symbol: '£' },
    { code: 'JMD', name: 'Jamaica', flag: '🇯🇲', symbol: '$' },
    { code: 'JOD', name: 'Jordan', flag: '🇯🇴', symbol: 'د.ا' },
    { code: 'JPY', name: 'Japan', flag: '🇯🇵', symbol: '¥' },
    { code: 'KES', name: 'Kenya', flag: '🇰🇪', symbol: 'Sh' },
    { code: 'KGS', name: 'Kyrgyzstan', flag: '🇰🇬', symbol: 'с' },
    { code: 'KHR', name: 'Cambodia', flag: '🇰🇭', symbol: '៛' },
    { code: 'KID', name: 'Kiribati', flag: '🇰🇮', symbol: '$' },
    { code: 'KMF', name: 'Comoros', flag: '🇰🇲', symbol: 'Fr' },
    { code: 'KRW', name: 'South Korea', flag: '🇰🇷', symbol: '₩' },
    { code: 'KWD', name: 'Kuwait', flag: '🇰🇼', symbol: 'د.ك' },
    { code: 'KYD', name: 'Cayman Islands', flag: '🇰🇾', symbol: '$' },
    { code: 'KZT', name: 'Kazakhstan', flag: '🇰🇿', symbol: '₸' },
    { code: 'LAK', name: 'Laos', flag: '🇱🇦', symbol: '₭' },
    { code: 'LBP', name: 'Lebanon', flag: '🇱🇧', symbol: 'ل.ل' },
    { code: 'LKR', name: 'Sri Lanka', flag: '🇱🇰', symbol: 'Rs' },
    { code: 'LRD', name: 'Liberia', flag: '🇱🇷', symbol: '$' },
    { code: 'LSL', name: 'Lesotho', flag: '🇱🇸', symbol: 'L' },
    { code: 'LYD', name: 'Libya', flag: '🇱🇾', symbol: 'ل.د' },
    { code: 'MAD', name: 'Morocco', flag: '🇲🇦', symbol: 'د.م.' },
    { code: 'MDL', name: 'Moldova', flag: '🇲🇩', symbol: 'L' },
    { code: 'MGA', name: 'Madagascar', flag: '🇲🇬', symbol: 'Ar' },
    { code: 'MKD', name: 'North Macedonia', flag: '🇲🇰', symbol: 'ден' },
    { code: 'MMK', name: 'Myanmar', flag: '🇲🇲', symbol: 'K' },
    { code: 'MNT', name: 'Mongolia', flag: '🇲🇳', symbol: '₮' },
    { code: 'MOP', name: 'Macau', flag: '🇲🇴', symbol: 'P' },
    { code: 'MRU', name: 'Mauritania', flag: '🇲🇷', symbol: 'UM' },
    { code: 'MUR', name: 'Mauritius', flag: '🇲🇺', symbol: '₨' },
    { code: 'MVR', name: 'Maldives', flag: '🇲🇻', symbol: 'Rf' },
    { code: 'MWK', name: 'Malawi', flag: '🇲🇼', symbol: 'MK' },
    { code: 'MXN', name: 'Mexico', flag: '🇲🇽', symbol: '$' },
    { code: 'MYR', name: 'Malaysia', flag: '🇲🇾', symbol: 'RM' },
    { code: 'MZN', name: 'Mozambique', flag: '🇲🇿', symbol: 'MT' },
    { code: 'NAD', name: 'Namibia', flag: '🇳🇦', symbol: '$' },
    { code: 'NGN', name: 'Nigeria', flag: '🇳🇬', symbol: '₦' },
    { code: 'NIO', name: 'Nicaragua', flag: '🇳🇮', symbol: 'C$' },
    { code: 'NOK', name: 'Norway', flag: '🇳🇴', symbol: 'kr' },
    { code: 'NPR', name: 'Nepal', flag: '🇳🇵', symbol: '₨' },
    { code: 'NZD', name: 'New Zealand', flag: '🇳🇿', symbol: '$' },
    { code: 'OMR', name: 'Oman', flag: '🇴🇲', symbol: 'ر.ع.' },
    { code: 'PAB', name: 'Panama', flag: '🇵🇦', symbol: 'B/.' },
    { code: 'PEN', name: 'Peru', flag: '🇵🇪', symbol: 'S/.' },
    { code: 'PGK', name: 'Papua New Guinea', flag: '🇵🇬', symbol: 'K' },
    { code: 'PHP', name: 'Philippines', flag: '🇵🇭', symbol: '₱' },
    { code: 'PKR', name: 'Pakistan', flag: '🇵🇰', symbol: '₨' },
    { code: 'PLN', name: 'Poland', flag: '🇵🇱', symbol: 'zł' },
    { code: 'PYG', name: 'Paraguay', flag: '🇵🇾', symbol: '₲' },
    { code: 'QAR', name: 'Qatar', flag: '🇶🇦', symbol: 'ر.ق' },
    { code: 'RON', name: 'Romania', flag: '🇷🇴', symbol: 'lei' },
    { code: 'RSD', name: 'Serbia', flag: '🇷🇸', symbol: 'дин' },
    { code: 'RUB', name: 'Russia', flag: '🇷🇺', symbol: '₽' },
    { code: 'RWF', name: 'Rwanda', flag: '🇷🇼', symbol: 'Fr' },
    { code: 'SAR', name: 'Saudi Arabia', flag: '🇸🇦', symbol: 'ر.س' },
    { code: 'SBD', name: 'Solomon Islands', flag: '🇸🇧', symbol: '$' },
    { code: 'SCR', name: 'Seychelles', flag: '🇸🇨', symbol: '₨' },
    { code: 'SDG', name: 'Sudan', flag: '🇸🇩', symbol: 'ج.س.' },
    { code: 'SEK', name: 'Sweden', flag: '🇸🇪', symbol: 'kr' },
    { code: 'SGD', name: 'Singapore', flag: '🇸🇬', symbol: '$' },
    { code: 'SHP', name: 'Saint Helena', flag: '🇸🇭', symbol: '£' },
    { code: 'SLL', name: 'Sierra Leone', flag: '🇸🇱', symbol: 'Le' },
    { code: 'SOS', name: 'Somalia', flag: '🇸🇴', symbol: 'Sh' },
    { code: 'SRD', name: 'Suriname', flag: '🇸🇷', symbol: '$' },
    { code: 'SSP', name: 'South Sudan', flag: '🇸🇸', symbol: '£' },
    { code: 'STN', name: 'São Tomé and Príncipe', flag: '🇸🇹', symbol: 'Db' },
    { code: 'SYP', name: 'Syria', flag: '🇸🇾', symbol: '£' },
    { code: 'SZL', name: 'Eswatini', flag: '🇸🇿', symbol: 'L' },
    { code: 'THB', name: 'Thailand', flag: '🇹🇭', symbol: '฿' },
    { code: 'TJS', name: 'Tajikistan', flag: '🇹🇯', symbol: 'ЅМ' },
    { code: 'TMT', name: 'Turkmenistan', flag: '🇹🇲', symbol: 'm' },
    { code: 'TND', name: 'Tunisia', flag: '🇹🇳', symbol: 'د.ت' },
    { code: 'TOP', name: 'Tonga', flag: '🇹🇴', symbol: 'T$' },
    { code: 'TRY', name: 'Turkey', flag: '🇹🇷', symbol: '₺' },
    { code: 'TTD', name: 'Trinidad and Tobago', flag: '🇹🇹', symbol: '$' },
    { code: 'TVD', name: 'Tuvalu', flag: '🇹🇻', symbol: '$' },
    { code: 'TWD', name: 'Taiwan', flag: '🇹🇼', symbol: 'NT$' },
    { code: 'TZS', name: 'Tanzania', flag: '🇹🇿', symbol: 'Sh' },
    { code: 'UAH', name: 'Ukraine', flag: '🇺🇦', symbol: '₴' },
    { code: 'UGX', name: 'Uganda', flag: '🇺🇬', symbol: 'Sh' },
    { code: 'USD', name: 'United States', flag: '🇺🇸', symbol: '$' },
    { code: 'UYU', name: 'Uruguay', flag: '🇺🇾', symbol: '$' },
    { code: 'UZS', name: 'Uzbekistan', flag: '🇺🇿', symbol: 'so\'m' },
    { code: 'VES', name: 'Venezuela', flag: '🇻🇪', symbol: 'Bs.' },
    { code: 'VND', name: 'Vietnam', flag: '🇻🇳', symbol: '₫' },
    { code: 'VUV', name: 'Vanuatu', flag: '🇻🇺', symbol: 'Vt' },
    { code: 'WST', name: 'Samoa', flag: '🇼🇸', symbol: 'T' },
    { code: 'XAF', name: 'Central African CFA', flag: '🌍', symbol: 'Fr' },
    { code: 'XCD', name: 'East Caribbean', flag: '🏝️', symbol: '$' },
    { code: 'XDR', name: 'IMF Special Drawing Rights', flag: '🌐', symbol: 'XDR' },
    { code: 'XOF', name: 'West African CFA', flag: '🌍', symbol: 'Fr' },
    { code: 'XPF', name: 'CFP Franc', flag: '🏝️', symbol: '₣' },
    { code: 'YER', name: 'Yemen', flag: '🇾🇪', symbol: '﷼' },
    { code: 'ZAR', name: 'South Africa', flag: '🇿🇦', symbol: 'R' },
    { code: 'ZMW', name: 'Zambia', flag: '🇿🇲', symbol: 'ZK' },
    { code: 'ZWL', name: 'Zimbabwe', flag: '🇿🇼', symbol: '$' }
];

function populateCurrencies() {
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');

    fromSelect.innerHTML = '<option value="" disabled selected>Select a country</option>';
    toSelect.innerHTML = '<option value="" disabled selected>Select a country</option>';

    currencies.forEach(currency => {
        const fromOption = document.createElement('option');
        fromOption.value = currency.code;
        fromOption.textContent = `${currency.flag} ${currency.name} (${currency.symbol})`;
        fromSelect.appendChild(fromOption);

        const toOption = document.createElement('option');
        toOption.value = currency.code;
        toOption.textContent = `${currency.flag} ${currency.name} (${currency.symbol})`;
        toSelect.appendChild(toOption);
    });
}

window.addEventListener('DOMContentLoaded', populateCurrencies);

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value.toLowerCase();
    const toCurrency = document.getElementById('toCurrency').value.toLowerCase();
    const resultInput = document.getElementById('result');

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount!');
        return;
    }

    if (!fromCurrency || !toCurrency) {
        alert('Please select both currencies!');
        return;
    }

    try {
        resultInput.value = 'Converting...';

        const response = await fetch(`${API_URL}/${fromCurrency}.json`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data = await response.json();
        
        const exchangeRate = data[fromCurrency][toCurrency];

        if (!exchangeRate) {
            alert('Exchange rate not available for selected currencies');
            resultInput.value = '';
            return;
        }

        const convertedAmount = amount * exchangeRate;

        resultInput.value = `${convertedAmount.toFixed(2)} (Rate: ${exchangeRate.toFixed(4)})`;

    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching exchange rates. Please try again!');
        resultInput.value = '';
    }
}

function swapValues() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    document.getElementById('result').value = '';
}
