declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').ToggleProps & {
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').ToggleProps & {
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').ToggleProps & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {};
    args: {
        modelValue: boolean;
        default: string;
    };
};
export default _default;
export declare const Default: {
    render: (args: {
        default: string;
    }) => {
        components: {
            Toggle: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').ToggleProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "update:modelValue": (value: boolean) => any;
                }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').ToggleProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').ToggleProps & {
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean) => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            GIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
                icon: {
                    type: ArrayConstructor;
                    default: never[];
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    default: undefined;
                    required: false;
                };
                weight: {
                    type: StringConstructor;
                    default: string;
                    validator: (value: string) => boolean;
                };
                size: {
                    type: StringConstructor;
                    default: undefined;
                    required: false;
                    validator: (value: string) => boolean;
                };
            }>, () => void | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
                icon: {
                    type: ArrayConstructor;
                    default: never[];
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    default: undefined;
                    required: false;
                };
                weight: {
                    type: StringConstructor;
                    default: string;
                    validator: (value: string) => boolean;
                };
                size: {
                    type: StringConstructor;
                    default: undefined;
                    required: false;
                    validator: (value: string) => boolean;
                };
            }>> & Readonly<{}>, {
                size: string;
                icon: unknown[];
                color: string;
                weight: string;
            }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
            GIconDelete: string[];
        };
        setup(): {
            args: {
                default: string;
            };
            icon: string[];
        };
        template: string;
    };
};
