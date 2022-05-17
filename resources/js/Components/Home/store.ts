import { reactive } from "vue";

export const store = reactive({
    top: 0,
    updateTop(top) {
        this.top = top;
    },
});
