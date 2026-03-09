declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: string;
        placeholder?: string;
        calendarPosition?: "left" | "center" | "right";
        calendarPositionY?: "top" | "bottom" | "auto";
        min?: string;
        max?: string;
        disableTeleport?: boolean;
        disabled?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: string;
        placeholder?: string;
        calendarPosition?: "left" | "center" | "right";
        calendarPositionY?: "top" | "bottom" | "auto";
        min?: string;
        max?: string;
        disableTeleport?: boolean;
        disabled?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        wrapperRef: HTMLDivElement;
        inputRef: HTMLInputElement;
        calendarRef: HTMLDivElement;
    }, HTMLDivElement>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        placeholder: {
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
        min: {
            control: string;
        };
        max: {
            control: string;
        };
        disableTeleport: {
            control: string;
        };
        disabled: {
            control: string;
        };
    };
    args: {
        placeholder: string;
        calendarPositionY: string;
        calendarPosition: string;
        disabled: boolean;
        disableTeleport: boolean;
    };
};
export default _default;
export declare const Default: {};
