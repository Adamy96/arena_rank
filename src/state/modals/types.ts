export interface ModalsInterface {
  open: string[];
  closing: string[];
  opening: string[];
  submitEvent: event[];
}

interface event {
  key: ModalIdsType;
  onSuccess?: (data?: any) => VoidFunction;
  onError?: (data?: any) => VoidFunction;
}

export type ModalIdsType = "addAccount";
