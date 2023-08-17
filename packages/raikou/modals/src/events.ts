import { createUseExternalEvents } from "../../components/_utils";
import {
  RaikouModal,
  RaikouModals,
  ModalSettings,
  OpenConfirmModal,
  OpenContextModal,
} from "./context";

type ModalsEvents = {
  openModal(payload: ModalSettings): void;
  closeModal(id: string): void;
  closeContextModal<TKey extends RaikouModal>(id: TKey): void;
  closeAllModals(): void;
  openConfirmModal(payload: OpenConfirmModal): void;
  openContextModal<TKey extends RaikouModal>(
    payload: OpenContextModal<
      Parameters<RaikouModals[TKey]>[0]["innerProps"]
    > & { modal: TKey },
  ): void;
};

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>("raikou-modals");

export const openModal = createEvent("openModal");
export const closeModal = createEvent("closeModal");
export const closeContextModal: ModalsEvents["closeContextModal"] = <
  TKey extends RaikouModal,
>(
  id: TKey,
) => createEvent("closeContextModal")(id);
export const closeAllModals = createEvent("closeAllModals");
export const openConfirmModal = createEvent("openConfirmModal");
export const openContextModal: ModalsEvents["openContextModal"] = <
  TKey extends RaikouModal,
>(
  payload: OpenContextModal<Parameters<RaikouModals[TKey]>[0]["innerProps"]> & {
    modal: TKey;
  },
) => createEvent("openContextModal")(payload);

export const modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal,
};
