import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
    state: () => {
        return {
            selectedItems: [] as number[],
        }
    },

    actions: {
        selectItem(id: number): void {
            this.selectedItems = [id];
        },

        selectItems(ids: number[]): void {
            this.selectedItems = ids;
        },

        toggleItem(id: number): void {
            if (this.selectedItems.includes(id)) {
                this.selectedItems = this.selectedItems.filter((i) => i !== id);
            } else {
                this.selectedItems.push(id);
            }
        }
    },

    getters: {
        hasSelectedItem(): boolean {
            return this.selectedItems.length > 0;
        }
    }
});