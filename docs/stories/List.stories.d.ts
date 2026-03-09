declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            type?: "ordered" | "unordered";
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            type?: "ordered" | "unordered";
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        class?: import('vue').HTMLAttributes["class"];
        type?: "ordered" | "unordered";
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    subcomponents: {
        ListItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                item?: string | object | number;
                index: number;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                item?: string | object | number;
                index: number;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            class?: import('vue').HTMLAttributes["class"];
            item?: string | object | number;
            index: number;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                customIcon?(_: {}): any;
                default?(_: {}): any;
                default?(_: {}): any;
            };
        });
    };
    tags: string[];
    argTypes: {
        type: {
            control: string;
            options: string[];
        };
    };
    args: {
        type: string;
        default: string;
    };
    render: (args: {
        default: string;
    }) => {
        components: {
            ListGroup: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    type?: "ordered" | "unordered";
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    type?: "ordered" | "unordered";
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                type?: "ordered" | "unordered";
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
            ListItem: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    item?: string | object | number;
                    index: number;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    class?: import('vue').HTMLAttributes["class"];
                    item?: string | object | number;
                    index: number;
                }> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                class?: import('vue').HTMLAttributes["class"];
                item?: string | object | number;
                index: number;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    customIcon?(_: {}): any;
                    default?(_: {}): any;
                    default?(_: {}): any;
                };
            });
        };
        setup(): {
            args: {
                default: string;
            };
            items: import('vue').Ref<{
                label: string;
                value: string;
            }[], {
                label: string;
                value: string;
            }[] | {
                label: string;
                value: string;
            }[]>;
        };
        template: string;
    };
};
export default _default;
export declare const Ordered: {
    args: {
        type: string;
    };
};
export declare const Unordered: {
    args: {
        type: string;
    };
};
export declare const CustomList: {
    args: {
        default: string;
    };
};
