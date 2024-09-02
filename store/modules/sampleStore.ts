const useSampleStore = defineStore("sample", () => {
  const sampleState: Ref<string> = ref("");

  function setSampleState(newValue: string) {
    sampleState.value = newValue;
  }

  return {
    sampleState,
    setSampleState,
  };
});

export default useSampleStore;
