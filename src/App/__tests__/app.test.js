import fetchData from "../http";

import {getLevel} from "../app";

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Тестируем успешный запрос', () => {
  fetchData.mockReturnValue({status: 'ok', level: 9});
  const result = getLevel(12);
  expect(result).toBe('Ваш текущий уровень: 9');
});

test('Тестируем неудачный запрос', () => {
  fetchData.mockReturnValue({status: 'error', reason: 'no answer from server'});
  const result = getLevel(27);
  expect(result).toBe('Информация об уровне временно недоступна');
});
