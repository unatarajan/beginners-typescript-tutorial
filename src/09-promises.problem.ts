interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  // homeworld?: string;
  // films?: string[];
  // species?: string[];
  // vehicles?: string[];
  // starships?: string[];
  // created?: string;
  // edited?: string;
  // url?: string;
}

// expect returned value of function to be a promise that will eventually resolve to an object with a data shape matching above interface
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch('https://swapi.dev/api/people/1').then((res) => {
    return res.json();
  });

  return data;
};
