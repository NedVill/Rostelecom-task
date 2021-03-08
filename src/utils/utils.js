export const dispatcher = (obj) => {
    const event = new CustomEvent("message", {
      detail: {
        message: {...obj}
      }
    });

    document.dispatchEvent(event);
};
export const timeFormat = (num) => num < 10 ? `0${num}` : num;
