import React from 'react';
import { render } from '@testing-library/react';
import Fireflies from '../Components/Fireflies';


test('renders fireflies component without errors', () => {
  const getContextMock = jest.fn();
  const originalGetContext = HTMLCanvasElement.prototype.getContext;
  jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(function(this: HTMLCanvasElement, contextId: string) {
    if (contextId === '2d') {
      getContextMock();
      return null; // Return null as a mock for the 2D context
    }
    return originalGetContext.apply(this, arguments as any);
  });

  render(<Fireflies />);

  // Assert that the Fireflies component renders without throwing any errors
  expect(getContextMock).toHaveBeenCalled();

  // Restore the original implementation of getContext
  HTMLCanvasElement.prototype.getContext = originalGetContext;
});

