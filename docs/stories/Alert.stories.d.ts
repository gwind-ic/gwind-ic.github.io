declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        class?: import('vue').HTMLAttributes["class"];
        variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        class: {
            control: string;
        };
        variant: {
            control: string;
            options: string[];
            description: string;
        };
    };
    args: {
        variant: string;
        default: string;
    };
    render: (args: {
        default: string;
    }) => {
        components: {
            Alert: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                variant?: Exclude<import('../src/components/alert').AlertVariants["variant"], "default">;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AlertDescription: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AlertTitle: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLHeadingElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
export default _default;
export declare const Default: {
    name: string;
    args: {
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Error: {
    name: string;
    args: {
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Success: {
    name: string;
    args: {
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Warning: {
    name: string;
    args: {
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const Info: {
    name: string;
    args: {
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
