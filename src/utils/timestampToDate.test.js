import { timestampToDate} from './timestampToDate';

it('returns a human readable date', () => {

  expect(timestampToDate("1509568734")).toEqual("1 November, 2017");
});
