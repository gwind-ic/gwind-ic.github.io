declare const _default: {
    title: string;
    component: import('vue').DefineComponent<import('reka-ui').SwitchRootProps & {
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (payload: boolean) => any;
    }, string, import('vue').PublicProps, Readonly<import('reka-ui').SwitchRootProps & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: boolean) => any) | undefined;
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
        modelValue: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
    };
    args: {
        modelValue: boolean;
        disabled: boolean;
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
export declare const Active: {
    name: string;
    args: {
        modelValue: boolean;
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
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
