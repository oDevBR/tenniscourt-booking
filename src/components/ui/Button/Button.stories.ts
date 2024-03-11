import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Basic',
  },
};
Basic.play = async ({ canvasElement }) => {
  const button = within(canvasElement).getByRole('button');
  expect(button).toHaveTextContent('Basic');
  expect(button).not.toBeDisabled();
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
Disabled.play = async ({ canvasElement }) => {
  const button = within(canvasElement).getByRole('button');
  expect(button).toHaveTextContent('Disabled');
  expect(button).toBeDisabled();
};
