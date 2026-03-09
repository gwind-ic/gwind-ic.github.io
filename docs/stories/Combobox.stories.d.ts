declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: {
            value: string;
            label: string;
        } | null;
        options: Array<{
            value: string;
            label: string;
        }>;
        placeholder?: string;
        isOpen?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: {
            value: string;
            label: string;
        } | null) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: {
            value: string;
            label: string;
        } | null;
        options: Array<{
            value: string;
            label: string;
        }>;
        placeholder?: string;
        isOpen?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: {
            value: string;
            label: string;
        } | null) => any) | undefined;
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
        options: {
            control: string;
            description: string;
        };
        placeholder: {
            control: string;
            description: string;
        };
        modelValue: {
            control: string;
            description: string;
        };
    };
    args: {
        options: {
            value: string;
            label: string;
        }[];
        placeholder: string;
        modelValue: string;
    };
};
export default _default;
export declare const Default: {
    name: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    render: (args: {
        options: {
            value: string;
            label: string;
        }[];
        placeholder: string;
        modelValue: string;
    }) => {
        components: {
            ComboboxComponent: import('vue').DefineComponent<{
                modelValue?: {
                    value: string;
                    label: string;
                } | null;
                options: Array<{
                    value: string;
                    label: string;
                }>;
                placeholder?: string;
                isOpen?: boolean;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "update:modelValue": (value: {
                    value: string;
                    label: string;
                } | null) => any;
            }, string, import('vue').PublicProps, Readonly<{
                modelValue?: {
                    value: string;
                    label: string;
                } | null;
                options: Array<{
                    value: string;
                    label: string;
                }>;
                placeholder?: string;
                isOpen?: boolean;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: {
                    value: string;
                    label: string;
                } | null) => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                options: {
                    value: string;
                    label: string;
                }[];
                placeholder: string;
                modelValue: string;
            };
            modelValue: import('vue').Ref<string, string>;
        };
        template: string;
    };
};
