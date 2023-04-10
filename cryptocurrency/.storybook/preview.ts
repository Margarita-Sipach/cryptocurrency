import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
		backgrounds: {
      default: 'bg',
			values: [
        {
          name: 'bg',
          value: '#CCC',
        },
			]
		}
  },
};

export default preview;
