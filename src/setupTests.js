import '@testing-library/jest-dom';

jest.mock('axios', () => {
	return {
		get: jest.fn(),
	};
});
