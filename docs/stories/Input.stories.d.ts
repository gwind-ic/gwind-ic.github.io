declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            defaultValue?: string | number;
            modelValue?: string | number;
            class?: import('vue').HTMLAttributes["class"];
            autoCaps?: boolean;
            prefixIcon?: any;
            suffixIcon?: any;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (payload: string | number) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            defaultValue?: string | number;
            modelValue?: string | number;
            class?: import('vue').HTMLAttributes["class"];
            autoCaps?: boolean;
            prefixIcon?: any;
            suffixIcon?: any;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: import('vue').HTMLAttributes["class"];
        autoCaps?: boolean;
        prefixIcon?: any;
        suffixIcon?: any;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            prefix?(_: {}): any;
            suffix?(_: {}): any;
        };
    });
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        autoCaps: {
            control: string;
            description: string;
        };
        modelValue: {
            control: string;
            description: string;
        };
        defaultValue: {
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
    };
    args: {
        placeholder: string;
        disabled: boolean;
        autoCaps: boolean;
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
export declare const WithValue: {
    name: string;
    args: {
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
