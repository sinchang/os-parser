import parser from '../src'

test('main', () => {
  expect(typeof parser).toBe('function')
})

test('Mac OS X', () => {
  const navigator = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    appVersion: '5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
  }

  expect(parser(navigator)).toEqual({
    name: 'Mac OS X',
    version: '10.13.1'
  })
})

test('Android', () => {
  const navigator = {
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    appVersion: '5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.3'
  }

  expect(parser(navigator)).toEqual({
    name: 'Android',
    version: '4.3'
  })
})

test('iOS', () => {
  const navigator = {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.',
    appVersion: '5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.'
  }

  expect(parser(navigator)).toEqual({
    name: 'iOS',
    version: '10.3.0'
  })
})

test('Windows', () => {
  const navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    appVersion: '5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
  }

  expect(parser(navigator)).toEqual({
    name: 'Windows',
    version: 'Unknown'
  })
})
