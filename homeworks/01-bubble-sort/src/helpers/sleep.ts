import CONFIG from "../config";

const sleep = (ms: number = CONFIG.SORTING_DELAY): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
