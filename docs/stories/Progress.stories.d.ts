declare const _default: {
    title: string;
    component: import('vue').DefineComponent<import('reka-ui').ProgressRootProps & import('reka-ui').ProgressIndicatorProps & {
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string[] | undefined) => any;
        "update:max": (value: number) => any;
    }, string, import('vue').PublicProps, Readonly<import('reka-ui').ProgressRootProps & import('reka-ui').ProgressIndicatorProps & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string[] | undefined) => any) | undefined;
        "onUpdate:max"?: ((value: number) => any) | undefined;
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
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
        };
        max: {
            control: string;
            description: string;
        };
    };
    args: {
        max: number;
        modelValue: number;
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
export declare const Loading: {
    name: string;
    args: {
        modelValue: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const AlmostDone: {
    name: string;
    args: {
        modelValue: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Complete: {
    name: string;
    args: {
        modelValue: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
