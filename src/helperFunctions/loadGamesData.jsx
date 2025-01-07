export const loadGamesData = async () => {
  try {
    const response = await fetch('/gamesDatabase.json');
    if (!response.ok) {
      throw new Error('Failed to fetch games data');
    }
    const data = await response.json();
    console.log("Raw",data.games);
    return data.games;
  } catch (error) {
    console.error('Error loading games data:', error);
    return [];
  }
};
