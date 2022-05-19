// ========================================================================= //
// Testing holidaysInRange
// ========================================================================= //

import promptSync from 'prompt-sync';
import { main, holidaysInRange } from './holidays';

describe('Expect empty array in', () => {
  test.each([
    { start: -1, end: 1 },
    { start: 324, end: 326 },
    { start: 600, end: 599 },
  ])('holidaysInRange($start, $end)', ({ start, end }) => {
    expect(holidaysInRange(start, end)).toStrictEqual([]);
  });
});

describe('Success Cases with', () => {
  test.each([
    {
      start: 2001,
      end: 2001,
      expected: [
        {
          valentinesDay: 'Wednesday, 14.02.2001',
          easter: 'Sunday, 15.04.2001',
          christmas: 'Tuesday, 25.12.2001'
        }
      ],
    },
    {
      start: 2999,
      end: 3000,
      expected: [
        {
          valentinesDay: 'Thursday, 14.02.2999',
          easter: 'Sunday, 24.03.2999',
          christmas: 'Wednesday, 25.12.2999'
        },
        {
          valentinesDay: 'Friday, 14.02.3000',
          easter: 'Sunday, 13.04.3000',
          christmas: 'Thursday, 25.12.3000'
        }
      ],
    },
    {
      start: 1000,
      end: 1020,
      expected: [
        {
          valentinesDay: 'Friday, 14.02.1000',
          easter: 'Sunday, 30.03.1000',
          christmas: 'Thursday, 25.12.1000'
        },
        {
          valentinesDay: 'Saturday, 14.02.1001',
          easter: 'Sunday, 19.04.1001',
          christmas: 'Friday, 25.12.1001'
        },
        {
          valentinesDay: 'Sunday, 14.02.1002',
          easter: 'Sunday, 11.04.1002',
          christmas: 'Saturday, 25.12.1002'
        },
        {
          valentinesDay: 'Monday, 14.02.1003',
          easter: 'Sunday, 27.03.1003',
          christmas: 'Sunday, 25.12.1003'
        },
        {
          valentinesDay: 'Tuesday, 14.02.1004',
          easter: 'Sunday, 15.04.1004',
          christmas: 'Tuesday, 25.12.1004'
        },
        {
          valentinesDay: 'Thursday, 14.02.1005',
          easter: 'Sunday, 07.04.1005',
          christmas: 'Wednesday, 25.12.1005'
        },
        {
          valentinesDay: 'Friday, 14.02.1006',
          easter: 'Sunday, 30.03.1006',
          christmas: 'Thursday, 25.12.1006'
        },
        {
          valentinesDay: 'Saturday, 14.02.1007',
          easter: 'Sunday, 12.04.1007',
          christmas: 'Friday, 25.12.1007'
        },
        {
          valentinesDay: 'Sunday, 14.02.1008',
          easter: 'Sunday, 03.04.1008',
          christmas: 'Sunday, 25.12.1008'
        },
        {
          valentinesDay: 'Tuesday, 14.02.1009',
          easter: 'Sunday, 23.04.1009',
          christmas: 'Monday, 25.12.1009'
        },
        {
          valentinesDay: 'Wednesday, 14.02.1010',
          easter: 'Sunday, 08.04.1010',
          christmas: 'Tuesday, 25.12.1010'
        },
        {
          valentinesDay: 'Thursday, 14.02.1011',
          easter: 'Sunday, 31.03.1011',
          christmas: 'Wednesday, 25.12.1011'
        },
        {
          valentinesDay: 'Friday, 14.02.1012',
          easter: 'Sunday, 19.04.1012',
          christmas: 'Friday, 25.12.1012'
        },
        {
          valentinesDay: 'Sunday, 14.02.1013',
          easter: 'Sunday, 11.04.1013',
          christmas: 'Saturday, 25.12.1013'
        },
        {
          valentinesDay: 'Monday, 14.02.1014',
          easter: 'Sunday, 27.03.1014',
          christmas: 'Sunday, 25.12.1014'
        },
        {
          valentinesDay: 'Tuesday, 14.02.1015',
          easter: 'Sunday, 16.04.1015',
          christmas: 'Monday, 25.12.1015'
        },
        {
          valentinesDay: 'Wednesday, 14.02.1016',
          easter: 'Sunday, 07.04.1016',
          christmas: 'Wednesday, 25.12.1016'
        },
        {
          valentinesDay: 'Friday, 14.02.1017',
          easter: 'Sunday, 23.03.1017',
          christmas: 'Thursday, 25.12.1017'
        },
        {
          valentinesDay: 'Saturday, 14.02.1018',
          easter: 'Sunday, 12.04.1018',
          christmas: 'Friday, 25.12.1018'
        },
        {
          valentinesDay: 'Sunday, 14.02.1019',
          easter: 'Sunday, 04.04.1019',
          christmas: 'Saturday, 25.12.1019'
        },
        {
          valentinesDay: 'Monday, 14.02.1020',
          easter: 'Sunday, 23.04.1020',
          christmas: 'Monday, 25.12.1020'
        }
      ],
    }
  ])('start=$start, end=$end', ({ start, end, expected }) => {
    expect(holidaysInRange(start, end)).toStrictEqual(expected);
  });
});

// ========================================================================= //
// Testing main function
// ========================================================================= //

// NOTE: This is only for marking purposes - you do not need to understand
// how the tests below are constructed.
// It's best to only look at "start", "end" and "expected"

jest.mock(
  'prompt-sync',
  () => {
    const prompt = jest.fn();
    return jest.fn(() => prompt);
  },
  { virtual: true }
);

describe('Main function prompt-sync', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test.each([
    {
      start: 400,
      end: 399,
      expected: [],
    },
    {
      start: 324,
      end: 326,
      expected: [],
    },
    {
      start: 3000,
      end: 3000,
      expected: [
        {
          valentinesDay: 'Friday, 14.02.3000',
          easter: 'Sunday, 13.04.3000',
          christmas: 'Thursday, 25.12.3000'
        },
      ]
    },
    {
      start: 2090,
      end: 2092,
      expected: [
        {
          valentinesDay: 'Tuesday, 14.02.2090',
          easter: 'Sunday, 16.04.2090',
          christmas: 'Monday, 25.12.2090'
        },
        {
          valentinesDay: 'Wednesday, 14.02.2091',
          easter: 'Sunday, 08.04.2091',
          christmas: 'Tuesday, 25.12.2091'
        },
        {
          valentinesDay: 'Thursday, 14.02.2092',
          easter: 'Sunday, 30.03.2092',
          christmas: 'Thursday, 25.12.2092'
        },
      ]
    }
  ])('start=$start, end=$end', ({ start, end, expected }) => {
    jest.spyOn(console, 'log').mockImplementation();
    const prompt = promptSync();
    prompt
      .mockReturnValueOnce(String(start))
      .mockReturnValueOnce(String(end));
    main();
    expect(console.log).toBeCalledWith(expected);
  });
});
