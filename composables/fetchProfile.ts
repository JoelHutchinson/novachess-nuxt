const key = "fetch-profile";

export const useFetchProfile = () => {
  const user = useSupabaseUser();

  const { data: profile } = useNuxtData<Profile>(key);

  const fetchProfile = async () => {
    await useFetch(`/api/profiles/${user.value.id}`, { key });
  };

  const refreshProfile = async () => {
    clearNuxtData(key);
    await refreshNuxtData(key);
  };

  return { profile, fetchProfile, refreshProfile };
};
