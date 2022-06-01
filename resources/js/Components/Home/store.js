import { reactive } from "vue";

export const store = reactive({
    scrollY: 0,
    currentPage: 0,
    numOfPages: 0,
    workProgress: 0,
    updateWorkProgress(progress) {
        this.workProgress = progress;
    },
    updateCurrentPage(page) {
        this.currentPage = page;
    },
    updateTop(top) {
        this.scrollY = top;
    },
});
