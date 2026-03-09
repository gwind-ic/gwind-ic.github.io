declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').RadioGroupRootProps & {
            class?: import('vue').HTMLAttributes["class"];
            label: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (payload: string) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').RadioGroupRootProps & {
            class?: import('vue').HTMLAttributes["class"];
            label: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').RadioGroupRootProps & {
        class?: import('vue').HTMLAttributes["class"];
        label: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (payload: string) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
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
        disabled: {
            control: string;
            description: string;
        };
    };
    args: {
        default: string;
        disabled: boolean;
    };
};
export default _default;
export declare const Default: {
    name: string;
    render: (args: {
        default: string;
    }) => {
        components: {
            RadioGroup: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').RadioGroupRootProps & {
                    class?: import('vue').HTMLAttributes["class"];
                    label: string;
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "update:modelValue": (payload: string) => any;
                }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').RadioGroupRootProps & {
                    class?: import('vue').HTMLAttributes["class"];
                    label: string;
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').RadioGroupRootProps & {
                class?: import('vue').HTMLAttributes["class"];
                label: string;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (payload: string) => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            RadioBox: import('vue').DefineComponent<import('reka-ui').RadioGroupItemProps & import('reka-ui').RadioGroupRootProps & {
                class?: import('vue').HTMLAttributes["class"];
                label: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (payload: string) => any;
            }, string, import('vue').PublicProps, Readonly<import('reka-ui').RadioGroupItemProps & import('reka-ui').RadioGroupRootProps & {
                class?: import('vue').HTMLAttributes["class"];
                label: string;
            }> & Readonly<{
                "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                default: string;
            };
            RadioValue: string[];
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
