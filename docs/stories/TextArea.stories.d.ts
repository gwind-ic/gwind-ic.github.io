declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: import('vue').HTMLAttributes["class"];
        hasMaxLength?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, import('vue').PublicProps, Readonly<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: import('vue').HTMLAttributes["class"];
        hasMaxLength?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        textareaRef: HTMLTextAreaElement;
    }, HTMLDivElement>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        modelValue: {
            control: string;
            description: string;
        };
        placeholder: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
        hasMaxLength: {
            control: string;
            description: string;
        };
        maxLength: {
            control: string;
            description: string;
        };
        autoCaps: {
            control: string;
            description: string;
        };
    };
    args: {
        placeholder: string;
        disabled: boolean;
        autoCaps: boolean;
        modelValue: string;
        hasMaxLength: boolean;
        maxLength: number;
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
};
export declare const WithMaxLength: {
    name: string;
    args: {
        hasMaxLength: boolean;
        maxLength: number;
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
        modelValue: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
