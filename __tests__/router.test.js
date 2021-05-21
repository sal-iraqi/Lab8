/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

describe('pushToHistory function', () => {
    test('current state of an empty history stack should be null', () => {
        expect(history.state).toBeNull();
    });

    test('history length should be 1', () => {
        expect(history.length).toBe(1);
    });

    test('pushes settings page into history, current state should be settings', () => {
        expect(pushToHistory('settings', 0).state.page).toContain("settings");
    });

    test('history length should be 2', () => {
        expect(history.length).toBe(2);
    });

    test('pushes entry page into history, current state should be entry#2', () => {
        expect(pushToHistory('entry', 2).state.page).toContain("entry2");
    });

    test('history length should be 3', () => {
        expect(history.length).toBe(3);
    });

    test('pushes empty page into history', () => {
        expect(pushToHistory('menu', 2).state.page).toBeUndefined();
    });

    test('history length should be 4', () => {
        expect(history.length).toBe(4);
    });
});
