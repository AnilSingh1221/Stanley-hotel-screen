import {checkActions} from './fields'
import {triggers} from '../tests/mocks/triggers'

describe('checkActions', () => {
  // tests the case where the isnt a matching trigger, therefore item should be shown
	it('returns true when there are no matching triggers', () => {
    const item = { event: 'september6th2023123', path: 'tickets.adult' };
    expect(checkActions(item, triggers)).toBe(true);
  });

  it('returns true when action name is "show"', () => {
    const item = { event: 'september6th2023', path: 'tickets.adult' };
    expect(checkActions(item, triggers)).toBe(true);
  });

  it('returns false when action name is not "show"', () => {
    const item = { event: 'september6th2023', path: 'tickets.generalAdmission' };
    
    expect(checkActions(item, triggers)).toBe(false);
  });
});