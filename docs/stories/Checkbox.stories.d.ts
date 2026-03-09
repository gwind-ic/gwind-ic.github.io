declare const _default: {
    title: string;
    component: import('vue').DefineComponent<import('reka-ui').CheckboxRootProps & {
        class?: import('vue').HTMLAttributes["class"];
    } & {
        label: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean | "indeterminate") => any;
    }, string, import('vue').PublicProps, Readonly<import('reka-ui').CheckboxRootProps & {
        class?: import('vue').HTMLAttributes["class"];
    } & {
        label: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        defaultValue: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
        name: {
            control: string;
            description: string;
        };
        value: {
            control: string;
            description: string;
        };
        required: {
            control: string;
            description: string;
        };
        label: {
            control: string;
            description: string;
        };
        modelValue: {
            control: string;
            description: string;
        };
    };
    args: {
        disabled: boolean;
        name: string;
        value: string;
        required: boolean;
        label: string;
        modelValue: boolean;
    };
};
export default _default;
export declare const Default: {
    name: string;
    render: (args: Record<string, unknown>) => {
        components: {
            Checkbox: import('vue').DefineComponent<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean | "indeterminate") => any;
            }, string, import('vue').PublicProps, Readonly<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: Record<string, unknown>;
        };
        template: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Checked: {
    name: string;
    args: {
        modelValue: boolean;
    };
    render: (args: Record<string, unknown>) => {
        components: {
            Checkbox: import('vue').DefineComponent<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean | "indeterminate") => any;
            }, string, import('vue').PublicProps, Readonly<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: Record<string, unknown>;
        };
        template: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Disabled: {
    name: string;
    args: {
        disabled: boolean;
        label: string;
    };
    render: (args: Record<string, unknown>) => {
        components: {
            Checkbox: import('vue').DefineComponent<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean | "indeterminate") => any;
            }, string, import('vue').PublicProps, Readonly<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            } & {
                label: string;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: Record<string, unknown>;
        };
        template: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
