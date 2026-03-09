declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').CheckboxRootProps & {
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean | "indeterminate") => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').CheckboxRootProps & {
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').CheckboxRootProps & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean | "indeterminate") => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        defaultValue: {
            control: string;
        };
        disabled: {
            control: string;
        };
        name: {
            control: string;
        };
        value: {
            control: string;
        };
        required: {
            control: string;
        };
        label: {
            control: string;
        };
    };
    args: {
        defaultValue: boolean;
        disabled: boolean;
        name: string;
        value: string;
        required: boolean;
        label: string;
    };
    render: (args: {
        label: string;
    }) => {
        components: {
            Check: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').CheckboxRootProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "update:modelValue": (value: boolean | "indeterminate") => any;
                }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').CheckboxRootProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').CheckboxRootProps & {
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean | "indeterminate") => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
        };
        setup(): {
            args: {
                label: string;
            };
            label: string;
        };
        template: string;
    };
};
export default _default;
export declare const Default: {};
