import type { Meta, StoryObj } from '@storybook/angular';
import { ToDoComponent } from './to-do.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: ToDoComponent,
  title: 'ToDoComponent',
  argTypes: {
    triggerDelete: {
      action: 'delete',
    },
    triggerEdit: {
      action: 'edit',
    },
    triggerToggleComplete: {
      action: 'toggleComplete',
    },
  },
} as Meta<ToDoComponent>;
type Story = StoryObj<ToDoComponent>;

const randTodo = () => {
  const { id, title, description } = randProduct();
  return {
    id,
    title,
    description,
    completed: randBoolean(),
  };
};

const randBoolean = () => {
  return Math.random() < 0.5;
};

const randProduct = () => {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description 1' },
    { id: 2, title: 'Product 2', description: 'Description 2' },
    { id: 3, title: 'Product 3', description: 'Description 3' },
    // Thêm các đối tượng sản phẩm khác nếu cần
  ];

  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
};

export const Primary = {
  render: (args: ToDoComponent) => ({
    props: args,
  }),
  args: {
    todo: randTodo(),
  },
};
export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/to-do works!/gi)).toBeTruthy();
  },
};



