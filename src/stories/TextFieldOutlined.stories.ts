import type { Meta, StoryObj } from '@storybook/svelte';

import TextFieldOutlined from './TextFieldOutlined.svelte';

const meta: Meta<TextFieldOutlined> = {
	title: 'Stories/TextField/Outlined',
	component: TextFieldOutlined,
	tags: ['autodocs'],
	argTypes: {
		children: { type: 'string' },
		disabled: { type: 'boolean' },
		error: { type: 'boolean' },
		leading: {
			options: ['IconMagnifyingGlass', 'IconExclamationCircle', 'IconXCircle', null],
			control: {
				type: 'select'
			}
		},
		trailing: {
			options: ['IconMagnifyingGlass', 'IconExclamationCircle', 'IconXCircle', null],
			control: {
				type: 'select'
			}
		},
		name: { type: 'string' },
		required: { type: 'boolean' },
		supporting: { type: 'string' },
		value: { type: 'string' }
	}
};

export default meta;
type Story = StoryObj<TextFieldOutlined>;

export const Enabled: Story = {
	args: {
		children: 'Label text',
		supporting: 'Supporting text',
		leading: 'IconMagnifyingGlass'
	}
};

export const Focused: Story = {
	args: {
		...Enabled.args,
		trailing: 'IconXCircle'
	},
	parameters: {
		pseudo: { focusWithin: true, hover: true }
	}
};

export const Hovered: Story = {
	args: Enabled.args,
	parameters: {
		pseudo: { hover: true }
	}
};

export const Disabled: Story = {
	args: { ...Enabled.args, disabled: true },
	parameters: Hovered.parameters
};

// Populated
export const EnabledPopulated = {
	args: {
		...Enabled.args,
		value: 'Input text',
		trailing: Focused.args?.trailing
	}
};

export const FocusedPopulated: Story = {
	args: EnabledPopulated.args,
	parameters: Focused.parameters
};

export const HoveredPopulated: Story = {
	args: EnabledPopulated.args,
	parameters: Hovered.parameters
};

export const DisabledPopulated: Story = {
	args: { ...EnabledPopulated.args, disabled: true },
	parameters: Disabled.parameters
};

// Error
export const EnabledError: Story = {
	args: {
		...Enabled.args,
		error: true,
		trailing: 'IconExclamationCircle'
	}
};
export const FocusedError: Story = {
	args: EnabledError.args,
	parameters: Focused.parameters
};

export const HoveredError: Story = {
	args: EnabledError.args,
	parameters: Hovered.parameters
};

// PopulatedError
export const EnabledPopulatedError: Story = {
	args: {
		...EnabledError.args,
		value: EnabledPopulated.args.value
	}
};

export const FocusedPopulatedError: Story = {
	args: EnabledPopulatedError.args,
	parameters: Focused.parameters
};

export const HoveredPopulatedError: Story = {
	args: EnabledPopulatedError.args,
	parameters: Hovered.parameters
};
