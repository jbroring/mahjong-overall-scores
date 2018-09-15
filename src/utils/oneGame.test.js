import { eastVsNorth} from './oneGame';

it('returns the right score', () => {

    expect(eastVsNorth("E1000_N500")).toEqual("1000");
});
