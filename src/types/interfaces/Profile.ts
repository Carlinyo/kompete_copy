export interface IProfileData {
    NAME: string;
    IMAGE: string;
}

export interface IWalletData {
    ADDRESS: string;
    CONNECTED: boolean;
}

export interface IAction {
    title: string;
    desc?: string;
    message: string;
    btnText: string;
}

export interface IFormData {
    LABEL: string;
    TYPE: string;
    PLACEHOLDER: string;
}

export interface IProfileTexts {
    TITLE: string;
}