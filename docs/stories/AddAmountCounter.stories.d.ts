declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
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
            control: string;
            description: string;
        };
        min: {
            control: string;
            description: string;
        };
        max: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
    };
    args: {
        modelValue: number;
        min: number;
        max: number;
        disabled: boolean;
    };
};
export default _default;
export declare const Default: {
    name: string;
};
export declare const WithItem: {
    name: string;
    render: () => {
        components: {
            AddAmountItem: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
                label: {
                    type: StringConstructor;
                    default: string;
                };
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
                label: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & Readonly<{}>, {
                label: string;
            }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
        };
        setup(): {
            qty: import('vue').Ref<number, number>;
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
