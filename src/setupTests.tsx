import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

jest.mock('focus-trap-react', () => {
    return {
        __esModule: true,
        FocusTrap: ({children}: { children: React.ReactNode }) => <>{children}</>, // Render children without focus trapping
    };
});



Object.assign(global, { TextEncoder, TextDecoder });
