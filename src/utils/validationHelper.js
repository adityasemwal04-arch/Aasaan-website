/**
 * Enterprise Email and Phone / State Code Validation Utilities
 * Designed for Indian and International Enterprise Lead Qualification
 */

export const COUNTRY_CODES = [
  { id: 'IN', code: '+91', name: 'India', flag: '🇮🇳', defaultState: 'Delhi NCR' },
  { id: 'AE', code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { id: 'US', code: '+1', name: 'United States', flag: '🇺🇸' },
  { id: 'CA', code: '+1-CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { id: 'GB', code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { id: 'AU', code: '+61', name: 'Australia', flag: '🇦🇺' },
  { id: 'ZA', code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { id: 'SA', code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { id: 'QA', code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { id: 'OM', code: '+968', name: 'Oman', flag: '🇴🇲' },
  { id: 'KW', code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { id: 'BH', code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { id: 'SG', code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { id: 'MY', code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { id: 'ID', code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { id: 'TH', code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { id: 'VN', code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { id: 'PH', code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { id: 'DE', code: '+49', name: 'Germany', flag: '🇩🇪' },
  { id: 'FR', code: '+33', name: 'France', flag: '🇫🇷' },
  { id: 'IT', code: '+39', name: 'Italy', flag: '🇮🇹' },
  { id: 'ES', code: '+34', name: 'Spain', flag: '🇪🇸' },
  { id: 'NL', code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { id: 'CH', code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { id: 'SE', code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { id: 'NO', code: '+47', name: 'Norway', flag: '🇳🇴' },
  { id: 'IE', code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { id: 'PL', code: '+48', name: 'Poland', flag: '🇵🇱' },
  { id: 'NZ', code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { id: 'JP', code: '+81', name: 'Japan', flag: '🇯🇵' },
  { id: 'KR', code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { id: 'HK', code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { id: 'BD', code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { id: 'NP', code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { id: 'LK', code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { id: 'BR', code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { id: 'MX', code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { id: 'KE', code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { id: 'NG', code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { id: 'EG', code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { id: 'TR', code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { id: 'OTHER', code: '+', name: 'Other International', flag: '🌐' }
];

export const INDIAN_STATES_STD = [
  { state: 'Delhi NCR', std: '011', capital: 'New Delhi' },
  { state: 'Maharashtra', std: '022', capital: 'Mumbai / Pune (020)' },
  { state: 'Karnataka', std: '080', capital: 'Bengaluru' },
  { state: 'Gujarat', std: '079', capital: 'Ahmedabad / Surat' },
  { state: 'Tamil Nadu', std: '044', capital: 'Chennai' },
  { state: 'Telangana', std: '040', capital: 'Hyderabad' },
  { state: 'Uttar Pradesh', std: '0522', capital: 'Lucknow / Noida (0120)' },
  { state: 'West Bengal', std: '033', capital: 'Kolkata' },
  { state: 'Rajasthan', std: '0141', capital: 'Jaipur' },
  { state: 'Punjab / Chandigarh', std: '0172', capital: 'Chandigarh / Ludhiana' },
  { state: 'Haryana', std: '0124', capital: 'Gurugram / Faridabad' },
  { state: 'Kerala', std: '0484', capital: 'Kochi / Trivandrum' },
  { state: 'Madhya Pradesh', std: '0731', capital: 'Indore / Bhopal (0755)' },
  { state: 'Andhra Pradesh', std: '0891', capital: 'Visakhapatnam / Vijayawada' },
  { state: 'Bihar', std: '0612', capital: 'Patna' },
  { state: 'Odisha', std: '0674', capital: 'Bhubaneswar' },
  { state: 'Assam', std: '0361', capital: 'Guwahati' },
  { state: 'Jharkhand', std: '0651', capital: 'Ranchi' },
  { state: 'Uttarakhand', std: '0135', capital: 'Dehradun' },
  { state: 'Chhattisgarh', std: '0771', capital: 'Raipur' },
  { state: 'Goa', std: '0832', capital: 'Panaji' },
  { state: 'Himachal Pradesh', std: '0177', capital: 'Shimla' },
  { state: 'Jammu & Kashmir', std: '0194', capital: 'Srinagar / Jammu (0191)' },
  { state: 'Other Indian State / UT', std: 'STD', capital: 'Other Region' }
];

const COMMON_DOMAIN_TYPOS = {
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'redifmail.com': 'rediffmail.com',
  'redif.com': 'rediffmail.com'
};

/**
 * Validates work/business email address
 */
export function validateEmail(email) {
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email address is required.' };
  }

  const clean = email.trim().toLowerCase();

  // Whitespace check
  if (/\s/.test(clean)) {
    return { isValid: false, message: 'Email cannot contain spaces.' };
  }

  // Consecutive dots check
  if (/\.{2,}/.test(clean)) {
    return { isValid: false, message: 'Email cannot contain consecutive dots.' };
  }

  // Standard RFC 5322 pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(clean)) {
    if (!clean.includes('@')) {
      return { isValid: false, message: "Missing '@' symbol in email address." };
    }
    return { isValid: false, message: 'Please enter a valid email format (e.g. name@company.com).' };
  }

  const parts = clean.split('@');
  if (parts.length !== 2) {
    return { isValid: false, message: 'Invalid email structure.' };
  }

  const [userPart, domainPart] = parts;
  if (!userPart || userPart.length < 1) {
    return { isValid: false, message: 'Email username cannot be empty.' };
  }

  const domainSubparts = domainPart.split('.');
  const tld = domainSubparts[domainSubparts.length - 1];

  if (!tld || tld.length < 2) {
    return { isValid: false, message: 'Email domain extension must be at least 2 characters (e.g. .com, .in).' };
  }

  // Domain typo suggestion
  if (COMMON_DOMAIN_TYPOS[domainPart]) {
    const suggested = `${userPart}@${COMMON_DOMAIN_TYPOS[domainPart]}`;
    return {
      isValid: true,
      message: 'Email syntax valid.',
      suggestion: suggested
    };
  }

  return { isValid: true, message: 'Valid email address.' };
}

/**
 * Validates phone number based on Country, Phone Type (mobile/landline), and State STD Code
 */
export function validatePhone(phone, countryCode = '+91', phoneType = 'mobile', selectedState = 'Delhi NCR') {
  if (!phone || !phone.trim()) {
    return { isValid: false, message: 'Phone number is required.' };
  }

  const rawDigits = phone.replace(/\D/g, '');

  // -------------------------------------------------------------
  // 1. INDIA (+91) VALIDATION
  // -------------------------------------------------------------
  if (countryCode === '+91') {
    // A) Indian Mobile Validation
    if (phoneType === 'mobile') {
      let digits = rawDigits;
      // Strip leading country code 91 if user entered 12 digits
      if (digits.length === 12 && digits.startsWith('91')) {
        digits = digits.slice(2);
      }
      // Strip leading 0 if user entered 11 digits
      if (digits.length === 11 && digits.startsWith('0')) {
        digits = digits.slice(1);
      }

      if (digits.length === 0) {
        return { isValid: false, message: 'Please enter your 10-digit mobile number.' };
      }

      if (digits.length < 10) {
        return {
          isValid: false,
          message: `Incomplete number (${digits.length}/10 digits). Enter 10 digits.`
        };
      }

      if (digits.length > 10) {
        return {
          isValid: false,
          message: `Too many digits (${digits.length}/10). Indian mobile numbers must be exactly 10 digits.`
        };
      }

      // First digit must be 6, 7, 8, or 9
      const firstChar = digits.charAt(0);
      if (!['6', '7', '8', '9'].includes(firstChar)) {
        return {
          isValid: false,
          message: `Indian mobile numbers start with 6, 7, 8, or 9 (starts with ${firstChar}).`
        };
      }

      // Check for obviously fake repeated digits like 9999999999, 8888888888, 1234567890
      if (/^(\d)\1{9}$/.test(digits)) {
        return {
          isValid: false,
          message: 'Please enter a genuine mobile number (repeated digits detected).'
        };
      }

      const formatted = `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
      return {
        isValid: true,
        message: 'Valid Indian mobile number.',
        cleanDigits: digits,
        formatted
      };
    }

    // B) Indian Landline / STD Code Validation
    if (phoneType === 'landline') {
      const stateObj = INDIAN_STATES_STD.find(s => s.state === selectedState) || INDIAN_STATES_STD[0];
      let digits = rawDigits;

      // If user typed STD code with leading zero e.g. 011-23456789
      if (digits.startsWith('0')) {
        digits = digits.slice(1);
      }

      // Indian landlines total (STD code + subscriber number) are typically 10 digits (e.g. 11 + 8 digits = 10 digits without leading 0)
      if (digits.length < 8) {
        return {
          isValid: false,
          message: `Incomplete landline number (${digits.length} digits). Standard is 8-10 digits including STD.`
        };
      }

      if (digits.length > 11) {
        return {
          isValid: false,
          message: `Landline number too long (${digits.length} digits).`
        };
      }

      const stdCode = stateObj.std !== 'STD' ? stateObj.std : '';
      const formatted = `+91 ${stdCode ? `(${stdCode}) ` : ''}${phone.trim()}`;

      return {
        isValid: true,
        message: `Valid landline for ${selectedState}.`,
        cleanDigits: digits,
        formatted
      };
    }
  }

  // -------------------------------------------------------------
  // 2. INTERNATIONAL VALIDATION
  // -------------------------------------------------------------
  if (countryCode === '+971') {
    // UAE: 9 digits, e.g. 50 123 4567
    let digits = rawDigits;
    if (digits.length === 12 && digits.startsWith('971')) digits = digits.slice(3);
    if (digits.length === 10 && digits.startsWith('0')) digits = digits.slice(1);

    if (digits.length !== 9) {
      return {
        isValid: false,
        message: `UAE numbers must be 9 digits (currently ${digits.length}). E.g. 50 123 4567.`
      };
    }
    return {
      isValid: true,
      message: 'Valid UAE phone number.',
      cleanDigits: digits,
      formatted: `+971 ${digits}`
    };
  }

  if (countryCode === '+1' || countryCode === '+1-CA') {
    // US / Canada: 10 digits
    let digits = rawDigits;
    if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);

    if (digits.length !== 10) {
      return {
        isValid: false,
        message: `North American numbers must be 10 digits (currently ${digits.length}).`
      };
    }
    return {
      isValid: true,
      message: 'Valid North American number.',
      cleanDigits: digits,
      formatted: `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    };
  }

  if (countryCode === '+44') {
    // UK: 10 or 11 digits
    let digits = rawDigits;
    if (digits.length === 12 && digits.startsWith('44')) digits = digits.slice(2);
    if (digits.startsWith('0')) digits = digits.slice(1);

    if (digits.length < 10 || digits.length > 11) {
      return {
        isValid: false,
        message: `UK numbers must be 10 or 11 digits (currently ${digits.length}).`
      };
    }
    return {
      isValid: true,
      message: 'Valid UK phone number.',
      cleanDigits: digits,
      formatted: `+44 ${digits}`
    };
  }

  // General international check (ITU-T E.164: 7 to 15 digits)
  if (rawDigits.length < 7 || rawDigits.length > 15) {
    return {
      isValid: false,
      message: `Please enter a valid international number (7 to 15 digits).`
    };
  }

  return {
    isValid: true,
    message: 'Valid international number format.',
    cleanDigits: rawDigits,
    formatted: `${countryCode} ${phone.trim()}`
  };
}
