const cards = [
  { shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px 0px' },
  { shadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' },
  { shadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px' },
  { shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px 0px' },
  { shadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px 0px' },
  { shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px 0px' },
  { shadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' },
  {
    shadow:
      'rgba(0, 0, 0, 0.16) 0px 1px 4px 0px, rgba(51, 51, 51,1) 0px 0px 0px 3px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  },
  { shadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px 0px' },
  {
    shadow:
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px 0px, rgba(0, 0, 0, 0.12) 0px 4px 6px 0px, rgba(0, 0, 0, 0.17) 0px 12px 13px 0px, rgba(0, 0, 0, 0.09) 0px -3px 5px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },
  { shadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },
  { shadow: 'rgba(38, 57, 77, 1) 0px 20px 30px -10px' },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
  },
  {
    shadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px 0px, rgba(0, 0, 0, 0.23) 0px 6px 6px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.25) 0px 14px 28px 0px, rgba(0, 0, 0, 0.22) 0px 10px 10px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px',
  },
  {
    shadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  },
  {
    shadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
  { shadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' },
  { shadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px' },
  {
    shadow:
      'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  },
  {
    shadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.07) 0px 1px 2px 0px, rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.07) 0px 4px 8px 0px, rgba(0, 0, 0, 0.07) 0px 8px 16px 0px, rgba(0, 0, 0, 0.07) 0px 16px 32px 0px, rgba(0, 0, 0, 0.07) 0px 32px 64px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px',
  },
  {
    shadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
  },
  {
    shadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px 0px',
  },
  {
    shadow:
      'rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, 0px rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px 0px',
  },
  {
    shadow:
      'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  },
  {
    shadow:
      'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
  },
  {
    shadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px 0px',
  },
  {
    shadow:
      'rgba(17, 17, 26, 0.1) 0px 1px 0px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px 0px, rgba(17, 17, 26, 0.1) 0px 16px 48px 0px',
  },
  {
    shadow:
      'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
  },
  {
    shadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px 0px',
  },
  {
    shadow:
      'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
  },
]

export default cards
