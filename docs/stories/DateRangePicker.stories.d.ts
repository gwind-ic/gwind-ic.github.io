declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        start?: string;
        end?: string;
        min?: string;
        max?: string;
        options: Array<{
            value: string;
            label: string;
        }>;
        startPlaceholder?: string;
        endPlaceholder?: string;
        sparator?: string;
        position?: "top" | "bottom";
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:start": (value: string) => any;
        "update:end": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        start?: string;
        end?: string;
        min?: string;
        max?: string;
        options: Array<{
            value: string;
            label: string;
        }>;
        startPlaceholder?: string;
        endPlaceholder?: string;
        sparator?: string;
        position?: "top" | "bottom";
    }> & Readonly<{
        "onUpdate:start"?: ((value: string) => any) | undefined;
        "onUpdate:end"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        startPlaceholder: {
            control: string;
        };
        endPlaceholder: {
            control: string;
        };
        sparator: {
            control: string;
        };
        options: {
            control: string;
        };
        start: {
            control: string;
        };
        end: {
            control: string;
        };
        max: {
            control: string;
        };
        min: {
            control: string;
        };
    };
    args: {
        startPlaceholder: string;
        endPlaceholder: string;
        sparator: string;
        start: string;
        end: string;
    };
};
export default _default;
export declare const Default: {
    render: (args: string) => {
        components: {
            DateRangePicker: import('vue').DefineComponent<{
                start?: string;
                end?: string;
                min?: string;
                max?: string;
                options: Array<{
                    value: string;
                    label: string;
                }>;
                startPlaceholder?: string;
                endPlaceholder?: string;
                sparator?: string;
                position?: "top" | "bottom";
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "update:start": (value: string) => any;
                "update:end": (value: string) => any;
            }, string, import('vue').PublicProps, Readonly<{
                start?: string;
                end?: string;
                min?: string;
                max?: string;
                options: Array<{
                    value: string;
                    label: string;
                }>;
                startPlaceholder?: string;
                endPlaceholder?: string;
                sparator?: string;
                position?: "top" | "bottom";
            }> & Readonly<{
                "onUpdate:start"?: ((value: string) => any) | undefined;
                "onUpdate:end"?: ((value: string) => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
        };
        setup(): {
            args: string;
            startDate: import('vue').Ref<string, string>;
            endDate: import('vue').Ref<string, string>;
        };
        template: string;
    };
};
