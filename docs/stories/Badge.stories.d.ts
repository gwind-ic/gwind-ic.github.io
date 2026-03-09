declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            variant?: import('../src/components/badge').BadgeVariants["variant"];
            class?: import('vue').HTMLAttributes["class"];
            modelValue?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            modelValue: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            variant?: import('../src/components/badge').BadgeVariants["variant"];
            class?: import('vue').HTMLAttributes["class"];
            modelValue?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            modelValue: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        variant?: import('../src/components/badge').BadgeVariants["variant"];
        class?: import('vue').HTMLAttributes["class"];
        modelValue?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        modelValue: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            rightIcon?(_: {}): any;
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
        class: {
            control: string;
            description: string;
        };
        variant: {
            control: string;
            options: string[];
            description: string;
        };
        modelValue: {
            control: string;
            description: string;
        };
    };
    args: {
        variant: string;
        modelValue: boolean;
        default: string;
    };
    render: (args: string) => {
        components: {
            Badge: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    variant?: import('../src/components/badge').BadgeVariants["variant"];
                    class?: import('vue').HTMLAttributes["class"];
                    modelValue?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    modelValue: boolean;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    variant?: import('../src/components/badge').BadgeVariants["variant"];
                    class?: import('vue').HTMLAttributes["class"];
                    modelValue?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    modelValue: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                variant?: import('../src/components/badge').BadgeVariants["variant"];
                class?: import('vue').HTMLAttributes["class"];
                modelValue?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                modelValue: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                    rightIcon?(_: {}): any;
                };
            });
            badgeVariants: (props?: ({
                variant?: "outline" | "green" | "brocoli" | "orange" | "blue" | "red" | null | undefined;
            } & import('class-variance-authority/types').ClassProp) | undefined) => string;
        };
        setup(): {
            args: string;
        };
        template: string;
    };
};
export default _default;
export declare const Green: {
    args: {
        variant: string;
    };
};
export declare const Brocoli: {
    args: {
        variant: string;
    };
};
export declare const Orange: {
    args: {
        variant: string;
    };
};
export declare const Blue: {
    args: {
        variant: string;
    };
};
export declare const Red: {
    args: {
        variant: string;
    };
};
export declare const Outline: {
    args: {
        variant: string;
    };
};
export declare const Icon: {
    args: {
        rightIcon: string;
    };
    render: (args: {
        rightIcon: string;
    }) => {
        components: {
            Badge: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    variant?: import('../src/components/badge').BadgeVariants["variant"];
                    class?: import('vue').HTMLAttributes["class"];
                    modelValue?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    modelValue: boolean;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    variant?: import('../src/components/badge').BadgeVariants["variant"];
                    class?: import('vue').HTMLAttributes["class"];
                    modelValue?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    modelValue: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                variant?: import('../src/components/badge').BadgeVariants["variant"];
                class?: import('vue').HTMLAttributes["class"];
                modelValue?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                modelValue: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                    rightIcon?(_: {}): any;
                };
            });
            badgeVariants: (props?: ({
                variant?: "outline" | "green" | "brocoli" | "orange" | "blue" | "red" | null | undefined;
            } & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
            GIconCross: string[];
        };
        setup(): {
            args: {
                rightIcon: string;
            };
            badgeOpen: import('vue').Ref<boolean, boolean>;
            GIconCross: string[];
        };
        template: string;
    };
};
