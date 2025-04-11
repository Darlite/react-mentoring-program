import '@testing-library/jest-dom';

jest.mock('focus-trap-react', () => {
    return {
        __esModule: true,
        FocusTrap: ({ children }: { children: React.ReactNode }) => <>{children}</>, // Render children without focus trapping
};
});
