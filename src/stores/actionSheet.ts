import { defineStore } from "pinia";

export const useActionSheetStore = defineStore({
  id: "actionSheet",
  state: () => ({
    show: false,
  }),
  actions: {
    openActionSheet() {
      this.show = true;
    },
    closeActionSheet() {
      this.show = false;
    },
  },
});
