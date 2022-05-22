import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

test('returns current year', () =>{
    expect(getFullYear()).toBe(2022);
});

test('returns correct footer copy', () =>{
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('check returned string', () =>{
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});