declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
            "update:open": (value: boolean) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
        "update:open": (value: boolean) => any;
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
    argTypes: {};
    args: {
        default: string;
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
        default: string;
    }) => {
        components: {
            GSelect: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
                    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
                    "onUpdate:open"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
                    "update:open": (value: boolean) => any;
                }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
                    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
                    "onUpdate:open"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
                "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
                "onUpdate:open"?: ((value: boolean) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
                "update:open": (value: boolean) => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            GSelectContent: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectContentProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
                    onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
                    onCloseAutoFocus?: ((event: Event) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    escapeKeyDown: (event: KeyboardEvent) => any;
                    pointerDownOutside: (event: import('reka-ui').PointerDownOutsideEvent) => any;
                    closeAutoFocus: (event: Event) => any;
                }, import('vue').PublicProps, {
                    position: "item-aligned" | "popper";
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').SelectContentProps & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{
                    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
                    onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
                    onCloseAutoFocus?: ((event: Event) => any) | undefined;
                }>, {}, {}, {}, {}, {
                    position: "item-aligned" | "popper";
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectContentProps & {
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{
                onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
                onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
                onCloseAutoFocus?: ((event: Event) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                escapeKeyDown: (event: KeyboardEvent) => any;
                pointerDownOutside: (event: import('reka-ui').PointerDownOutsideEvent) => any;
                closeAutoFocus: (event: Event) => any;
            }, string, {
                position: "item-aligned" | "popper";
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            GSelectItem: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectItemProps<import('reka-ui').AcceptableValue> & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').SelectItemProps<import('reka-ui').AcceptableValue> & {
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectItemProps<import('reka-ui').AcceptableValue> & {
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            GSelectTrigger: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectTriggerProps & {
                    class?: import('vue').HTMLAttributes["class"];
                    showIcon?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').SelectTriggerProps & {
                    class?: import('vue').HTMLAttributes["class"];
                    showIcon?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectTriggerProps & {
                class?: import('vue').HTMLAttributes["class"];
                showIcon?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            GSelectValue: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectValueProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').SelectValueProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectValueProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
        };
        setup(): {
            args: {
                default: string;
            };
        };
        template: string;
    };
};
