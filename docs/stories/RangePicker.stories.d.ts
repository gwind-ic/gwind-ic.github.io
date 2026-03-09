declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        startlabel?: string;
        endlabel?: string;
        start?: string;
        end?: string;
        min?: string;
        max?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
        calendarPosition?: "left" | "center" | "right";
        calendarPositionY?: "top" | "bottom" | "auto";
        sparator?: string;
        disabled?: boolean;
        sparatorClass?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:start": (value: string) => any;
        "update:end": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        startlabel?: string;
        endlabel?: string;
        start?: string;
        end?: string;
        min?: string;
        max?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
        calendarPosition?: "left" | "center" | "right";
        calendarPositionY?: "top" | "bottom" | "auto";
        sparator?: string;
        disabled?: boolean;
        sparatorClass?: string;
    }> & Readonly<{
        "onUpdate:start"?: ((value: string) => any) | undefined;
        "onUpdate:end"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        startPlaceholder: {
            control: string;
        };
        endPlaceholder: {
            control: string;
        };
        startlabel: {
            control: string;
        };
        endlabel: {
            control: string;
        };
        sparator: {
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
        calendarPosition: {
            control: string;
            options: string[];
        };
        calendarPositionY: {
            control: string;
            options: string[];
        };
        disabled: {
            control: string;
        };
    };
    args: {
        startPlaceholder: string;
        endPlaceholder: string;
        startlabel: string;
        endlabel: string;
        start: string;
        end: string;
    };
};
export default _default;
export declare const Default: {
    render: (args: string) => {
        components: {
            RangePicker: import('vue').DefineComponent<{
                startlabel?: string;
                endlabel?: string;
                start?: string;
                end?: string;
                min?: string;
                max?: string;
                startPlaceholder?: string;
                endPlaceholder?: string;
                calendarPosition?: "left" | "center" | "right";
                calendarPositionY?: "top" | "bottom" | "auto";
                sparator?: string;
                disabled?: boolean;
                sparatorClass?: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "update:start": (value: string) => any;
                "update:end": (value: string) => any;
            }, string, import('vue').PublicProps, Readonly<{
                startlabel?: string;
                endlabel?: string;
                start?: string;
                end?: string;
                min?: string;
                max?: string;
                startPlaceholder?: string;
                endPlaceholder?: string;
                calendarPosition?: "left" | "center" | "right";
                calendarPositionY?: "top" | "bottom" | "auto";
                sparator?: string;
                disabled?: boolean;
                sparatorClass?: string;
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
