const { SERVER_URL } = useRuntimeConfig().public;

export const useServices = () => {
  const fetchService = async (useFetchParams: [string]) => {
    const { data, error, refresh } = await useFetch(...useFetchParams);

    if (data.value) {
      return {
        success: true,
        data: data.value,
      };
    } else if (error.value) {
      console.error(error.value);
      return {
        success: false,
        error: error.value,
      };
    }
  };

  const sampleGetRequest = async (id: number) => {
    return await fetchService([`${SERVER_URL}/${id}`]);
  };

  return {
    sampleGetRequest,
  };
};
