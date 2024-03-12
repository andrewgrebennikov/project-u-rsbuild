import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../../model/types/article';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlock',
  component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const ArticleCodeBlock: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  },
};
