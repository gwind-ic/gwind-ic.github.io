declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            size?: import('../src/components/avatar').AvatarVariants["size"];
            shape?: import('../src/components/avatar').AvatarVariants["shape"];
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: "base" | "sm" | "lg" | null;
            shape: "circle" | "square" | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            size?: import('../src/components/avatar').AvatarVariants["size"];
            shape?: import('../src/components/avatar').AvatarVariants["shape"];
        }> & Readonly<{}>, {}, {}, {}, {}, {
            size: "base" | "sm" | "lg" | null;
            shape: "circle" | "square" | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        class?: import('vue').HTMLAttributes["class"];
        size?: import('../src/components/avatar').AvatarVariants["size"];
        shape?: import('../src/components/avatar').AvatarVariants["shape"];
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: "base" | "sm" | "lg" | null;
        shape: "circle" | "square" | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        size: {
            control: string;
            options: string[];
            description: string;
        };
        shape: {
            control: string;
            options: string[];
            description: string;
        };
        src: {
            control: string;
            description: string;
        };
    };
};
export default _default;
export declare const Default: {
    name: string;
    args: {
        size: string;
        shape: string;
        src: string;
    };
    render: (args: {
        size: string;
        shape: string;
        src: string;
    }) => {
        components: {
            Avatar: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                size?: import('../src/components/avatar').AvatarVariants["size"];
                shape?: import('../src/components/avatar').AvatarVariants["shape"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                size: "base" | "sm" | "lg" | null;
                shape: "circle" | "square" | null;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarFallback: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarImage: import('vue').DefineComponent<import('reka-ui').AvatarImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('reka-ui').AvatarImageProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                size: string;
                shape: string;
                src: string;
            };
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
export declare const Large: {
    name: string;
    args: {
        size: string;
        shape: string;
        src: string;
    };
    render: (args: {
        size: string;
        shape: string;
        src: string;
    }) => {
        components: {
            Avatar: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                size?: import('../src/components/avatar').AvatarVariants["size"];
                shape?: import('../src/components/avatar').AvatarVariants["shape"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                size: "base" | "sm" | "lg" | null;
                shape: "circle" | "square" | null;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarFallback: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarImage: import('vue').DefineComponent<import('reka-ui').AvatarImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('reka-ui').AvatarImageProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                size: string;
                shape: string;
                src: string;
            };
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
export declare const Square: {
    name: string;
    args: {
        size: string;
        shape: string;
        src: string;
    };
    render: (args: {
        size: string;
        shape: string;
        src: string;
    }) => {
        components: {
            Avatar: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                size?: import('../src/components/avatar').AvatarVariants["size"];
                shape?: import('../src/components/avatar').AvatarVariants["shape"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                size: "base" | "sm" | "lg" | null;
                shape: "circle" | "square" | null;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarFallback: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarImage: import('vue').DefineComponent<import('reka-ui').AvatarImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('reka-ui').AvatarImageProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                size: string;
                shape: string;
                src: string;
            };
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
export declare const Fallback: {
    name: string;
    args: {
        size: string;
        shape: string;
        src: string;
    };
    render: (args: {
        size: string;
        shape: string;
        src: string;
    }) => {
        components: {
            Avatar: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    size?: import('../src/components/avatar').AvatarVariants["size"];
                    shape?: import('../src/components/avatar').AvatarVariants["shape"];
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    size: "base" | "sm" | "lg" | null;
                    shape: "circle" | "square" | null;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                size?: import('../src/components/avatar').AvatarVariants["size"];
                shape?: import('../src/components/avatar').AvatarVariants["shape"];
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                size: "base" | "sm" | "lg" | null;
                shape: "circle" | "square" | null;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarFallback: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AvatarFallbackProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            AvatarImage: import('vue').DefineComponent<import('reka-ui').AvatarImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('reka-ui').AvatarImageProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: {
                size: string;
                shape: string;
                src: string;
            };
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
